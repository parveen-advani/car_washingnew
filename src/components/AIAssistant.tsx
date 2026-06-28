import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "Which package suits a dusty SUV?",
  "How often should I ceramic coat?",
  "Remove water spots on glass?",
  "Best wash for monsoon season?",
];

// Pre-written FAQ responses for demo mode (no API needed)
const FAQ_RESPONSES: Record<string, string> = {
  "which package suits a dusty suv?":
    "For a dusty SUV, I'd recommend the **Premium package (NZ$99)**. It includes:\n\n• Full foam wash & exterior rinse\n• Interior vacuum & dashboard polish\n• Wheel detailing & glass cleaning\n\nIf there's heavy mud/dirt buildup, go for the **Showroom package (NZ$249)** which adds paint correction and ceramic coating for long-term protection. 🚗✨",
  "how often should i ceramic coat?":
    "Great question! Our 9H ceramic coating lasts **up to 2 years** with proper maintenance.\n\n**Recommended schedule:**\n• Ceramic coating: Every 2 years\n• Maintenance wash: Every 3 months\n• Quick rinse: Monthly\n\nWe offer a written warranty with every ceramic coating application. Book a Showroom package to get started! 🛡️",
  "remove water spots on glass?":
    "Water spots on glass can be stubborn! Here's what we recommend:\n\n1. **Mild spots**: White vinegar + water (50/50 mix), spray and wipe with microfiber\n2. **Heavy spots**: Our Paint Correction service uses professional-grade compounds\n3. **Prevention**: Ceramic coating on glass repels water and prevents future spots\n\nOur Express Wash (NZ$39) includes glass cleaning for routine maintenance! 💧",
  "best wash for monsoon season?":
    "During monsoon season, your car takes extra beating! Here's my recommendation:\n\n**Best choice: Premium Package (NZ$99)**\n• Removes mud, grime, and road salt\n• Interior protection from dampness\n• Dashboard & glass treatment\n\n**Pro tip**: Get a ceramic coating before monsoon season — it creates a hydrophobic layer that makes water bead right off. Our Showroom package includes this! 🌧️",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  // Check for exact FAQ matches
  for (const [key, value] of Object.entries(FAQ_RESPONSES)) {
    if (lower === key || lower.includes(key.split(" ").slice(0, 3).join(" "))) {
      return value;
    }
  }

  // Keyword-based responses
  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) {
    return "Here are our packages:\n\n• **Express** — NZ$39 (15 min quick wash)\n• **Premium** — NZ$99 (inside + out shine)\n• **Showroom** — NZ$249 (full detailing + ceramic)\n\nScroll down to the Booking section to reserve your slot! 📋";
  }
  if (lower.includes("book") || lower.includes("appointment") || lower.includes("schedule")) {
    return "You can book right here on our website! Just scroll down to the **Booking section** and:\n\n1. Enter your details\n2. Pick a package\n3. Choose your preferred date\n\nWe'll confirm via WhatsApp within 60 seconds! 📱";
  }
  if (lower.includes("ceramic") || lower.includes("coating")) {
    return "Our **9H Ceramic Coating** is top-tier protection:\n\n• Lasts up to 2 years\n• Mirror-like gloss finish\n• Hydrophobic — water beads right off\n• Includes written warranty\n\nAvailable in our Showroom package (NZ$249) or as standalone service (NZ$899). 🛡️✨";
  }
  if (lower.includes("interior") || lower.includes("inside")) {
    return "Our interior detailing includes:\n\n• Deep vacuum & steam cleaning\n• Leather conditioning & treatment\n• Dashboard polish & UV protection\n• Air freshener\n• Stain removal\n\nAvailable in Premium (NZ$99) and Showroom (NZ$249) packages! 🪑";
  }
  if (lower.includes("location") || lower.includes("area") || lower.includes("where") || lower.includes("city")) {
    return "We currently serve **three cities** across New Zealand:\n\n📍 Auckland\n📍 Wellington\n📍 Christchurch\n\nWe come to YOUR location — home, office, or parking lot. Our mobile unit brings everything needed! 🚐";
  }
  if (lower.includes("cancel")) {
    return "Yes, you can cancel! Here's our policy:\n\n• **Free cancellation** up to 2 hours before your slot\n• After that, a small visit fee applies\n• No questions asked\n\nWe want you to feel completely comfortable booking with us! 🤝";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hey there! 👋 Welcome to SteamClean!\n\nI can help you with:\n• Choosing the right wash package\n• Car care tips & advice\n• Booking guidance\n• Pricing information\n\nWhat would you like to know? 😊";
  }

  return "Thanks for your question! While I can help with package recommendations, detailing tips, and booking guidance, here are some things I can answer:\n\n• 💰 Pricing & packages\n• 🚗 Which wash suits your car\n• 🛡️ Ceramic coating details\n• 📍 Service areas\n• 📋 How to book\n\nTry asking about any of these topics! 😊";
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hey, I'm **Aqua AI** ✨ — your car care concierge. Ask me about packages, detailing tips, or which wash fits your ride.",
    },
  ]);
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    inputRef.current?.focus();

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  async function send(text: string) {
    if (!text.trim() || streaming) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setStreaming(true);

    // Simulate typing delay for natural feel
    await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 800));

    const response = getResponse(text);
    setMessages((m) => [...m, { role: "assistant", content: response }]);
    setStreaming(false);
  }

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open Aqua AI assistant"
        aria-expanded={open}
        aria-controls="aqua-ai-panel"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <span className="absolute inset-0 rounded-full bg-primary/40 blur-xl animate-pulse" />
        <span className="relative flex items-center gap-2 rounded-full bg-gradient-to-br from-primary to-accent px-5 py-4 text-primary-foreground shadow-2xl shadow-primary/40 ring-1 ring-white/20 hover:scale-105 transition-transform">
          {open ? <X className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
          {!open && <span className="text-sm font-semibold tracking-tight">Ask Aqua AI</span>}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="aqua-ai-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="aqua-ai-title"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 22 }}
            className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-md h-[600px] max-h-[80vh] flex flex-col rounded-3xl border border-white/10 bg-background/95 backdrop-blur-2xl shadow-2xl shadow-primary/20 overflow-hidden"
          >
            {/* Header */}
            <div className="relative px-5 py-4 border-b border-white/10 bg-gradient-to-r from-primary/20 via-accent/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/50 blur-md animate-pulse" />
                  <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center">
                    <Sparkles className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <div id="aqua-ai-title" className="font-semibold tracking-tight">Aqua AI</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online · Smart Responses
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${m.role === "user"
                        ? "bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-foreground rounded-bl-sm"
                      }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {streaming && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-bl-sm">
                    <Loader2 className="h-4 w-4 animate-spin opacity-70" />
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div className="pt-2 space-y-2">
                  <div className="eyebrow text-[10px] text-muted-foreground px-1">Try asking</div>
                  <div className="grid grid-cols-1 gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="text-left text-sm px-3 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/40 transition"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="p-3 border-t border-white/10 bg-background/60"
            >
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/20 transition">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about packages, detailing, tips…"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  disabled={streaming}
                />
                <button
                  type="submit"
                  disabled={streaming || !input.trim()}
                  className="h-8 w-8 grid place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground disabled:opacity-40 hover:scale-105 transition"
                  aria-label="Send"
                >
                  {streaming ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                </button>
              </div>
              <div className="text-[10px] text-muted-foreground mt-2 text-center">
                Smart FAQ responses · Instant answers about our services
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
