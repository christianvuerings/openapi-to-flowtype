#! /usr/bin/env node
// @flow

// eslint-disable-next-line
import "core-js/stable";
import "regenerator-runtime/runtime";

import Generator from "./Generator";
import prettier from "prettier";
import { program } from "commander";
import { getContent, distFile, writeToFile } from "./util";

const DEFAULT_PRETTIER_OPTIONS = {
  parser: "babel",
};

export const generator = (specification: Object, file: string) => {
  const generator: Generator = new Generator();
  const options = program.opts();
  generator.exact = options.exact || generator.exact;
  generator.lowerCamelCase = options.lowerCamelCase || generator.lowerCamelCase;
  generator.suffix = options.suffix || generator.suffix;
  generator.verbose = options.verbose || generator.verbose;

  const result: string = generator.generate(specification);

  const prettierOptions: any = {
    ...DEFAULT_PRETTIER_OPTIONS,
    ...(prettier.resolveConfig.sync(file) || {}),
  };
  return prettier.format(result, prettierOptions);
};

program
  .arguments("<file>")
  .option("-d --destination <destination>", "Destination path")
  .option("-e --exact", "Add exact types")
  .option("-v --verbose", "Verbose output")
  .option(
    "--suffix <suffix>",
    'Add suffix (like "Type") to all generated types'
  )
  .option(
    "-l --lower-camel-case",
    "Transform property keys to lower camel case"
  )
  .option("--stdout", "Log output to stdout instead of writing to file")
  .action(async (file) => {
    try {
      const options = program.opts();
      const content = await getContent(file);
      const result = generator(content, file);
      if (options.stdout) {
        console.log(result);
      } else {
        const dist = distFile(options, file);
        writeToFile(dist, result);
        console.log(`Generated flow types to ${dist}`);
      }
    } catch (e) {
      console.log(e);
    }
  })
  .parse(process.argv);
