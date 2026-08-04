import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerGate from "@/components/DisclaimerGate";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Capital from "@/pages/Capital";
import Contact from "@/pages/Contact";
import Why from "@/pages/Why";

const EASE = [0.16, 1, 0.3, 1] as const;

const TITLES: Record<string, string> = {
  "/": "Regis and Savoy Corporate Services LLP",
  "/about": "About Us · Regis and Savoy",
  "/services": "Services · Regis and Savoy",
  "/capital": "Regis and Savoy Capital",
  "/contact": "Contact · Regis and Savoy",
  "/why-regis-and-savoy": "Why Regis and Savoy — The Terrarium Framework",
};

// Sets the document title, resets scroll on navigation, and scrolls to a hash
// target when present — mirrors the Next.js template.tsx behaviour.
function RouteManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    document.title =
      TITLES[pathname] ?? "Regis and Savoy Corporate Services LLP";

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView();
      });
    } else {
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, lenis]);

  return null;
}

// Per-page enter animation (re-mounts on route change via the key).
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/capital" element={<Capital />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why-regis-and-savoy" element={<Why />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </motion.div>
  );
}

export default function App() {
  return (
    <SmoothScroll>
      <div className="grain" aria-hidden />
      <RouteManager />
      <DisclaimerGate />
      <Header />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
