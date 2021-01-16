import { exec } from "child_process";
import util from "util";
const asyncExec = util.promisify(exec);

module.exports = async () => {
  await asyncExec("npm run build");
};
