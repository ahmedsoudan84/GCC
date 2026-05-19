"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Loader } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GREETING: Message = {
  role: "assistant",
  content:
    "Good day. I'm GCC International's project assistant. I can help you understand our capabilities across Infrastructure, Defence & Security, and Energy sectors — or guide you through an initial project inquiry. How can I help you today?",
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    // Optimistically add empty assistant message
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Network error");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last.role === "assistant") {
            updated[updated.length - 1] = {
              ...last,
              content: last.content + chunk,
            };
          }
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "I apologise — I'm unable to connect right now. Please reach us directly at info@gcc-intl.com or call +44 (0)207 499 9982.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 5.2, duration: 0.5, ease: E }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center shadow-xl shadow-gold-500/30 hover:bg-gold-400 hover:scale-[1.02] transition-all duration-200 ${
          open ? "hidden" : "flex"
        }`}
        aria-label="Open AI Assistant"
      >
        <MessageCircle size={22} />
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: E }}
            className="fixed bottom-6 right-6 z-[90] w-[360px] max-h-[580px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-navy-700/60"
            style={{ background: "#071224" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b border-navy-700/60 flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, #0A1A30 0%, #071224 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center">
                  <Bot size={15} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-slate-100 text-sm font-semibold">
                    GCC Assistant
                  </p>
                  <p className="text-slate-500 text-[10px] tracking-wide">
                    Project Inquiry · AI Powered
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-500 hover:text-slate-300 transition-colors p-1 rounded-lg hover:bg-navy-700/50"
                aria-label="Close assistant"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2.5 ${
                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 ${
                      msg.role === "assistant"
                        ? "bg-gold-500/15 border border-gold-500/25"
                        : "bg-navy-600/60 border border-navy-500/40"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot size={12} className="text-gold-400" />
                    ) : (
                      <User size={12} className="text-slate-300" />
                    )}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`max-w-[78%] rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-navy-700/60 text-slate-200 border border-navy-600/40"
                        : "bg-gold-500/15 text-slate-100 border border-gold-500/20"
                    }`}
                  >
                    {msg.content === "" && loading ? (
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Loader size={12} className="animate-spin" />
                        <span>Thinking…</span>
                      </span>
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="flex-shrink-0 border-t border-navy-700/60 px-4 py-3">
              <div className="flex items-center gap-2.5 bg-navy-800/60 border border-navy-600/50 rounded-xl px-4 py-2.5 focus-within:border-gold-500/40 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about our sectors or services…"
                  disabled={loading}
                  className="flex-1 bg-transparent text-slate-200 text-[13px] placeholder:text-slate-600 focus:outline-none disabled:opacity-50"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || loading}
                  className="flex-shrink-0 text-gold-500 hover:text-gold-400 disabled:text-slate-600 transition-colors disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send size={15} />
                </button>
              </div>
              <p className="text-slate-700 text-[10px] text-center mt-2">
                AI assistant · Formal inquiries: info@gcc-intl.com
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
