import { Command } from "https://deno.land/x/cliffy@v0.25.4/command/mod.ts";
import { copySync } from "https://deno.land/std@0.165.0/fs/mod.ts";
import { initProject } from "./init/main.ts";
// import * as path from "https://deno.land/std@0.165.0/path/mod.ts";

await new Command()
  // Main command.
  .name("create-doxi-app")
  .version("0.0.1")
  .description("Command line test")
  .option("-d, --dir", "Name of the directory")
  .arguments("<directory>")
  .action(async (options, ...args) => {
    await initProject(Deno.cwd(), args[0]);
    // console.log(new URL("content", import.meta.url));
    // copySync(new URL("content", import.meta.url), args[0]);
    // Deno.mkdir(args[0]);
    console.log(`next steps:\ncd ${args[0]}\nnpm i\nnpm run dev`);
  })
  .parse(Deno.args);
