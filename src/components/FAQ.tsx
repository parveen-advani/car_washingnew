import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How long does a wash take?", a: "Express takes ~15 minutes. Premium ~45 minutes. Full Showroom detailing can take 3-5 hours depending on your car's condition." },
  { q: "Do you really come to my home?", a: "Yes — we bring water, power and all equipment in our mobile unit. We service homes, offices, malls and parking lots." },
  { q: "Is it safe for my paint?", a: "We use pH-neutral foam, microfiber mitts and grit guards. Our trained detailers follow the 2-bucket method to prevent swirls." },
  { q: "How long does ceramic coating last?", a: "Our 9H ceramic coating lasts 2 years with a maintenance wash every 3 months. We offer a written warranty." },
  { q: "What about water usage?", a: "We use less than 2 litres per wash with our steam + foam system — that's 100x less than a traditional wash." },
  { q: "Can I cancel?", a: "Yes, free cancellation up to 2 hours before your slot. After that we charge a small visit fee." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">FAQ</p>
          <h2 className="text-4xl font-black sm:text-5xl">
            Things you might <span className="text-gradient-aqua">be wondering</span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card rounded-2xl transition-colors hover:bg-secondary/30"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
                className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <Plus className={`h-5 w-5 shrink-0 text-aqua transition-transform ${open === i ? "rotate-45" : ""}`} />
              </button>
              <motion.div
                id={`faq-panel-${i}`}
                role="region"
                aria-label={f.q}
                initial={false}
                animate={open === i ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden px-6"
              >
                <p className="pb-6 text-sm text-muted-foreground">{f.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
