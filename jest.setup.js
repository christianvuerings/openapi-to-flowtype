import { exec } from "child_process";
import util from "util";
const asyncExec = util.promisify(exec);

// Run the build before every test.
// It slows down the tests but ensures we get the latest version in jest watch mode
global.beforeEach(async () => {
  await asyncExec("npm run build");
});
