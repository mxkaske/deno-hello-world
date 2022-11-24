import { build, emptyDir } from "https://deno.land/x/dnt@0.23.0/mod.ts";

const packageManager = "npm";
const outDir = "./dist";
const version = Deno.args[0] ?? "development";

await emptyDir(outDir);

await build({
  packageManager,
  entryPoints: [{ kind: "bin", name: "deno-hello-world", path: "mod.ts" }],
  outDir,
  shims: {
    deno: true,
  },
  scriptModule: false,
  declaration: false,
  typeCheck: false,
  package: {
    name: "@mxkaske/deno-hello-world",
    version,
    description: "Command line test",
    repository: {
      type: "git",
      url: "git+https://github.com/mxkaske/deno-hello-world.git",
    },
  },
});
