import runTest from "./runTest";

describe("parse property with dashes", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout test/__mocks__/propertyWithDashes.openapi.yaml",
      expectedFile: "test/__mocks__/propertyWithDashes.flow.js",
    });
    expect(input).toEqual(output);
  });
});
