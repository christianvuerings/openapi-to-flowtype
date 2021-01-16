import runTest from "./runTest";

describe("parse object in array", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout test/__mocks__/objectInArray.openapi.yaml",
      expectedFile: "test/__mocks__/objectInArray.flow.js",
    });
    expect(input).toEqual(output);
  });
});
