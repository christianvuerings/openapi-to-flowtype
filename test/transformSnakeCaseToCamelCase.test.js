import runTest from "./runTest";

describe("transform key string to lower camel case", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --lower-camel-case test/__mocks__/transformSnakeCaseToCamelCase.openapi.yaml",
      expectedFile: "test/__mocks__/transformSnakeCaseToCamelCase.flow.js",
    });
    expect(input).toEqual(output);
  });
});
