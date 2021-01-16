import fs from "fs";
import prettier from "prettier";
import { exec } from "child_process";
import util from "util";
const asyncExec = util.promisify(exec);

export default async function runTest({ command, expectedFile }) {
  const { stdout } = await asyncExec(command);
  const expected = prettier.format(fs.readFileSync(expectedFile, "utf8"), {
    parser: "babel",
  });
  return {
    input: stdout.trim(),
    output: expected.trim(),
  };
}
