import runTest from "./runTest";

describe("additionalProperties", () => {
  it("should generate expected flow types for additionalProperties open api schema", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --exact test/__mocks__/additionalProperties.openapi.yaml",
      expectedFile: "test/__mocks__/additionalProperties.openapi.js",
    });
    expect(input).toEqual(output);
  });
});
