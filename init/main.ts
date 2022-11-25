import * as path from "https://deno.land/std@0.165.0/path/mod.ts";
import * as fs from "https://deno.land/std@0.165.0/fs/mod.ts";

const resources = [{ path: "content/test.json" }, { path: "content/test.ts" }];

export async function initProject(folder: string, name: string) {
  const root = path.join(folder, name);
  if (await fs.exists(root)) {
    console.error(`directory exist, please delete it first: ${root}`);
    return null;
  }
  console.log("generating...");
  await fs.ensureDir(root);
  for (const resource of resources) {
    const fp = path.join(root, resource.path);
    await fs.ensureFile(fp);
    const bytes = await Deno.readFile(fp);
    await Deno.writeFile(fp, bytes);
  }
  console.log("done.");
}
