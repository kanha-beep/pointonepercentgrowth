import { NextResponse } from "next/server";

import { siteContent } from "@/lib/site";

export function GET() {
  return NextResponse.json(siteContent);
}
