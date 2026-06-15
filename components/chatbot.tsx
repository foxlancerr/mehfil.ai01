"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, Minimize2, Maximize2, Sparkles, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CHATBOT_CONFIG,
  QUICK_REPLIES,
  STATIC_RESPONSES,
  FALLBACK_RESPONSE,
  type QuickReply,
} from "@/constants/chatbot-config";

// ─── Types ────────────────────────────────────────────────────────────────────

type MessageRole = "user" | "bot";

interface Message {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
  quickReplies?: QuickReply[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function resolveResponse(input: string): { message: string; followUp?: QuickReply[] } {
  const lower = input.toLowerCase().trim();
  for (const response of STATIC_RESPONSES) {
    if (response.keywords.some((kw) => lower.includes(kw))) {
      return { message: response.message, followUp: response.followUp };
    }
  }
  return { message: FALLBACK_RESPONSE };
}

function uid() {
  return Math.random().toString(36).slice(2, 9);
}

// ─── Typing Indicator ────────────────────────────────────────────────────────

function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5">
      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-crimson/30 to-rose/20 border border-crimson/25 flex items-center justify-center flex-shrink-0">
        <Bot size={13} className="text-crimson" />
      </div>
      <div className="bg-surface border border-subtle/70 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-crimson block"
            animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.75, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Message Bubble ───────────────────────────────────────────────────────────

function MessageBubble({ message, isLast }: { message: Message; isLast: boolean }) {
  const isBot = message.role === "bot";

  const lines = message.text.split("\n");
  const formattedContent = lines.map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={i} className={cn("block", line === "" && i < lines.length - 1 && "h-2")}>
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong key={j} className={isBot ? "text-white font-semibold" : "text-white font-semibold"}>
              {part}
            </strong>
          ) : (
            <span key={j}>{part}</span>
          )
        )}
      </span>
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex gap-2.5", isBot ? "items-end" : "items-end flex-row-reverse")}
    >
      {/* Avatar — bot only */}
      {isBot ? (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-crimson/30 to-rose/20 border border-crimson/25 flex items-center justify-center flex-shrink-0 mb-5">
          <Bot size={13} className="text-crimson" />
        </div>
      ) : (
        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0 mb-5 text-[10px] font-bold text-white/60">
          U
        </div>
      )}

      <div className={cn("flex flex-col gap-1 max-w-[78%]", !isBot && "items-end")}>
        <div
          className={cn(
            "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
            isBot
              ? "bg-surface border border-subtle/80 text-text-muted rounded-bl-none"
              : "bg-gradient-to-br from-crimson to-rose text-white rounded-br-none shadow-lg shadow-crimson/25"
          )}
        >
          {formattedContent}
        </div>
        <span className="text-[10px] text-text-muted/40 px-1">
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Quick Reply Chips ────────────────────────────────────────────────────────

function QuickReplyChips({
  replies,
  onSelect,
}: {
  replies: QuickReply[];
  onSelect: (trigger: string, label: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.25 }}
      className="flex flex-wrap gap-1.5 pl-9 pt-1"
    >
      {replies.map((r, i) => (
        <motion.button
          key={r.id}
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 + i * 0.06, duration: 0.2 }}
          onClick={() => onSelect(r.trigger, r.label)}
          className="text-[11px] px-3 py-1.5 rounded-full border border-crimson/25 text-crimson-light bg-crimson-muted/20 hover:bg-crimson/15 hover:border-crimson/50 hover:text-white transition-all duration-200 active:scale-95"
        >
          {r.label}
        </motion.button>
      ))}
    </motion.div>
  );
}

