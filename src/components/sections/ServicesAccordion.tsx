import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "@/components/AppLink";
import { services } from "@/lib/content";
import { iconByService } from "@/components/TerraIcons";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ServicesAccordion({
  theme = "dark",
  linkItems = false,
}: {
  theme?: "dark" | "light";
  linkItems?: boolean;
}) {
  const [openId, setOpenId] = useState<string | null>("business-structuring");
  const isDark = theme === "dark";

  const borderClass = isDark ? "border-white/12" : "border-stone";
  const titleOpen = isDark ? "text-copper-soft" : "text-copper";
  const titleClosed = isDark ? "text-ivory-2 group-hover:text-copper-soft" : "text-inkg group-hover:text-copper";
  const iconOpen = isDark ? "text-copper-soft" : "text-copper";
  const iconClosed = isDark ? "text-ivory-2/45 group-hover:text-copper-soft" : "text-sage group-hover:text-copper";
  const summaryClass = isDark ? "text-ivory-2/70" : "text-inkg-soft";
  const itemBorder = isDark ? "border-white/10" : "border-stone/60";
  const itemText = isDark ? "text-ivory-2/85" : "text-inkg";
  const itemHover = isDark ? "hover:text-copper-soft" : "hover:text-copper";

  return (
    <div className={`border-t ${borderClass}`}>
      {services.map((s) => {
        const open = openId === s.id;
        const Icon = iconByService[s.id];
        return (
          <div key={s.id} id={s.id} className={`scroll-mt-28 border-b ${borderClass}`}>
            <button
              onClick={() => setOpenId(open ? null : s.id)}
              className="group flex w-full items-center gap-5 py-5 text-left transition-colors"
              aria-expanded={open}
            >
              <span
                className={`h-6 w-6 shrink-0 transition-colors duration-300 ${
                  open ? iconOpen : iconClosed
                }`}
              >
                {Icon ? <Icon /> : null}
              </span>
              <span className="flex-1">
                <span
                  className={`block font-[var(--font-display)] text-[clamp(1.15rem,2vw,1.7rem)] font-medium leading-tight transition-colors duration-300 ${
                    open ? titleOpen : titleClosed
                  }`}
                >
                  {s.title}
                </span>
              </span>
              <span
                className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  open
                    ? "border-copper bg-copper text-ivory-2"
                    : isDark
                    ? "border-white/25 text-ivory-2"
                    : "border-stone text-inkg"
                }`}
              >
                <span className="absolute h-[1.5px] w-3 bg-current" />
                <span
                  className={`absolute h-3 w-[1.5px] bg-current transition-transform duration-500 ${
                    open ? "rotate-90 scale-0" : ""
                  }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 pb-8 pl-3 sm:pl-11 md:grid-cols-[1fr_1.2fr]">
                    <p className={`max-w-md text-sm leading-relaxed ${summaryClass}`}>
                      {s.summary}
                    </p>
                    <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className={`flex items-center gap-3 border-b ${itemBorder} py-2.5 text-[0.88rem] ${itemText}`}
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-copper-soft" />
                          {linkItems ? (
                            <Link
                              href={`/services#${s.id}`}
                              className={`transition-colors ${itemHover}`}
                            >
                              {it}
                            </Link>
                          ) : (
                            it
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
