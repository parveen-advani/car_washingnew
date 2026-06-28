import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Rohan Mehta", role: "Audi A4 owner", text: "Booked the Showroom package — the ceramic coating still beads water 8 months later. Worth every rupee." },
  { name: "Priya Sharma", role: "BMW 3-series", text: "They arrived on time, cleaned my car in my office parking, and I drove home like it was new." },
  { name: "Arjun Patel", role: "Hyundai Creta", text: "The interior detailing was unreal. Smells like a showroom and my kids' juice stains are gone." },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">Love letters</p>
          <h2 className="text-4xl font-black sm:text-5xl">
            From <span className="text-gradient-aqua">our drivers</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card relative rounded-3xl p-6"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-aqua/30" />
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-aqua text-aqua" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-aqua font-bold text-primary-foreground">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