// ─── Main Chatbot ─────────────────────────────────────────────────────────────

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [showPing, setShowPing] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowPing(true), 3500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setShowPing(false);
      setHasUnread(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: uid(),
          role: "bot",
          text: CHATBOT_CONFIG.welcomeMessage,
          timestamp: new Date(),
          quickReplies: QUICK_REPLIES,
        },
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen, isMinimized]);

  // Re-focus input whenever bot finishes typing
  useEffect(() => {
    if (!isTyping && isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isTyping, isOpen, isMinimized]);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim()) return;
      setMessages((prev) => [
        ...prev,
        { id: uid(), role: "user", text: text.trim(), timestamp: new Date() },
      ]);
      setInputValue("");
      setIsTyping(true);

      const { message, followUp } = resolveResponse(text);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: uid(),
            role: "bot",
            text: message,
            timestamp: new Date(),
            quickReplies: followUp,
          },
        ]);
        if (!isOpen) setHasUnread(true);
      }, CHATBOT_CONFIG.typingDelayMs);
    },
    [isOpen]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleActionLink = (type: "fiverr" | "whatsapp" | "email") => {
    const urls = { fiverr: CHATBOT_CONFIG.fiverr, whatsapp: CHATBOT_CONFIG.whatsapp, email: CHATBOT_CONFIG.email };
    window.open(urls[type], "_blank", "noopener noreferrer");
  };

  return (
    <>
      {/* ─── Chat Window ──────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              height: isMinimized ? "56px" : "min(560px, calc(100dvh - 110px))",
            }}
            exit={{ opacity: 0, scale: 0.9, y: 12 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className={cn(
              "fixed z-[9000]",
              "bottom-[88px] right-4 left-4",
              "sm:left-auto sm:bottom-24 sm:right-6 sm:w-[360px]",
              "flex flex-col rounded-2xl overflow-hidden",
              "border border-white/[0.06]",
              "shadow-[0_32px_64px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.04),inset_0_1px_0_rgba(255,255,255,0.06)]"
            )}
          >
            {/* ── Header ── */}
            <div className="relative flex items-center gap-3 px-4 py-3 flex-shrink-0 overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1a0509 0%, #0c0c0f 60%, #1a0509 100%)" }}>
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/40 to-transparent" />

              <div className="relative flex-shrink-0">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-crimson to-rose/80 flex items-center justify-center shadow-lg shadow-crimson/40">
                  <Sparkles size={16} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0c0c0f] shadow-sm shadow-emerald-400/50" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-tight tracking-tight">
                  {CHATBOT_CONFIG.botName}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-emerald-400/90 text-[10px] font-mono leading-none">
                    {CHATBOT_CONFIG.botStatus}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized((v) => !v)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-150"
                  aria-label="Minimize"
                >
                  {isMinimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-150"
                  aria-label="Close"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* ── Body (shown/hidden by outer window height) ── */}
            <AnimatePresence initial={false}>
              {!isMinimized && (
                <motion.div
                  key="body"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 flex flex-col min-h-0"
                  style={{ background: "#08080b" }}
                >
                  {/* Messages — stop wheel propagation so the page doesn't steal scroll */}
                  <div
                    className="flex-1 min-h-0 overflow-y-scroll overscroll-contain px-4 py-4 flex flex-col gap-3"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "rgba(225,29,72,0.2) transparent",
                    }}
                    onWheel={(e) => e.stopPropagation()}
                    onTouchMove={(e) => e.stopPropagation()}
                  >
                    {messages.map((msg, idx) => (
                      <div key={msg.id} className="flex flex-col gap-1">
                        <MessageBubble message={msg} isLast={idx === messages.length - 1} />
                        {msg.quickReplies && idx === messages.length - 1 && !isTyping && (
                          <QuickReplyChips
                            replies={msg.quickReplies}
                            onSelect={(trigger, label) => sendMessage(label)}
                          />
                        )}
                      </div>
                    ))}

                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <TypingIndicator />
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} className="h-1" />
                  </div>

                  {/* Quick link row */}
                  <div className="px-3.5 py-2 flex items-center gap-2 border-t border-white/[0.05]"
                    style={{ background: "#0c0c0f" }}>
                    <span className="text-[9px] text-white/20 font-mono uppercase tracking-widest">
                      reach us
                    </span>
                    <div className="flex gap-1.5 ml-auto">
                      {(["fiverr", "whatsapp", "email"] as const).map((type) => (
                        <button
                          key={type}
                          onClick={() => handleActionLink(type)}
                          className="flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-crimson/8 border border-crimson/15 text-crimson-light/70 hover:bg-crimson/15 hover:border-crimson/35 hover:text-crimson-light transition-all duration-200 capitalize"
                        >
                          {type}
                          <ExternalLink size={8} className="opacity-60" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input row */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex items-center gap-2 px-3 py-2.5 border-t border-white/[0.05]"
                    style={{ background: "#0c0c0f" }}
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask anything…"
                      disabled={isTyping}
                      className="flex-1 min-w-0 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-crimson/40 focus:bg-white/[0.06] transition-all duration-200"
                    />
                    <motion.button
                      type="submit"
                      disabled={!inputValue.trim() || isTyping}
                      whileTap={inputValue.trim() && !isTyping ? { scale: 0.9 } : {}}
                      className={cn(
                        "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200",
                        inputValue.trim() && !isTyping
                          ? "bg-crimson hover:bg-rose text-white shadow-md shadow-crimson/30"
                          : "bg-white/[0.05] text-white/20 cursor-not-allowed"
                      )}
                      aria-label="Send"
                    >
                      <Send size={15} />
                    </motion.button>
                  </form>

                  {/* Powered by strip */}
                  <div className="px-4 py-1.5 flex items-center justify-center border-t border-white/[0.04]"
                    style={{ background: "#08080b" }}>
                    <p className="text-[9px] text-white/15 font-mono tracking-widest uppercase">
                      Powered by <span className="text-crimson/40">mehfil</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── FAB + Ping bubble ────────────────────────────────────────────── */}
      <div className="fixed bottom-6 right-6 z-[9001] flex flex-col items-end gap-2.5">

        {/* Proactive ping bubble */}
        <AnimatePresence>
          {showPing && !isOpen && (
            <motion.button
              key="ping"
              initial={{ opacity: 0, x: 16, scale: 0.85 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 12, scale: 0.88 }}
              transition={{ type: "spring", stiffness: 380, damping: 26 }}
              onClick={() => setIsOpen(true)}
              className="relative text-left max-w-[200px] rounded-2xl rounded-br-sm px-4 py-2.5 cursor-pointer border border-white/[0.07] shadow-xl shadow-black/50"
              style={{ background: "linear-gradient(135deg,#1a0509,#0c0c0f)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
              <p className="text-xs text-white/80 font-semibold leading-snug">
                Got a project in mind?
              </p>
              <p className="text-[10px] text-white/40 mt-0.5 leading-snug">Ask me about services, pricing, or timelines.</p>

              <button
                onClick={(e) => { e.stopPropagation(); setShowPing(false); }}
                className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-surface border border-subtle flex items-center justify-center text-white/30 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X size={8} />
              </button>
            </motion.button>
          )}
        </AnimatePresence>

        {/* FAB */}
        <motion.button
          onClick={() => setIsOpen((v) => !v)}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-14 h-14 rounded-2xl flex items-center justify-center text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #E11D48 0%, #F43F5E 100%)",
            boxShadow: "0 8px 32px rgba(225,29,72,0.45), 0 2px 8px rgba(0,0,0,0.5)",
          }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {/* Shine */}
          <span className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/0 to-white/0 pointer-events-none" />

          {/* Pulse ring — only when closed */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-2xl bg-crimson animate-ping opacity-15 pointer-events-none" />
              <span className="absolute -inset-1 rounded-[18px] border border-crimson/20 animate-pulse pointer-events-none" />
            </>
          )}

          {/* Unread dot */}
          <AnimatePresence>
            {hasUnread && !isOpen && (
              <motion.span
                key="unread"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-crimson" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="x" initial={{ rotate: -80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 80, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X size={21} />
              </motion.div>
            ) : (
              <motion.div key="msg" initial={{ rotate: 80, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -80, opacity: 0 }} transition={{ duration: 0.18 }}>
                <MessageCircle size={21} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
