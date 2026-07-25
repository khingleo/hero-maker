import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are Leo's personal AI assistant on his portfolio website. You represent Leo — a multi-disciplinary creative based in Ghana.

About Leo:
- Full name: Leo (K. Leo)
- Based in: Accra, Ghana
- Disciplines: Graphic Designer, Photographer, Full Stack Developer, GRC Auditor, Content Creator, Editor
- Design tools: Figma, Adobe Photoshop, Illustrator, Premiere Pro, After Effects, Canva
- Dev stack: React, TypeScript, Next.js, Node.js, Tailwind CSS, PostgreSQL, Python, Git
- Services: Brand Identity, Logo Design, UI/UX, Packaging, Portrait/Product/Event Photography, Full Stack Web Apps, GRC Auditing & Compliance, Content Strategy, Video Editing
- Availability: Currently available for new projects
- Response time: Under 24 hours
- Contact: via the contact page on this site

Your role:
- Answer questions about Leo's work, skills, services, availability and experience
- Help visitors decide if Leo is the right fit for their project
- Be warm, confident and professional — match Leo's editorial creative personality
- Keep responses concise and helpful (2–4 sentences max unless more detail is needed)
- If asked something you don't know about Leo, say you'll pass it on and direct them to the contact page
- Never make up specific project details, client names or pricing beyond what's listed
- Encourage visitors to hire Leo or get in touch when appropriate`;

export function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Leo's AI assistant. Ask me anything about his work, skills or availability — I'm here to help.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: text },
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        console.error("Groq API error:", res.status, errData);
        throw new Error(`API error ${res.status}`);
      }
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't get a response. Try again.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Please try again or reach out via the contact page." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden shadow-2xl md:right-8"
          style={{
            width: "min(380px, calc(100vw - 32px))",
            height: "min(520px, calc(100vh - 120px))",
            background: "linear-gradient(135deg, #efece2 0%, #e8e4d6 100%)",
            border: "2px solid rgba(0,0,0,0.12)",
          }}
          role="dialog"
          aria-label="Chat with Leo's AI assistant"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b-2 border-neutral-900/10 px-5 py-4">
            <div>
              <p className="text-[13px] font-black uppercase tracking-widest text-neutral-900">
                Ask Leo's AI
              </p>
              <div className="mt-0.5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-[13px] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-neutral-900 text-[#efece2]"
                      : "border-2 border-neutral-900/10 bg-[#efece2] text-neutral-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="border-2 border-neutral-900/10 bg-[#efece2] px-4 py-3">
                  <Loader2 size={14} className="animate-spin text-neutral-500" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t-2 border-neutral-900/10 px-4 py-3 flex items-center gap-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent text-[13px] text-neutral-900 placeholder-neutral-400 outline-none"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Send message"
              className="text-neutral-900 transition-opacity disabled:opacity-30 hover:opacity-70"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Bubble toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Chat with Leo's AI assistant"}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-900 text-[#efece2] shadow-xl transition-transform duration-200 hover:scale-105 active:scale-95 md:right-8"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </>
  );
}
