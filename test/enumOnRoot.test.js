import runTest from "./runTest";

describe("parse enum on root element", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout test/__mocks__/enumOnRoot.openapi.yaml",
      expectedFile: "test/__mocks__/enumOnRoot.flow.js",
    });
    expect(input).toEqual(output);
  });
});
