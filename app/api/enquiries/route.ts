import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { NextResponse } from "next/server";

import type { EnquiryInput } from "@/lib/site";

const dataDirectory = path.join(process.cwd(), "data");
const enquiryFile = path.join(dataDirectory, "enquiries.json");

async function ensureStorage() {
  await mkdir(dataDirectory, { recursive: true });

  try {
    await readFile(enquiryFile, "utf8");
  } catch {
    await writeFile(enquiryFile, "[]", "utf8");
  }
}

export async function POST(request: Request) {
  const { name, businessType, phone, packageName, message } = (await request.json()) as Partial<EnquiryInput>;

  if (!name || !businessType || !phone || !packageName || !message) {
    return NextResponse.json({ message: "Please fill in all required fields." }, { status: 400 });
  }

  try {
    await ensureStorage();
    const existing = await readFile(enquiryFile, "utf8");
    const entries = JSON.parse(existing) as Array<EnquiryInput & { id: string; createdAt: string }>;

    entries.unshift({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      businessType,
      phone,
      packageName,
      message
    });

    await writeFile(enquiryFile, JSON.stringify(entries, null, 2), "utf8");

    return NextResponse.json({ message: "Enquiry stored successfully." }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Unable to save enquiry right now." }, { status: 500 });
  }
}
