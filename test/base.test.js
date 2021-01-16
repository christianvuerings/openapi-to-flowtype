import runTest from "./runTest";

describe("Default settings", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command: "node ./dist/index.js --stdout test/__mocks__/openapi.yaml",
      expectedFile: "test/__mocks__/expected.yaml.flow.js",
    });
    expect(input).toEqual(output);
  });

  it("should generate expected flow types from openapi.json", async () => {
    const { input, output } = await runTest({
      command: "node ./dist/index.js --stdout test/__mocks__/openapi.json",
      expectedFile: "test/__mocks__/openapi.js",
    });
    expect(input).toEqual(output);
  });
});
