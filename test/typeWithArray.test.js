import runTest from "./runTest";

describe("parse property with type array", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout test/__mocks__/typeWithArray.openapi.yaml",
      expectedFile: "test/__mocks__/typeWithArray.flow.js",
    });
    expect(input).toEqual(output);
  });
});
