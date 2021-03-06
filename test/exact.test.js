import runTest from "./runTest";

describe("with --exact", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --exact test/__mocks__/openapi.yaml",
      expectedFile: "test/__mocks__/exact/expected.yaml.flow.js",
    });
    expect(input).toEqual(output);
  });

  it("should generate expected flow types from openapi.json", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --exact test/__mocks__/openapi.json",
      expectedFile: "test/__mocks__/exact/expected.json.flow.js",
    });
    expect(input).toEqual(output);
  });
});
