import runTest from "./runTest";

describe("pinterest openapi schema", () => {
  it("should generate expected flow types for pinterests open api schema", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --exact test/__mocks__/pinterest.openapi.yaml",
      expectedFile: "test/__mocks__/pinterest.openapi.js",
    });
    expect(input).toEqual(output);
  });
});
