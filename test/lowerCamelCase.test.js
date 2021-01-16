import runTest from "./runTest";

describe("with --lower-camel-case", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --lower-camel-case test/__mocks__/openapi.yaml",
      expectedFile: "test/__mocks__/lowerCamelCase/expected.yaml.flow.js",
    });
    expect(input).toEqual(output);
  });

  it("should generate expected flow types from openapi.json", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --lower-camel-case test/__mocks__/openapi.json",
      expectedFile: "test/__mocks__/lowerCamelCase/expected.json.flow.js",
    });
    expect(input).toEqual(output);
  });
});
