import axios from "axios";
import { NextResponse } from "next/server";

const chatbotUrl = process.env.PYTHON_CHATBOT_URL || "http://127.0.0.1:8000/chatbot";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (!message) return NextResponse.json({ reply: "Please type a question." }, { status: 400 });
    const { data } = await axios.post(chatbotUrl, { message }, { timeout: 8_000 });
    return NextResponse.json({ ...data, source: "python-sklearn" });
  } catch {
    return NextResponse.json(
      { reply: "Our chat assistant is temporarily unavailable. Please contact us on WhatsApp at +91 7999046735.", source: "fallback" },
      { status: 503 }
    );
  }
}
