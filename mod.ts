import { Command } from "https://deno.land/x/cliffy@v0.25.4/command/mod.ts";
import { copySync } from "https://deno.land/std@0.165.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.165.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

await new Command()
  // Main command.
  .name("create-doxi-app")
  .version("0.0.1")
  .description("Command line test")
  .option("-d, --dir", "Name of the directory")
  .arguments("<directory>")
  .action((options, ...args) => {
    copySync(`${__dirname}/content`, args[0]);
    // Deno.mkdir(args[0]);
    console.log(`Next steps:\ncd ${args[0]}\nnpm i\nnpm run dev`);
  })
  .parse(Deno.args);
