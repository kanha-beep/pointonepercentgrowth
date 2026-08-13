import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDirectory = path.join(__dirname, "..", "data");
const enquiryFile = path.join(dataDirectory, "enquiries.json");

async function ensureStorage() {
  await mkdir(dataDirectory, { recursive: true });

  try {
    await readFile(enquiryFile, "utf8");
  } catch {
    await writeFile(enquiryFile, "[]", "utf8");
  }
}

export async function saveEnquiry(enquiry) {
  await ensureStorage();
  const existing = await readFile(enquiryFile, "utf8");
  const entries = JSON.parse(existing);

  entries.unshift({
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...enquiry
  });

  await writeFile(enquiryFile, JSON.stringify(entries, null, 2), "utf8");
}
