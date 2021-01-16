import runTest from "./runTest";

describe("parse mixed-type array", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout test/__mocks__/mixedTypeArray.openapi.yaml",
      expectedFile: "test/__mocks__/mixedTypeArray.flow.js",
    });
    expect(input).toEqual(output);
  });
});
