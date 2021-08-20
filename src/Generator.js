// @flow

import camelize from "camelize";

const EMPTY_OBJECT: any = "{ [key: string]: mixed }";

// OpenAPI data types are base on types supported by the JSON-Scheme Draft4.
const typeMapping = {
  array: "$ReadOnlyArray<mixed>",
  boolean: "boolean",
  integer: "number",
  number: "number",
  null: "null",
  object: "Object",
  Object: "Object",
  string: "string",
  enum: "string",
  mixed: "mixed",
};

const discriminatorMap = {
  allOf: "&",
  oneOf: "|",
  anyOf: "|",
};

const isPlainObject = (obj) =>
  Object.prototype.toString.call(obj) === "[object Object]";

const stripBrackets = (name: string) => name.replace(/[[\]']+/g, "");

const isRequired = (propertyName: string, definition: Object): boolean => {
  const result =
    definition.required && definition.required.indexOf(propertyName) >= 0;
  return result;
};

const isNullable = (property: Object): boolean => property.nullable;

const withExact = (property: string): string =>
  property.replace(/\{[^|}.]/g, "{|").replace(/[^|{.]\}/g, "|}");

type Descriminators = $Keys<typeof discriminatorMap>;
class DescriminatorItems {
  items: $ReadOnlyArray<Object>;
  type: Descriminators;

  constructor({
    items,
    type,
  }: {
    items: $ReadOnlyArray<Object>,
    type: Descriminators,
  }) {
    this.items = items;
    this.type = type;
  }
}

export default class Generator {
  exact: boolean = false;
  verbose: boolean = false;
  lowerCamelCase: boolean = false;
  responses: boolean = false;
  suffix: string = "";
  log: $ReadOnlyArray<$ReadOnlyArray<string>> = [];

  definitionTypeName(ref: string) {
    const re = /#\/components\/schemas\/(.*)/;
    const found = ref.match(re);
    if (!found) {
      return "";
    }
    return found[1] + this.suffix;
  }

  appendToLog(...args: $ReadOnlyArray<string>) {
    // $FlowFixMe
    this.log.push(args);
  }

  generate(specification: any): string {
    try {
      const output = "// @flow strict\n" + this.generateImpl(specification);
      if (this.verbose) {
        console.log(JSON.stringify(this.log, null, 4));
      }
      return output;
    } catch (error) {
      if (this.log.length) {
        const lastItems = this.log.reduce((acc, currentValue) => {
          acc[currentValue[0]] = currentValue[1];
          return acc;
        }, {});
        console.error("Exception location", lastItems);
      }
      throw error;
    }
  }

  generateImpl(specification: any): string {
    const toProcess: Map<string, any> = new Map();
    for (const [key, schema] of Object.entries(
      ((specification || EMPTY_OBJECT).components || EMPTY_OBJECT).schemas ||
        EMPTY_OBJECT
    )) {
      toProcess.set(key, schema);
    }

    if (this.responses) {
      for (const byPath of Object.values(specification.paths || EMPTY_OBJECT)) {
        // $FlowFixMe
        for (const byMethod of Object.values(byPath)) {
          for (const byReturnCode of Object.values(
            // $FlowFixMe
            byMethod.responses || EMPTY_OBJECT
          )) {
            for (const byMime of Object.values(
              // $FlowFixMe
              byReturnCode.content || EMPTY_OBJECT
            )) {
              // $FlowFixMe
              const { schema } = byMime;
              if (!schema) continue;
              if (!schema.title) continue;
              toProcess.set(schema.title, schema);
            }
          }
        }
      }
    }

    if (toProcess.size === 0) {
      throw new Error(
        "There is no definitions in file, is it really OpenAPI 3.x?"
      );
    }

    const result: string[] = [];
    for (const [definitionName, def] of toProcess) {
      this.appendToLog("definitionName", definitionName);
      const typeDefinition: string = `export type ${stripBrackets(
        definitionName
      )}${this.suffix} = ${this.propertiesTemplate(this.propertiesList(def))
        .replace(/"/g, "")
        .replace(/\\\\/g, "\\")};`;
      result.push(typeDefinition);
    }

    return result.join("\n");
  }

  propertiesList(definition: any) {
    if ("allOf" in definition) {
      return new DescriminatorItems({
        items: definition.allOf.map(this.propertiesList, this),
        type: "allOf",
      });
    }

    if (
      "oneOf" in definition &&
      definition.oneOf.filter((item) => item.additionalProperties).length === 0
    ) {
      return new DescriminatorItems({
        items: definition.oneOf.map(this.propertiesList, this),
        type: "oneOf",
      });
    }

    if (definition.$ref) {
      return { $ref: this.definitionTypeName(definition.$ref) };
    }

    if ("type" in definition && definition.type !== "object") {
      const response = this.typeFor(definition);
      return response;
    }

    const hasAdditionalPropertiesObject =
      definition.additionalProperties &&
      definition.additionalProperties !== true &&
      definition.type === "object";

    if (
      (!definition.properties ||
        Object.keys(definition.properties).length === 0) &&
      !hasAdditionalPropertiesObject
    ) {
      return EMPTY_OBJECT;
    }

    return {
      //$FlowIssue Computing  object literal [1] may lead to an exponentially large number of cases
      ...(definition.properties
        ? Object.keys(definition.properties).reduce(
            (properties: Object, propName: string) => {
              const property = definition.properties[propName];
              this.appendToLog("properties - propertyName", propName);
              this.appendToLog("properties - property", property);
              return {
                ...properties,
                ...{
                  [this.propertyKeyForDefinition(propName, definition)]: `${
                    isNullable(property) ? "?" : ""
                  }${this.typeFor(property)}`,
                },
              };
            },
            {}
          )
        : {}),
      ...(hasAdditionalPropertiesObject
        ? Object.keys(definition.additionalProperties).reduce(
            (properties: Object, propName: string) => {
              const property = definition.additionalProperties[propName];
              this.appendToLog("additionalProperties - propertyName", propName);
              this.appendToLog("additionalProperties - property", property);

              if (propName === "$ref") {
                return {
                  "[key: string]": `?${this.definitionTypeName(
                    definition.additionalProperties.$ref
                  )}`,
                };
              }

              return {
                "[key: string]": `?${this.typeFor(
                  definition.additionalProperties
                )}`,
              };
            },
            {}
          )
        : {}),
    };
  }

  propertiesTemplate(
    properties: Object | $ReadOnlyArray<Object> | string
  ): string {
    if (typeof properties === "string") {
      return withExact(properties);
    }

    if (properties instanceof DescriminatorItems) {
      const symbol = discriminatorMap[properties.type];
      return properties.items
        .map((property) => {
          let p = property.$ref
            ? `${symbol} ${property.$ref}`
            : `${symbol} ${
                isPlainObject(property) ? JSON.stringify(property) : property
              }`;
          if (!property.$ref && this.exact) {
            p = withExact(p);
          }
          return p;
        })
        .sort((a) => (a[0] === symbol ? 1 : -1))
        .join(" ");
    }

    // if (Array.isArray(properties)) {
    //   return properties
    //     .map((property) => {
    //       let p = property.$ref
    //         ? `& ${property.$ref}`
    //         : `& ${
    //             isPlainObject(property) ? JSON.stringify(property) : property
    //           }`;
    //       if (!property.$ref && this.exact) {
    //         p = withExact(p);
    //       }
    //       return p;
    //     })
    //     .sort((a) => (a[0] === "&" ? 1 : -1))
    //     .join(" ");
    // }

    if (this.exact) {
      return withExact(JSON.stringify(properties));
    }
    return JSON.stringify(properties);
  }

  propertyKeyForDefinition(propName: string, definition: Object): string {
    let resolvedPropName =
      propName.includes("-") || propName.includes(":") || /^\d/.test(propName)
        ? `'${propName}'`
        : propName;
    if (this.lowerCamelCase) {
      resolvedPropName = camelize(resolvedPropName);
    }
    return `${resolvedPropName}${isRequired(propName, definition) ? "" : "?"}`;
  }

  typeFor(property: any): string {
    if (property.type === "array") {
      if ("oneOf" in property.items) {
        return `$ReadOnlyArray<${property.items.oneOf
          .map((e) =>
            e.type === "object"
              ? this.propertiesTemplate(this.propertiesList(e.items)).replace(
                  /"/g,
                  ""
                )
              : this.typeFor(e)
          )
          .join(" | ")}>`;
      } else if ("$ref" in property.items) {
        return `$ReadOnlyArray<${this.definitionTypeName(
          property.items.$ref
        )}>`;
      } else if (property.items.type === "object") {
        const child = this.propertiesTemplate(
          this.propertiesList(property.items)
        ).replace(/"/g, "");
        return `$ReadOnlyArray<${child}>`;
      }
      const type = property.items.type || "mixed";
      return `$ReadOnlyArray<${typeMapping[type]}>`;
    } else if (property.type === "string" && "enum" in property) {
      return property.enum
        .map((e) => `'${e.replace(/'/g, "\\'")}'`)
        .join(" | ");
    } else if (property.type === "integer" && "enum" in property) {
      return property.enum.join(" | ");
    } else if (Array.isArray(property.type)) {
      return property.type.map((t) => typeMapping[t]).join(" | ");
    } else if (Object.keys(property).some((d) => discriminatorMap[d])) {
      const discriminators = Object.keys(property).filter(
        (d) => discriminatorMap[d]
      );

      if (!discriminators.length) {
        throw new Error("Could not find a discriminator");
      } else if (discriminators.length > 1) {
        throw new Error(
          `Avoid multiple discriminators: ${discriminators.join(" / ")}`
        );
      }

      const discriminator = discriminators[0];
      return property[discriminator]
        .map((p) => this.typeFor(p))
        .join(discriminatorMap[discriminator]);
    } else if (property.type === "object") {
      return this.propertiesTemplate(this.propertiesList(property)).replace(
        /"/g,
        ""
      );
    }
    return typeMapping[property.type] || this.definitionTypeName(property.$ref);
  }
}
