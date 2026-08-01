import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { brand } from "@/lib/content";

const KEY = "rs-disclaimer-ack";
const EASE = [0.16, 1, 0.3, 1] as const;

// AZB-style informational disclaimer splash (Bar Council-style acknowledgement),
// shown once per browser.
export default function DisclaimerGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const accept = () => {
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {}
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/95 px-6 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-full max-w-xl rounded-sm border border-white/12 bg-forest-2 p-10 text-ivory-2"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <p className="text-center font-[var(--font-display)] text-2xl text-ivory-2">
              {brand.legalName}
            </p>
            <p className="mt-1 text-center text-[0.65rem] uppercase tracking-[0.28em] text-copper-soft">
              Business Disclaimer & Confirmation
            </p>
            <div className="mt-6 max-h-[220px] space-y-3 overflow-y-auto pr-2 text-xs leading-relaxed text-ivory-2/70">
              <p>
                By using this website, you acknowledge and agree that the information provided herein is for general informational purposes only and does not constitute legal, financial, or professional advice. It should not be relied upon as a substitute for personalized consultation with qualified professionals.
              </p>
              <p>
                We do not accept any responsibility or liability for any loss, damage, or inconvenience caused by reliance on the information contained on this website.
              </p>
              <p>
                No attorney-client, lawyer-client, or professional relationship is established by visiting or using this website unless explicitly agreed upon in writing.
              </p>
              <p className="font-medium text-copper-soft pt-1">
                Confirmation: I confirm that I have read, understood, and agree to the above terms and conditions.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={accept}
                className="rounded-sm bg-copper px-8 py-3 text-xs uppercase tracking-[0.2em] text-ivory-2 transition-colors hover:bg-copper-dark shadow-md"
              >
                I Confirm & Agree
              </button>
              <a
                href="https://www.google.com"
                className="rounded-sm border border-white/20 px-8 py-3 text-center text-xs uppercase tracking-[0.2em] text-ivory-2/60 transition-colors hover:border-white/40"
              >
                I Disagree
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
