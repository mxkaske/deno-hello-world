import * as path from "https://deno.land/std@0.165.0/path/mod.ts";
import * as fs from "https://deno.land/std@0.165.0/fs/mod.ts";

// const initPath = path.dirname(path.fromFileUrl(import.meta.url));

// console.log({ initPath });

const resources = [
  {
    read: "./content/test.json",
    write: "/test.json",
  },
  { read: "./content/test.ts", write: "/test.ts" },
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
    const fp_read = resource.read;
    const fp_write = path.join(root, resource.write);
    console.log(root, fp_read, fp_write);
    await fs.ensureFile(fp_read);
    const bytes = await Deno.readFile(fp_read);
    console.log(fp_read, bytes);
    await Deno.writeFile(fp_write, bytes);
  }
  console.log("done.");
}
