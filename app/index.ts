import { z } from "zod";
import { defineCommand } from "mcmd";

import util from "node:util";
import child_process from "node:child_process";
import fs from "node:fs";

const exec = util.promisify(child_process.exec);
const rm = util.promisify(fs.rm);

export const options = z.object({
    name: z.string(),
});

export default defineCommand<typeof options>(async ({ name }) => {
    const { stdout, stderr } = await exec(
        `git clone https://github.com/rajatsandeepsen/create-mcmd-app.git ./${name}`,
    );
    stdout?.length && console.log(stdout);
    stderr?.length && console.error(stderr);

    await rm(`./${name}/.git`, { recursive: true, force: true });

    console.log("MCMD Template cloned");
});
