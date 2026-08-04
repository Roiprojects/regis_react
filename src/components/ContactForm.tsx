import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/content";
import { ArrowIcon } from "@/components/ui";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-sm border border-line bg-paper-2 p-12 text-center"
          >
            <p className="font-[var(--font-display)] text-3xl text-crimson">
              Thank you.
            </p>
            <p className="mt-4 text-ink-soft">
              Your enquiry has been received. A member of our advisory team will
              be in touch in confidence.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-8"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Organisation" name="org" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
            </div>

            <label className="block">
              <span className="eyebrow text-muted">Area of interest</span>
              <select
                name="service"
                className="mt-3 w-full border-b border-line bg-transparent py-3 text-ink focus:border-crimson focus:outline-none"
              >
                <option>General enquiry</option>
                {services.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="eyebrow text-muted">How can we help?</span>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-3 w-full resize-none border-b border-line bg-transparent py-3 text-ink placeholder:text-muted/60 focus:border-crimson focus:outline-none"
                placeholder="Tell us about your business and what you're navigating…"
              />
            </label>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-sm bg-copper px-9 py-4 text-sm uppercase tracking-[0.16em] text-paper transition-colors hover:bg-copper-dark"
            >
              Send enquiry
              <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-muted">
        {label}
        {required && <span className="text-crimson"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full border-b border-line bg-transparent py-3 text-ink focus:border-crimson focus:outline-none"
      />
    </label>
  );
}
