import { readdir, readFile, writeFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { v2 as cloudinary } from "cloudinary";

const root = process.cwd();
const envText = await readFile(join(root, ".env"), "utf8");
const env = Object.fromEntries(
  envText.split(/\r?\n/).map((line) => line.trim()).filter((line) => line && !line.startsWith("#") && line.includes("=")).map((line) => {
    const separator = line.indexOf("=");
    return [line.slice(0, separator).trim(), line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "")];
  }),
);

for (const key of ["CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"]) {
  if (!env[key]) throw new Error(`Missing ${key} in .env`);
}

cloudinary.config({ cloud_name: env.CLOUDINARY_CLOUD_NAME, api_key: env.CLOUDINARY_API_KEY, api_secret: env.CLOUDINARY_API_SECRET });

const imagesRoot = join(root, "images");
const developers = (await readdir(imagesRoot, { withFileTypes: true })).filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
const uploads = [];

for (const developer of developers) {
  const directory = join(imagesRoot, developer);
  const files = (await readdir(directory, { withFileTypes: true })).filter((entry) => entry.isFile() && [".png", ".jpg", ".jpeg", ".webp"].includes(extname(entry.name).toLowerCase())).map((entry) => entry.name).sort();
  for (const [index, filename] of files.entries()) {
    const filePath = join(directory, filename);
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "pointonepercentgrowth/portfolio",
      public_id: `${developer.toLowerCase()}/${String(index + 1).padStart(2, "0")}`,
      overwrite: true,
      resource_type: "image",
    });
    uploads.push({ id: `${developer.toLowerCase()}-${String(index + 1).padStart(2, "0")}`, developer, imageUrl: result.secure_url, source: relative(root, filePath).replaceAll("\\", "/"), title: `${developer} Portfolio ${String(index + 1).padStart(2, "0")}` });
    console.log(`Uploaded ${developer}: ${index + 1}/${files.length}`);
  }
}

await writeFile(join(root, "data", "portfolio-images.json"), `${JSON.stringify(uploads, null, 2)}\n`);
console.log(`Completed: ${uploads.length} images uploaded.`);
