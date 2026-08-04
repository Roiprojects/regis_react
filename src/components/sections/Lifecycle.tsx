import { motion } from "framer-motion";
import { lifecycle } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Lifecycle() {
  return (
    <section id="approach" data-bg="#efe1c6" className="scroll-mt-24 py-28">
      <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
        <Reveal>
          <p className="eyebrow mb-6 text-bronze">Our Approach</p>
          <h2 className="display-lg max-w-[18ch] text-inkg">
            Support through every stage of the business lifecycle
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-stone bg-stone md:grid-cols-5">
          {lifecycle.map((stage, i) => (
            <motion.div
              key={stage.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="group relative bg-[#efe4ce] p-8 transition-colors duration-500 hover:bg-forest"
            >
              <h3 className="font-[var(--font-display)] text-2xl text-copper transition-colors duration-500 group-hover:text-ivory-2">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sage transition-colors duration-500 group-hover:text-ivory-2/60">
                {stage.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
