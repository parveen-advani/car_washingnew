import { motion } from "framer-motion";

const stats = [
  { value: "12K+", label: "Cars Washed" },
  { value: "4.9", label: "Avg Rating" },
  { value: "45min", label: "Avg Turnaround" },
  { value: "2L", label: "Water per Wash" },
];

export function Stats() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-card relative overflow-hidden rounded-3xl p-10">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(circle at center, oklch(0.82 0.18 210 / 0.2), transparent 70%)",
            }}
          />
          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-black text-gradient-aqua sm:text-6xl">{s.value}</div>
                <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
