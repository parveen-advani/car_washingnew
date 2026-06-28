import { motion } from "framer-motion";
import heroCar from "@/assets/hero-car.jpg";
import exterior from "@/assets/service-exterior.jpg";
import interior from "@/assets/service-interior.jpg";
import ceramic from "@/assets/service-ceramic.jpg";

const items = [
  { img: heroCar, span: "lg:col-span-2 lg:row-span-2", title: "Sports coupe • Ceramic finish" },
  { img: exterior, title: "Wheel detailing" },
  { img: interior, title: "Cabin reset" },
  { img: ceramic, title: "Paint correction" },
  { img: heroCar, title: "Foam bath" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-aqua">Recent work</p>
          <h2 className="text-4xl font-black sm:text-5xl">
            Real cars. <span className="text-gradient-aqua">Real results.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${it.span ?? ""}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold">{it.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
