import runTest from "./runTest";

describe("parse object in array", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --parameters test/__mocks__/parametersIncluded.openapi.yaml",
      expectedFile: "test/__mocks__/parametersIncluded.flow.js",
    });
    expect(input).toEqual(output);
  });
});
