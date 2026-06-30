import { motion } from "framer-motion";
import { Sparkles, Shield, Wind, Wrench, Gauge, Droplets } from "lucide-react";
import exterior from "@/assets/service-exterior.jpg";
import interior from "@/assets/service-interior.jpg";
import ceramic from "@/assets/service-ceramic.jpg";

const services = [
  { icon: Wind, title: "Foam & Hand Wash", desc: "Premium foam cannon followed by a careful hand wash for a streak-free finish.", img: exterior },
  { icon: Sparkles, title: "Interior Steam Clean", desc: "Deep steam wash for seats, carpets, AC vents — kills bacteria and removes odours.", img: interior },
  { icon: Shield, title: "Full Polish & Wax", desc: "Multi-stage exterior polish and wax for mirror-like gloss and long-lasting protection.", img: ceramic },
  { icon: Gauge, title: "Tyre Shine & Alloy Wheels", desc: "Detailed tyre dressing and alloy wheel cleaning — spotless from rim to rubber.", img: exterior },
];

export function Services() {
  return (
    <section id="services" className="relative section-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-aqua/60" /> 01 · Services
            </p>
            <h2 className="text-4xl font-medium tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
              Every service your car<br />
              <span className="italic text-gradient-aqua">truly deserves.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
            From a quick foam wash to a full clay bar treatment — handled by trained detailers
            using premium chemicals and tested processes.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group glass-card hover-lift shine-hover relative overflow-hidden rounded-3xl p-5 hover:border-aqua/30"
            >
              <div className="relative mb-5 h-48 overflow-hidden rounded-2xl">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  0{i + 1}
                </div>
                <div className="absolute bottom-4 left-4 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-background/60 backdrop-blur">
                  <s.icon className="h-4 w-4 text-aqua" />
                </div>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Learn more</span>
                  <span className="text-aqua transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
