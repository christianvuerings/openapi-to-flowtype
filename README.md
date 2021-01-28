# openapi-to-flowtype (forked)

Forked version of https://www.npmjs.com/package/openapi-to-flowtype with the following changes:

- Use `{ [key: string] : mixed}` for `object` types without any properties. Previously this was typed as `{}` which causes issues in exact mode
- Fix `Array<undefined>` output types by falling back to `mixed` when no type is defined
- Replace `Array<*>` with `Array<mixed>`
- Add pinterest open api schema as a test
- 0.9.3: fix issue with discriminator (anyOf, oneOf allOf) not being the first item
- 0.9.4: fix --exact with top level object types & add --verbose option
- 0.9.5: fix string escaping
- 0.9.6: fix string escaping within properties
- 0.9.6: fix string escaping within properties
- 0.9.7: support keys starting with a numeric value + introduce prettier + improve tests
- 0.9.8: use $ReadOnlyArray instead of Array
- 0.9.9: fix camelize import
- 0.9.10: fix destination parameter
- 0.9.11: move prettier & other dependencies
- 0.9.12: only move prettier over to dependencies
- 0.9.13: support enum numerical literal types
- 0.9.14: support open ended objects

`openapi-to-flowtype` is a tool for generating type definitions of [Flow](https://flow.org/) from OpenAPI 3.0 file.

[![NPM version][npm-image]][npm-url]
[![Build Status][github-workflow-image]][github-workflow-url]
[![Downloads][downloads-image]][downloads-url]

## Getting started

### Install package

`npm i -g openapi-to-flowtype`

### Generating flow type definitions

`$openapi-to-flowtype <YOUR SWAGGER FILE OR URL>`

This command generates a file named **flowtype.js** includes type definitions as default.

## Options

### Specify an output path

You can also specify an output path with `-d option`.

`$openapi-to-flowtype <YOUR SWAGGER FILE PATH OR URL> -d <OUTPUT FILE PATH>`

### Generate types for operation titled responses as well

You can enable type generation for operation responses (if they have schema title specified) with `--responses`.

`$openapi-to-flowtype <YOUR SWAGGER FILE PATH OR URL> --responses`

### Specify a suffix for generated types

You can specify a suffix for all generated types with `--suffix <suffix>`.

`$openapi-to-flowtype <YOUR SWAGGER FILE PATH OR URL> -suffix <YOUR SUFFIX>`

### Transform property key to lower camel case

`--lower-camel-case` option transforms each property keys to lower camel case.

```json
"Cat": {
  "type": "object",
  "properties": {
    "long_long_key": {
      "type": "string"
    }
  }
}
```

will be

```js
export type Cat = { longLongKey?: string };
```

## Example

swagger file like following

```yaml
---
components:
  schemas:
    Order:
      type: "object"
      properties:
        id:
          type: "integer"
          format: "int64"
        petId:
          type: "integer"
          format: "int64"
        quantity:
          type: "integer"
          format: "int32"
        shipDate:
          type: "string"
          format: "date-time"
        status:
          type: "string"
          description: "Order Status"
          enum:
            - "placed"
            - "approved"
            - "delivered"
        complete:
          type: "boolean"
          default: false
      xml:
        name: "Order"
    Category:
      type: "object"
      properties:
        id:
          type: "integer"
          format: "int64"
        name:
          type: "string"
      xml:
        name: "Category"
```

Output will be like below

```js
// @flow
export type Order = {
  id?: number,
  petId?: number,
  quantity?: number,
  shipDate?: string,
  status?: "placed" | "approved" | "delivered",
  complete?: boolean,
};
export type Category = { id?: number, name?: string };
```

## Requirements

- Node 12+ is required

## Tests

`npm test`

# Testimonials

Based on [swagger-to-flowtype](https://github.com/yayoc/swagger-to-flowtype) by [yayoc](http://yayoc.com).

[npm-image]: https://img.shields.io/npm/v/@christianv/openapi-to-flowtype.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@christianv/openapi-to-flowtype
[github-workflow-image]: https://img.shields.io/github/workflow/status/christianvuerings/openapi-to-flowtype/CI/main?style=flat-square
[github-workflow-url]: https://github.com/christianvuerings/openapi-to-flowtype/actions?query=workflow%3ACI+branch%3Amain
[downloads-image]: https://img.shields.io/npm/dm/@christianv/openapi-to-flowtype.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/@christianv/openapi-to-flowtype
