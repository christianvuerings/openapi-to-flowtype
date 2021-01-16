import runTest from "./runTest";

describe("parse objct in array", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout test/__mocks__/nestedObject.openapi.yaml",
      expectedFile: "test/__mocks__/nestedObject.flow.js",
    });
    expect(input).toEqual(output);
  });
});
