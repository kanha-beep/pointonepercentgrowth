import { NextRequest, NextResponse } from "next/server";

const FALLBACK_RESPONSES: Record<string, string> = {
  packages: "We offer three primary website packages: Starter (₹14,999 - ₹25,000 for 5 pages), Growth (₹29,999 - ₹45,000 for 10 pages + SEO), and Premium (₹54,999 - ₹85,000 for 15+ pages + custom workflows). All packages include mobile-first design and WhatsApp checkout!",
  pricing: "Starter packages begin at ₹14,999, growth packages average ₹29,999 to ₹45,000, and full custom builds range up to ₹1,40,000 depending on your exact scope.",
  vetting: "We vet 0.1% talent through a rigorous 6-step gauntlet: portfolio audit, live technical exam, pair-programming screening, PointOnePercent Academy simulation, and a 90-day monitored production trial.",
  grocery: "Yes! We build high-converting grocery & kirana storefronts with instant WhatsApp reordering, neighborhood delivery zone setups, and local SEO.",
  dairy: "Our milk and dairy delivery websites support subscription frequencies (daily, alternate), automated WhatsApp order summaries, and recurring customer management.",
  hours: "Our studio office operates Monday to Saturday from 10:00 AM to 7:00 PM IST.",
  contact: "Reach our founders at +91 7999046735 or pointonepercentgrowth@gmail.com. We are located in Bhopal, MP, India."
};

function getLocalFallback(query: string): { reply: string; intent: string; confidence: number } {
  const q = query.toLowerCase();
  if (q.includes("package") || q.includes("plan") || q.includes("tier") || q.includes("offer")) {
    return { reply: FALLBACK_RESPONSES.packages, intent: "packages", confidence: 0.95 };
  }
  if (q.includes("price") || q.includes("cost") || q.includes("rate") || q.includes("fee") || q.includes("how much")) {
    return { reply: FALLBACK_RESPONSES.pricing, intent: "pricing", confidence: 0.94 };
  }
  if (q.includes("vet") || q.includes("developer") || q.includes("talent") || q.includes("hire") || q.includes("process")) {
    return { reply: FALLBACK_RESPONSES.vetting, intent: "vetting", confidence: 0.92 };
  }
  if (q.includes("grocery") || q.includes("store") || q.includes("kirana")) {
    return { reply: FALLBACK_RESPONSES.grocery, intent: "grocery", confidence: 0.91 };
  }
  if (q.includes("milk") || q.includes("dairy")) {
    return { reply: FALLBACK_RESPONSES.dairy, intent: "dairy", confidence: 0.93 };
  }
  if (q.includes("hour") || q.includes("time") || q.includes("open") || q.includes("sunday")) {
    return { reply: FALLBACK_RESPONSES.hours, intent: "office_hours", confidence: 0.96 };
  }
  if (q.includes("contact") || q.includes("phone") || q.includes("call") || q.includes("email") || q.includes("location") || q.includes("address")) {
    return { reply: FALLBACK_RESPONSES.contact, intent: "contact", confidence: 0.98 };
  }
  return {
    reply: "I'd love to help! You can ask about our website packages, 0.1% developer vetting, pricing tiers, office details, or connect with our founders on WhatsApp.",
    intent: "fallback",
    confidence: 0.4
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const message = body?.message?.trim();

    if (!message) {
      return NextResponse.json({ reply: "Please type a question.", intent: "empty", confidence: 0 }, { status: 400 });
    }

    // Try Python FastAPI server first
    try {
      const pythonResponse = await fetch("http://127.0.0.1:8000/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
        signal: AbortSignal.timeout(1800) // 1.8s timeout
      });

      if (pythonResponse.ok) {
        const data = await pythonResponse.json();
        return NextResponse.json({ ...data, source: "python-ml" });
      }
    } catch {
      // Python server not currently active, fallback to internal engine
    }

    // Fallback to internal NLP response
    const fallback = getLocalFallback(message);
    return NextResponse.json({ ...fallback, source: "internal-ml" });
  } catch (error) {
    return NextResponse.json(
      { reply: "Sorry, I had trouble processing that. Please try asking again!", intent: "error", confidence: 0 },
      { status: 500 }
    );
  }
}
