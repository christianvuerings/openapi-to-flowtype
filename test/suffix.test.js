import runTest from "./runTest";

describe("with --suffix", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --suffix Type test/__mocks__/openapi.yaml",
      expectedFile: "test/__mocks__/suffix/expected.yaml.flow.js",
    });
    expect(input).toEqual(output);
  });

  it("should generate expected flow types from openapi.json", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --suffix Type test/__mocks__/openapi.json",
      expectedFile: "test/__mocks__/suffix/expected.json.flow.js",
    });
    expect(input).toEqual(output);
  });
});
