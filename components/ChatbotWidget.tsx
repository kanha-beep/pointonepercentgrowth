"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  intent?: string;
  confidence?: number;
  source?: string;
};

const SUGGESTED_CHIPS = [
  { label: "Graphic Design", query: "Tell me about graphic design" },
  { label: "UI/UX", query: "Tell me about UI/UX design" },
  { label: "Portfolio", query: "Where can I see your work?" },
  { label: "Contact", query: "How can I contact you?" }
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hi! Welcome to .1% Growth. Ask about our graphic design, UI/UX work, or how to contact us.",
      timestamp: "Just now",
      source: "studio"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (queryText?: string) => {
    const textToSend = (queryText ?? input).trim();
    if (!textToSend || isTyping) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend })
      });

      const data = await res.json();
      const botMsg: Message = {
        id: String(Date.now() + 1),
        sender: "bot",
        text: data.reply || "I'm not sure about that. Want to discuss directly with our founders on WhatsApp?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        intent: data.intent,
        confidence: data.confidence,
        source: data.source || "studio"
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          sender: "bot",
          text: "Tell us about your design project on WhatsApp (+91 7999046735).",
          timestamp: "Now",
          source: "fallback"
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* 3D-Feel Playful Chat Window */}
      {isOpen && (
        <div className="mb-4 flex h-[540px] w-[92vw] max-w-[400px] flex-col overflow-hidden rounded-3xl border-3 border-slate-900 bg-[#fffdfa] shadow-[8px_8px_0px_0px_#0f172a] transition-all duration-300">
          {/* Playful Studio Header */}
          <div className="flex items-center justify-between border-b-3 border-slate-900 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 px-5 py-3.5 text-white">
            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-slate-900 bg-amber-300 text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] transition-transform hover:rotate-6">
                <span className="text-xl">👾</span>
                <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
                  <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-slate-900 bg-emerald-500" />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-black text-sm tracking-tight text-white">Growth Bot 3000</h4>
                  <span className="rounded-md border border-amber-300 bg-amber-400/30 px-1.5 py-0.2 text-[9px] font-extrabold uppercase text-amber-200">
                    Studio
                  </span>
                </div>
                <p className="flex items-center gap-1.5 text-[11px] font-medium text-indigo-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Graphic Design & UI/UX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-xl border-2 border-white/20 bg-white/10 text-white transition hover:border-white hover:bg-white hover:text-slate-900"
                aria-label="Close chat"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 space-y-3.5 overflow-y-auto p-4 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`relative max-w-[85%] rounded-2xl border-2 p-3.5 text-xs font-medium leading-relaxed ${
                    msg.sender === "user"
                      ? "rounded-br-xs border-slate-900 bg-indigo-600 text-white shadow-[3px_3px_0px_0px_#0f172a]"
                      : "rounded-bl-xs border-slate-900 bg-white text-slate-900 shadow-[3px_3px_0px_0px_#0f172a]"
                  }`}
                >
                  <p className="whitespace-pre-line text-[0.85rem]">{msg.text}</p>
                </div>

                <div className="mt-1 flex items-center gap-1.5 px-1 text-[10px] font-bold text-slate-400">
                  <span>{msg.timestamp}</span>
                  {msg.source && (
                    <span className="rounded bg-slate-100 px-1 py-0.2 text-[9px] uppercase tracking-wider text-slate-500">
                      {msg.source}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-xs border-2 border-slate-900 bg-white px-4 py-3 shadow-[3px_3px_0px_0px_#0f172a]">
                <span className="text-xs font-bold text-slate-500 mr-1">Analyzing</span>
                <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-600" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-violet-600 [animation-delay:0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-amber-500 [animation-delay:0.3s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Playful Interactive Suggested Chips */}
          <div className="border-t-2 border-slate-900/10 bg-amber-50/50 p-2.5">
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {SUGGESTED_CHIPS.map((chip) => (
                <button
                  key={chip.label}
                  onClick={() => handleSendMessage(chip.query)}
                  className="shrink-0 rounded-full border-2 border-slate-900 bg-white px-3 py-1 text-[11px] font-bold text-slate-800 shadow-[2px_2px_0px_0px_#0f172a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-amber-100 hover:shadow-[3px_3px_0px_0px_#0f172a] active:translate-x-0 active:translate-y-0 active:shadow-none"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Form with 3D tactile button */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2 border-t-3 border-slate-900 bg-white p-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about our work or contact details..."
              className="flex-1 rounded-xl border-2 border-slate-900 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-800 placeholder-slate-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-900 bg-amber-400 text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[3px_3px_0px_0px_#0f172a] active:translate-x-0 active:translate-y-0 active:shadow-none disabled:opacity-40"
              aria-label="Send message"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* 3D-Feel Studio Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-16 w-16 items-center justify-center rounded-2xl border-3 border-slate-900 bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 text-slate-900 shadow-[5px_5px_0px_0px_#0f172a] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#0f172a] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#0f172a]"
        aria-label="Toggle interactive AI chatbot assistant"
      >
        <div className="relative flex items-center justify-center">
          {isOpen ? (
            <svg className="h-7 w-7 text-slate-900 transition-transform duration-200 group-hover:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="flex flex-col items-center">
              <span className="text-2xl transition-transform duration-300 group-hover:scale-125">👾</span>
              <span className="text-[9px] font-black uppercase tracking-wider text-slate-900">Chat</span>
            </div>
          )}
        </div>

        {/* Live Status Badge */}
        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
          <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-slate-900 bg-emerald-500" />
        </span>
      </button>
    </div>
  );
}
