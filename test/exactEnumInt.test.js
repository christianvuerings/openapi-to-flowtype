import runTest from "./runTest";

describe("with --exact", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --exact test/__mocks__/exactEnumInt.openapi.yaml",
      expectedFile: "test/__mocks__/exactEnumInt.openapi.js",
    });
    expect(input).toEqual(output);
  });
});
