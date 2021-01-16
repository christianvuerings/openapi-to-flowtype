import runTest from "./runTest";

describe("parse object in array", () => {
  it("should generate expected flow types", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --exact test/__mocks__/objectInArray.openapi.yaml",
      expectedFile: "test/__mocks__/objectInArrayWithExact.flow.js",
    });
    expect(input).toEqual(output);
  });

  it("should generate expected flow types for pinterests open api schema", async () => {
    const { input, output } = await runTest({
      command:
        "node ./dist/index.js --stdout --exact test/__mocks__/pinterest.openapi.yaml",
      expectedFile: "test/__mocks__/pinterest.openapi.js",
    });
    expect(input).toEqual(output);
  });
});
