import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "@/components/AppLink";
import { services } from "@/lib/content";
import { ArrowIcon } from "@/components/ui";
import { iconByService } from "@/components/TerraIcons";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ServicesAccordion({
  linkItems = false,
  theme = "light",
}: {
  linkItems?: boolean;
  theme?: "light" | "dark";
}) {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  const isDark = theme === "dark";
  const borderClass = isDark ? "border-white/15" : "border-stone";
  const titleClosed = isDark ? "text-ivory-2 group-hover:text-copper-soft" : "text-inkg group-hover:text-copper";
  const titleOpen = isDark ? "text-copper-soft" : "text-copper-dark";
  const iconClosed = isDark ? "text-ivory-2/50 group-hover:text-copper-soft" : "text-sage group-hover:text-copper";
  const iconOpen = "text-copper-soft";
  const summaryClass = isDark ? "text-ivory-2/75" : "text-inkg-soft";
  const itemBorder = isDark ? "border-white/10" : "border-stone/60";
  const itemText = isDark ? "text-ivory-2/90" : "text-inkg";
  const itemHover = isDark ? "hover:text-copper-soft" : "hover:text-copper-dark";
  const linkBtn = isDark ? "text-ivory-2 hover:text-copper-soft" : "text-inkg hover:text-copper-dark";

  return (
    <div className={`border-t ${borderClass}`}>
      {services.map((s, i) => {
        const open = openId === s.id;
        const Icon = iconByService[s.id];
        return (
          <div key={s.id} id={s.id} className={`scroll-mt-28 border-b ${borderClass}`}>
            <button
              onClick={() => setOpenId(open ? null : s.id)}
              className="group flex w-full items-center gap-6 py-8 text-left"
              aria-expanded={open}
            >
              <span
                className={`h-8 w-8 shrink-0 transition-colors duration-300 ${
                  open ? iconOpen : iconClosed
                }`}
              >
                {Icon ? <Icon /> : null}
              </span>
              <span className="flex-1">
                <span
                  className={`block font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.6rem)] leading-tight transition-colors duration-300 ${
                    open ? titleOpen : titleClosed
                  }`}
                >
                  {s.title}
                </span>
              </span>
              <span
                className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                  open
                    ? "border-copper bg-copper text-ivory-2"
                    : isDark
                    ? "border-white/25 text-ivory-2"
                    : "border-stone text-inkg"
                }`}
              >
                <span className="absolute h-[1.5px] w-3.5 bg-current" />
                <span
                  className={`absolute h-3.5 w-[1.5px] bg-current transition-transform duration-500 ${
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
                  transition={{ duration: 0.55, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 pb-10 pl-14 md:grid-cols-[1fr_1.2fr]">
                    <p className={`max-w-md text-base leading-relaxed ${summaryClass}`}>
                      {s.summary}
                    </p>
                    <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
                      {s.items.map((it) => (
                        <li
                          key={it}
                          className={`flex items-center gap-3 border-b ${itemBorder} py-3 text-[0.95rem] ${itemText}`}
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

      <div className="pt-10">
        <Link
          href="/services"
          className={`group inline-flex items-center gap-3 text-sm uppercase tracking-[0.16em] transition-colors ${linkBtn}`}
        >
          Explore all services
          <ArrowIcon className="transition-transform duration-500 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </div>
  );
}
