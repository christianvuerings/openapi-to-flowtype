import runTest from "./runTest";

describe("top level - oneOf openapi schema", () => {
  it("should generate expected flow types for top level oneOf open api schema", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --exact test/__mocks__/topLevelOneOf.openapi.yaml",
      expectedFile: "test/__mocks__/topLevelOneOf.openapi.js",
    });
    expect(input).toEqual(output);
  });
});
