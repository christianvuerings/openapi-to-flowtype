import fs from "fs";
import { exec } from "child_process";
import util from "util";
const asyncExec = util.promisify(exec);

describe("with --destination", () => {
  const destinationSpecific =
    "test/__mocks__/destinationSpecific.openapi.flow.js";
  const destinationDefault = "test/__mocks__/destinationPath.openapi.js";

  afterEach(async () => {
    // Delete files
    try {
      await fs.promises.unlink(destinationSpecific);
    } catch (e) {
      // Cleanup, we don't want to log anything
    }
    try {
      await fs.promises.unlink(destinationDefault);
    } catch (e) {
      // Cleanup, we don't want to log anything
    }
  });

  it("should generate expected flow types and write them to a specific file", async () => {
    await asyncExec(
      `node ./dist/index.js --exact --destination=${destinationSpecific} test/__mocks__/destinationPath.openapi.yaml`
    );

    let fileExists = false;

    try {
      fileExists = fs.existsSync(destinationSpecific);
    } catch (error) {
      console.log(error);
    }

    expect(fileExists).toEqual(true);
  });
});
