import { NextResponse } from "next/server";
import { siteContent } from "@/lib/site";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (!message) return NextResponse.json({ reply: "Please type a question." }, { status: 400 });
    const query = message.toLowerCase();
    let reply = "We work on graphic design and UI/UX. Browse /projects to see our work, or visit /contact to tell us about your idea.";
    if (/contact|phone|email|whatsapp/.test(query)) {
      reply = `Contact us at ${siteContent.contact.phoneDisplay} or ${siteContent.contact.email}.`;
    } else if (/hour|office|address|location/.test(query)) {
      reply = `${siteContent.contact.officeName}, ${siteContent.contact.officeAddress}. Hours: ${siteContent.contact.officeHours}.`;
    } else if (/price|cost|quote/.test(query)) {
      reply = "Share your requirements through /contact and we will discuss a quote for your project.";
    } else if (/ui|ux/.test(query)) {
      reply = "Explore our interface and user-experience designs by choosing UI/UX on /projects.";
    } else if (/graphic/.test(query)) {
      reply = "Explore our graphic design work by choosing Graphic on /projects.";
    }
    return NextResponse.json({ reply, source: "studio" });
  } catch {
    return NextResponse.json({ reply: "Please send a valid message." }, { status: 400 });
  }
}
