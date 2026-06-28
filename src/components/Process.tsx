import { motion } from "framer-motion";
import { CalendarCheck, MapPin, Sparkles, Smile } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Book Online", desc: "Pick a package, choose a time slot, confirm in 30 seconds." },
  { icon: MapPin, title: "We Come to You", desc: "Our mobile unit arrives at your home or office — fully equipped." },
  { icon: Sparkles, title: "Magic Happens", desc: "Trained detailers transform your car using eco-safe products." },
  { icon: Smile, title: "Drive Spotless", desc: "Pay digitally, rate us, enjoy that fresh-from-showroom feeling." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">How it works</p>
          <h2 className="text-4xl font-black sm:text-5xl">
            From dirty to <span className="text-gradient-aqua">divine</span> in 4 steps
          </h2>
        </motion.div>

        <div className="relative mt-20">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-transparent via-aqua/50 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative mx-auto h-16 w-16">
                  <div className="absolute inset-0 animate-ripple rounded-full bg-aqua/30" />
                  <div className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-aqua glow-aqua">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <div className="mt-2 text-xs font-bold text-aqua">STEP {i + 1}</div>
                <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
