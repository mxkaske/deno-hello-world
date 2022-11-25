import * as path from "https://deno.land/std@0.165.0/path/mod.ts";
import * as fs from "https://deno.land/std@0.165.0/fs/mod.ts";

const resources = [
  {
    read: "../content/test.json",
    write: "/test.json",
  },
  { read: "../content/test.ts", write: "/test.ts" },
];

export async function initProject(folder: string, name: string) {
  const root = path.join(folder, name);
  if (await fs.exists(root)) {
    console.error(`directory exist, please delete it first: ${root}`);
    return null;
  }
  console.log("generating...");
  await fs.ensureDir(root);
  for (const resource of resources) {
    const fp_read = path.join(root, resource.read);
    const fp_write = path.join(root, resource.write);
    await fs.ensureFile(fp_read);
    const bytes = await Deno.readFile(fp_read);
    await Deno.writeFile(fp_write, bytes);
  }
  console.log("done.");
}
