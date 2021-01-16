import runTest from "./runTest";

describe("parse oas3 document", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command: "node ./dist/index.js --stdout test/__mocks__/oas3.openapi.yaml",
      expectedFile: "test/__mocks__/oas3.openapi.flow.js",
    });
    expect(input).toEqual(output);
  });
});
