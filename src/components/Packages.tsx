import { motion } from "framer-motion";
import { Check, Zap, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Interior Clean",
    price: "120",
    desc: "Deep interior refresh — every surface spotless.",
    features: [
      "Glass cleaned & streak-free",
      "Dashboard polish & UV protection",
      "Full vacuum clean",
      "Steam wash — seats, carpets & AC vents",
      "Complete interior restoration",
    ],
  },
  {
    name: "Full Car Wash",
    price: "250",
    desc: "The complete package — inside & out perfection.",
    features: [
      "Everything in Interior Clean",
      "Everything in Exterior Detail",
      "Full bumper-to-bumper treatment",
      "Interior + exterior combined",
      "Best value for total care",
    ],
    featured: true,
  },
  {
    name: "Exterior Detail",
    price: "180",
    desc: "Showroom-grade exterior treatment & protection.",
    features: [
      "Foam wash & hand wash",
      "Tyre shine & alloy wheel detail",
      "Outside wash & quick dry",
      "Full exterior polish & wax",
      "Special clay bar (on request)",
      "Soft shine colour enhancement",
    ],
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-32">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, oklch(0.82 0.18 210 / 0.15), transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.6 0.2 260 / 0.15), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-aqua/60" /> 02 · Packages <span className="h-px w-8 bg-aqua/60" />
          </p>
          <h2 className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
            Pick your <span className="italic text-gradient-aqua">shine.</span>
          </h2>
          <p className="mt-5 text-[15px] text-muted-foreground">Transparent pricing. No surprises. Cancel anytime.</p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className={`glass-card hover-lift shine-hover relative overflow-hidden rounded-3xl p-8 ${
                p.featured ? "border-aqua/50 animate-pulse-glow lg:-translate-y-4 lg:scale-105" : ""
              }`}
            >
              {p.featured && (
                <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gradient-aqua px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Zap className="h-3 w-3" /> Best Value
                </div>
              )}
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">NZ$</span>
                <span className={`text-5xl font-black ${p.featured ? "text-gradient-aqua" : ""}`}>
                  {p.price}
                </span>
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-aqua/20">
                      <Check className="h-3 w-3 text-aqua" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#book"
                className={`mt-8 block w-full rounded-full py-3 text-center font-semibold transition-transform hover:scale-105 ${
                  p.featured
                    ? "bg-gradient-aqua text-primary-foreground glow-aqua"
                    : "border border-border bg-secondary/50 hover:bg-secondary"
                }`}
              >
                Choose {p.name}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Extra charge note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-2 text-center"
        >
          <Sparkles className="h-4 w-4 text-gold" />
          <p className="text-sm text-muted-foreground">
            Special requests & add-ons available — <span className="text-foreground font-medium">extra $50</span> per custom service
          </p>
        </motion.div>
      </div>
    </section>
  );
}
