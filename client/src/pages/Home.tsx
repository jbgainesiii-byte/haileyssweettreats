/**
 * Hailey's Sweet Treats — Landing Page
 * Design: "Soft Romanticism" — Editorial Confectionery
 * Colors: Blush pink, chocolate brown, cream, gold accents
 * Typography: Playfair Display (display), Lato (body), Dancing Script (script accents)
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  Mail,
  Instagram,
  MapPin,
  Heart,
  Star,
  ChevronDown,
  Gift,
  Calendar,
  MessageCircle,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

/* ─── Image URLs ─── */
const IMAGES = {
  hero: "https://private-us-east-1.manuscdn.com/sessionFile/imJJqDxP29PkyF2NSWdube/sandbox/SDnCg1LwkqOwAwzseZwnpp-img-1_1772030410000_na1fn_aGVyby1zdHJhd2JlcnJpZXM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW1KSnFEeFAyOVBreUYyTlNXZHViZS9zYW5kYm94L1NEbkNnMUx3a3FPd0F3enNlWnducHAtaW1nLTFfMTc3MjAzMDQxMDAwMF9uYTFmbl9hR1Z5YnkxemRISmhkMkpsY25KcFpYTS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FSoLM9xEMy-CdQRvNeZY~o0N3doKjbGmOj-OzstP71XFbtu~~PVc~UuPAP5TSX2vyj-mGERDmrwU6qjC6qLbC7qRPOtxA~Gv-sXrOBuVHvQz4jZUaHxqZ2a72hblrhtZijqJmcwuFHiG64VsSQZXC30h5z4p701fAuoRdXvcofYBzKgMPm332kIbi-Lvbxnnt-biwHN3lWgxIUFLRBcUWc5kYVkZ9bIHxk21LyBVyH-LM1gjtlQolMaMtTOcf67FJR~3OZrvA-gk6vrNGTruNU02FyIORiwzYKHbqax8yodheTldfenYjzWikA7-DFPI3kTGTCu-rFT8-S4vCV~Dng__",
  cakePops: "https://private-us-east-1.manuscdn.com/sessionFile/imJJqDxP29PkyF2NSWdube/sandbox/SDnCg1LwkqOwAwzseZwnpp-img-2_1772030416000_na1fn_Y2FrZS1wb3BzLWRpc3BsYXk.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW1KSnFEeFAyOVBreUYyTlNXZHViZS9zYW5kYm94L1NEbkNnMUx3a3FPd0F3enNlWnducHAtaW1nLTJfMTc3MjAzMDQxNjAwMF9uYTFmbl9ZMkZyWlMxd2IzQnpMV1JwYzNCc1lYay5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=f9a1birrEMa~IMvweGHJEvaXrxQgCAOelzGu4-DEECTeMGKy~KgzZdYCFUJ6ui5ixXPN4izVhWPezIHs433lE8c-ZU8Ev~gOo9W9aFBokk6FIPAk8ZNAka2e6yeUrtloE-dH~yDz7kciCIO0DMmYvGiSCCdA8co8m6VuHPYHKNrn03WUh0wJegR8SlGqL7Pu-lgXOakuuDdi6CTwiOl2uM-AackzDzW~9aFTHCjaIfhHAkxCzlcbPbtroEiv2Db1o5Lyj2~4DM~eZ6GtOH~5EfFXxOOM-bvaM6qmdbKzIz716WC3jtJ4RUIIogdidIsn0dnQXXVM9xRs7~srjcuw0Q__",
  giftBox: "https://private-us-east-1.manuscdn.com/sessionFile/imJJqDxP29PkyF2NSWdube/sandbox/SDnCg1LwkqOwAwzseZwnpp-img-3_1772030424000_na1fn_c3RyYXdiZXJyeS1ib3gtZ2lmdA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW1KSnFEeFAyOVBreUYyTlNXZHViZS9zYW5kYm94L1NEbkNnMUx3a3FPd0F3enNlWnducHAtaW1nLTNfMTc3MjAzMDQyNDAwMF9uYTFmbl9jM1J5WVhkaVpYSnllUzFpYjNndFoybG1kQS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Bhy0EFOm-DCdFgCWNtyIa9-jVAO5cpN-qnCpXB-cs~0i126ZI2IaD5EDOX7SvYmmpJwoasSAMkh8mz79v5aZcBqRKP3Snuf82lZLN6fyK92r46e8rtNze46AjhBrrqhyGEhwtCtmoxh3VcT07VcUTdXVFjRxaBW3bejdNuH47d95ronfQe-jRVphYN6PGxUW32gzDP2IDI81wkjVyMpI1WxbtpnQkROtcQ6BsefD7A8WaqI-MR~xFR5KBkruhvG4folbrEVK2OgQbyY7Cxd48C5AXLT6dKzFC7mW493xxkOAe-tKvOcsjj6pknhC6r6MVk7XqIU0UZcyforVtddtLw__",
  events: "https://private-us-east-1.manuscdn.com/sessionFile/imJJqDxP29PkyF2NSWdube/sandbox/SDnCg1LwkqOwAwzseZwnpp-img-4_1772030422000_na1fn_ZXZlbnRzLWRlc3NlcnQtdGFibGU.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW1KSnFEeFAyOVBreUYyTlNXZHViZS9zYW5kYm94L1NEbkNnMUx3a3FPd0F3enNlWnducHAtaW1nLTRfMTc3MjAzMDQyMjAwMF9uYTFmbl9aWFpsYm5SekxXUmxjM05sY25RdGRHRmliR1UuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=b0rq~3~fnBFCGe-rmxsnTyyuxlZ4nqKe6CjxR995NY5DAIDieuwdO3cxEOckmWrDT-1x~IkT5AYBtRNH4Wt~C7fReJnhRf8ZDhj4G5E9YDA6YbQQp7p3oTFwx1B7STAH91LxBhxpw2J30kRmWiTqn1Xs5pkbimOSN4jD31qP89i~9~vnXhw89A3uqQL5pbpUfZE5JMX8Y2FwIA777IWD92fQ-stsjmdZbOBvnATFk5TF-c0Ge-NJfU3dl9CitN9N9lCt6sbbqksWgz1CSjcO1Yzx9hpJA0c4WsZieT36cgXVc6~n1EwMQp4~uG5P-h5krWCSpMQxX1aeuxDpiBXJTA__",
  about: "https://private-us-east-1.manuscdn.com/sessionFile/imJJqDxP29PkyF2NSWdube/sandbox/SDnCg1LwkqOwAwzseZwnpp-img-5_1772030416000_na1fn_YWJvdXQtbWFraW5nLXRyZWF0cw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaW1KSnFEeFAyOVBreUYyTlNXZHViZS9zYW5kYm94L1NEbkNnMUx3a3FPd0F3enNlWnducHAtaW1nLTVfMTc3MjAzMDQxNjAwMF9uYTFmbl9ZV0p2ZFhRdGJXRnJhVzVuTFhSeVpXRjBjdy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=jAoLTf3eWo8ub2vNrS~r7ZPJQhH505TUu5aQn3sn~5DfpWRZIajNJaBDMeMJZnDf1EFBRFdzy0l6fv5KmZFZ03rXUuGHSL32jPfdAkelEVWT51HakBi7Z0yg8pZQNTDYcxMIM1N4huOLW88IgaioerfjSDkMegmGVMqnmXkCaFrtOB~ehyenoW468Cm4QjLE7IuoeagBHCLZzQJwkMuvoL8cKIOr56xW1A5lYElbKMOIuvN3ox4a3ZIfiDOvJAvzRCW5AdnDkdQvIHgeKSpJ-z3tOWF5s7VsVy6MX~2kBHGwBib4thqmi12VNdXsba14uzV9KvUcDsMXfIKqRIi3MQ__",
};

/* ─── Reusable animation wrapper ─── */
function FadeInSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section Label ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <span
      className="inline-block tracking-[0.25em] uppercase text-xs font-body font-bold"
      style={{ fontFamily: "var(--font-body)", color: "oklch(0.65 0.1 10)" }}
    >
      {text}
    </span>
  );
}

/* ─── Wave Divider SVG ─── */
function WaveDivider({ flip = false, color = "oklch(0.97 0.01 80)" }: { flip?: boolean; color?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`} style={{ marginTop: flip ? 0 : "-1px", marginBottom: flip ? "-1px" : 0 }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[80px] lg:h-[100px]">
        <path
          d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,40 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ─── Navigation ─── */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Treats", href: "#products" },
    { label: "Order", href: "#order" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <Heart className="w-5 h-5" style={{ color: "oklch(0.72 0.1 10)" }} fill="oklch(0.72 0.1 10)" />
            <span
              className="text-lg sm:text-xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
            >
              Hailey's Sweet Treats
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide transition-colors duration-300 hover:opacity-70"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.4 0.04 50)", fontWeight: 400 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/haileyssweettreats4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, oklch(0.72 0.1 10), oklch(0.65 0.15 10))", fontFamily: "var(--font-body)" }}
            >
              <Instagram className="w-4 h-4" />
              Order Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
            style={{ color: "oklch(0.3 0.05 50)" }}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-t"
          style={{ borderColor: "oklch(0.9 0.02 10)" }}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-base"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.4 0.04 50)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/haileyssweettreats4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white mt-2"
              style={{ background: "linear-gradient(135deg, oklch(0.72 0.1 10), oklch(0.65 0.15 10))", fontFamily: "var(--font-body)" }}
            >
              <Instagram className="w-4 h-4" />
              Order Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <img
          src={IMAGES.hero}
          alt="Luxury chocolate covered strawberries"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.4)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, oklch(0.3 0.05 10 / 0.7) 0%, oklch(0.2 0.04 50 / 0.5) 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div className="relative z-10 w-full" style={{ opacity }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase mb-6"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.85 0.06 10)" }}
            >
              Handcrafted in Michigan
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4"
              style={{ fontFamily: "var(--font-display)", color: "white" }}
            >
              Hailey's
              <br />
              <span style={{ color: "oklch(0.85 0.06 10)" }}>Sweet Treats</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-2xl sm:text-3xl mb-2"
              style={{ fontFamily: "var(--font-script)", color: "oklch(0.85 0.06 10)" }}
            >
              made fresh, made with love
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-base sm:text-lg mb-10 max-w-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.9 0.01 80)", fontWeight: 300 }}
            >
              Chocolate-covered strawberries & cake pops crafted with premium ingredients.
              Custom designs for every occasion. Serving South Lyon & Ann Arbor.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://www.instagram.com/haileyssweettreats4/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, oklch(0.72 0.1 10), oklch(0.6 0.15 10))",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 8px 32px oklch(0.72 0.1 10 / 0.3)",
                }}
              >
                <Instagram className="w-5 h-5" />
                Order on Instagram
              </a>
              <a
                href="tel:9894448146"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 border"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "white",
                  borderColor: "oklch(1 0 0 / 0.3)",
                  background: "oklch(1 0 0 / 0.1)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Phone className="w-5 h-5" />
                Call to Order
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32" style={{ background: "oklch(0.97 0.01 80)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeInSection>
            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ boxShadow: "0 25px 60px oklch(0.72 0.1 10 / 0.15)" }}
              >
                <img
                  src={IMAGES.about}
                  alt="Handcrafting chocolate covered strawberries"
                  className="w-full h-[400px] sm:h-[500px] object-cover"
                />
              </div>
              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl p-5 shadow-xl"
                style={{ boxShadow: "0 15px 40px oklch(0 0 0 / 0.08)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: "oklch(0.95 0.02 10)" }}
                  >
                    <Heart className="w-6 h-6" style={{ color: "oklch(0.72 0.1 10)" }} fill="oklch(0.72 0.1 10)" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}>
                      Made with Love
                    </p>
                    <p className="text-xs" style={{ fontFamily: "var(--font-body)", color: "oklch(0.5 0.03 50)" }}>
                      Every single treat
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeInSection>

          {/* Text */}
          <FadeInSection delay={0.2}>
            <div>
              <SectionLabel text="Our Story" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
              >
                Sweet Moments,
                <br />
                <span style={{ color: "oklch(0.72 0.1 10)" }}>Handcrafted</span>
              </h2>
              <div className="space-y-4">
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.04 50)", fontWeight: 300 }}
                >
                  Hi, I'm Hailey! What started as a passion for creating beautiful, delicious treats
                  for family and friends has grown into something truly special. Every chocolate-covered
                  strawberry and cake pop is handcrafted with care, using fresh ingredients and premium chocolate.
                </p>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.04 50)", fontWeight: 300 }}
                >
                  Based in the heart of Michigan, I proudly serve the South Lyon and Ann Arbor communities.
                  Whether it's a romantic gesture, a celebration, or just because — I'm here to make your
                  moments sweeter.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 mt-8">
                {[
                  { icon: Sparkles, label: "Custom Designs" },
                  { icon: Heart, label: "Made Fresh" },
                  { icon: MapPin, label: "Local Michigan" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" style={{ color: "oklch(0.72 0.1 10)" }} />
                    <span
                      className="text-sm font-medium"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.4 0.04 50)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Products Section ─── */
function ProductsSection() {
  const products = [
    {
      title: "Chocolate-Covered Strawberries",
      description:
        "Fresh, juicy strawberries dipped in premium dark, milk, or white chocolate. Decorated with elegant drizzles, sprinkles, gold leaf, and custom designs. Available in boxes of 2, 6, or 12.",
      image: IMAGES.hero,
      features: ["Dark, Milk & White Chocolate", "Custom Colors & Designs", "Gift Boxes Available"],
    },
    {
      title: "Cake Pops",
      description:
        "Moist, flavorful cake blended with frosting and coated in a smooth chocolate shell. Beautifully decorated with drizzles, pearls, and fondant flowers. Perfect for parties and events.",
      image: IMAGES.cakePops,
      features: ["Multiple Flavors", "Custom Decorations", "Event Quantities"],
    },
    {
      title: "Gift Boxes & Custom Orders",
      description:
        "Beautifully packaged gift boxes perfect for any occasion. Mix and match strawberries and cake pops. Custom colors, themes, and designs to match your event or recipient's style.",
      image: IMAGES.giftBox,
      features: ["Elegant Packaging", "Mix & Match Options", "Personalized Themes"],
    },
  ];

  return (
    <section id="products" className="relative py-24 sm:py-32" style={{ background: "oklch(0.99 0.005 80)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16 sm:mb-20">
            <SectionLabel text="Our Treats" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
            >
              Irresistible <span style={{ color: "oklch(0.72 0.1 10)" }}>Indulgences</span>
            </h2>
            <p
              className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.5 0.03 50)", fontWeight: 300 }}
            >
              Each treat is a small work of art — handcrafted, beautifully decorated, and absolutely delicious.
              Custom colors and designs available for every order.
            </p>
          </div>
        </FadeInSection>

        <div className="space-y-20 sm:space-y-28">
          {products.map((product, index) => (
            <FadeInSection key={product.title} delay={index * 0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-2xl overflow-hidden shadow-xl"
                    style={{ boxShadow: "0 20px 50px oklch(0.72 0.1 10 / 0.1)" }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[350px] sm:h-[420px] object-cover"
                    />
                  </motion.div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h3
                    className="text-2xl sm:text-3xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
                  >
                    {product.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.5 0.03 50)", fontWeight: 300 }}
                  >
                    {product.description}
                  </p>
                  <div className="space-y-3">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "oklch(0.95 0.02 10)" }}
                        >
                          <Sparkles className="w-3 h-3" style={{ color: "oklch(0.72 0.1 10)" }} />
                        </div>
                        <span
                          className="text-sm"
                          style={{ fontFamily: "var(--font-body)", color: "oklch(0.4 0.04 50)" }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How to Order Section ─── */
function OrderSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Reach Out",
      description: "Send a DM on Instagram, call, or email us with your order details and any custom requests.",
    },
    {
      icon: Calendar,
      title: "Choose Your Date",
      description: "Let us know when you need your treats. We recommend ordering at least 48 hours in advance.",
    },
    {
      icon: Sparkles,
      title: "We Create",
      description: "Your treats are handcrafted fresh with premium ingredients and decorated to perfection.",
    },
    {
      icon: Gift,
      title: "Enjoy!",
      description: "Pick up your beautifully packaged treats and enjoy! Delivery may be available for local orders.",
    },
  ];

  return (
    <section id="order" className="relative py-24 sm:py-32" style={{ background: "oklch(0.95 0.02 10)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <SectionLabel text="How It Works" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
            >
              Ordering is <span style={{ color: "oklch(0.72 0.1 10)" }}>Easy</span>
            </h2>
            <p
              className="max-w-xl mx-auto text-base sm:text-lg"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.5 0.03 50)", fontWeight: 300 }}
            >
              From your first message to that first bite — we make the process simple and sweet.
            </p>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeInSection key={step.title} delay={index * 0.15}>
              <div className="relative text-center group">
                {/* Step number */}
                <div
                  className="text-6xl font-bold absolute -top-4 left-1/2 -translate-x-1/2 opacity-[0.07]"
                  style={{ fontFamily: "var(--font-display)", color: "oklch(0.72 0.1 10)" }}
                >
                  {index + 1}
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-2xl p-8 shadow-sm transition-shadow duration-300 group-hover:shadow-lg"
                  style={{ boxShadow: "0 4px 20px oklch(0 0 0 / 0.04)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "linear-gradient(135deg, oklch(0.93 0.03 10), oklch(0.88 0.05 10))" }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: "oklch(0.55 0.12 10)" }} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.5 0.03 50)", fontWeight: 300 }}
                  >
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* CTA */}
        <FadeInSection delay={0.4}>
          <div className="text-center mt-14">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/haileyssweettreats4/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, oklch(0.72 0.1 10), oklch(0.6 0.15 10))",
                  fontFamily: "var(--font-body)",
                  boxShadow: "0 6px 24px oklch(0.72 0.1 10 / 0.25)",
                }}
              >
                <Instagram className="w-4 h-4" />
                DM on Instagram
              </a>
              <a
                href="tel:9894448146"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 border"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "oklch(0.4 0.04 50)",
                  borderColor: "oklch(0.85 0.04 10)",
                  background: "white",
                }}
              >
                <Phone className="w-4 h-4" />
                (989) 444-8146
              </a>
              <a
                href="mailto:haileyssweettreats4@gmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 border"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "oklch(0.4 0.04 50)",
                  borderColor: "oklch(0.85 0.04 10)",
                  background: "white",
                }}
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

/* ─── Events / Perfect For Section ─── */
function EventsSection() {
  const events = [
    { emoji: "💍", title: "Weddings", desc: "Elegant dessert tables & favors" },
    { emoji: "🎀", title: "Bridal Showers", desc: "Custom themed treats" },
    { emoji: "❤️", title: "Valentine's Day", desc: "Romantic gift boxes" },
    { emoji: "🎂", title: "Birthdays", desc: "Personalized celebrations" },
    { emoji: "👶", title: "Baby Showers", desc: "Sweet gender reveals" },
    { emoji: "🏢", title: "Corporate Events", desc: "Professional presentations" },
    { emoji: "🎄", title: "Holidays", desc: "Seasonal specialties" },
    { emoji: "🎁", title: "Just Because", desc: "Surprise someone special" },
  ];

  return (
    <section id="events" className="relative overflow-hidden">
      {/* Full-width image background */}
      <div className="relative h-[500px] sm:h-[600px]">
        <img
          src={IMAGES.events}
          alt="Elegant dessert table for events"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, oklch(0.2 0.04 10 / 0.6), oklch(0.15 0.04 10 / 0.8))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeInSection>
            <div className="text-center px-4">
              <SectionLabel text="Perfect For" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4 text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Every Sweet <span style={{ color: "oklch(0.85 0.06 10)" }}>Occasion</span>
              </h2>
              <p
                className="text-base sm:text-lg max-w-xl mx-auto"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.9 0.01 80)", fontWeight: 300 }}
              >
                From intimate celebrations to grand events, our treats add a touch of elegance to any gathering.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Events grid */}
      <div className="py-20 sm:py-24" style={{ background: "oklch(0.99 0.005 80)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {events.map((event, index) => (
              <FadeInSection key={event.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="text-center p-6 rounded-2xl bg-white transition-shadow duration-300 hover:shadow-lg"
                  style={{ boxShadow: "0 2px 12px oklch(0 0 0 / 0.04)" }}
                >
                  <span className="text-3xl sm:text-4xl block mb-3">{event.emoji}</span>
                  <h3
                    className="text-sm sm:text-base font-semibold mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm"
                    style={{ fontFamily: "var(--font-body)", color: "oklch(0.55 0.03 50)", fontWeight: 300 }}
                  >
                    {event.desc}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Bride-to-be",
      text: "Hailey made the most gorgeous strawberries for my bridal shower! Everyone was obsessed. The pink and gold theme was absolutely perfect.",
      rating: 5,
    },
    {
      name: "Jessica T.",
      role: "Birthday Party Host",
      text: "The cake pops were a HUGE hit at my daughter's birthday party. Beautiful, delicious, and Hailey was so easy to work with. Will definitely order again!",
      rating: 5,
    },
    {
      name: "Michael R.",
      role: "Valentine's Day Gift",
      text: "Ordered a gift box for my wife and she absolutely loved them. The presentation was stunning and they tasted even better than they looked. Thank you, Hailey!",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 sm:py-32" style={{ background: "oklch(0.95 0.02 10)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <SectionLabel text="Kind Words" />
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
              style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
            >
              What Our <span style={{ color: "oklch(0.72 0.1 10)" }}>Customers</span> Say
            </h2>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInSection key={testimonial.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 h-full flex flex-col"
                style={{ boxShadow: "0 4px 20px oklch(0 0 0 / 0.04)" }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{ color: "oklch(0.75 0.1 80)" }}
                      fill="oklch(0.75 0.1 80)"
                    />
                  ))}
                </div>

                <p
                  className="text-base leading-relaxed mb-6 flex-grow"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.04 50)", fontWeight: 300 }}
                >
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "oklch(0.93 0.02 10)" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.88 0.04 10), oklch(0.82 0.06 10))",
                      fontFamily: "var(--font-display)",
                      color: "oklch(0.5 0.1 10)",
                    }}
                  >
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.6 0.03 50)" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─── */
function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32" style={{ background: "oklch(0.99 0.005 80)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeInSection>
            <div>
              <SectionLabel text="Get in Touch" />
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
                style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
              >
                Let's Create Something <span style={{ color: "oklch(0.72 0.1 10)" }}>Sweet</span>
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed mb-10"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.5 0.03 50)", fontWeight: 300 }}
              >
                Ready to order? Have a custom design in mind? I'd love to hear from you!
                Reach out through any of the channels below and let's make your sweet vision a reality.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:9894448146"
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "oklch(0.95 0.02 10)" }}
                  >
                    <Phone className="w-6 h-6" style={{ color: "oklch(0.65 0.1 10)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.6 0.03 50)" }}
                    >
                      Phone
                    </p>
                    <p
                      className="text-lg font-medium"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
                    >
                      (989) 444-8146
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:haileyssweettreats4@gmail.com"
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "oklch(0.95 0.02 10)" }}
                  >
                    <Mail className="w-6 h-6" style={{ color: "oklch(0.65 0.1 10)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.6 0.03 50)" }}
                    >
                      Email
                    </p>
                    <p
                      className="text-lg font-medium"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
                    >
                      haileyssweettreats4@gmail.com
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/haileyssweettreats4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: "oklch(0.95 0.02 10)" }}
                  >
                    <Instagram className="w-6 h-6" style={{ color: "oklch(0.65 0.1 10)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.6 0.03 50)" }}
                    >
                      Instagram
                    </p>
                    <p
                      className="text-lg font-medium"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
                    >
                      @haileyssweettreats4
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: "oklch(0.95 0.02 10)" }}
                  >
                    <MapPin className="w-6 h-6" style={{ color: "oklch(0.65 0.1 10)" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-wider mb-1"
                      style={{ fontFamily: "var(--font-body)", color: "oklch(0.6 0.03 50)" }}
                    >
                      Serving
                    </p>
                    <p
                      className="text-lg font-medium"
                      style={{ fontFamily: "var(--font-display)", color: "oklch(0.3 0.05 50)" }}
                    >
                      South Lyon & Ann Arbor, MI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* CTA Card */}
          <FadeInSection delay={0.2}>
            <div
              className="rounded-3xl p-8 sm:p-12 h-full flex flex-col justify-center"
              style={{
                background: "linear-gradient(135deg, oklch(0.3 0.05 10), oklch(0.22 0.04 50))",
              }}
            >
              <div className="text-center">
                <Heart className="w-10 h-10 mx-auto mb-6" style={{ color: "oklch(0.85 0.06 10)" }} fill="oklch(0.85 0.06 10)" />
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-4 text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ready to Order?
                </h3>
                <p
                  className="text-base mb-8 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.8 0.02 10)", fontWeight: 300 }}
                >
                  Custom inquiries always welcome. Let me know your vision and I'll bring it to life
                  with chocolate and love.
                </p>

                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/haileyssweettreats4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, oklch(0.72 0.1 10), oklch(0.6 0.15 10))",
                      fontFamily: "var(--font-body)",
                      boxShadow: "0 8px 32px oklch(0.72 0.1 10 / 0.4)",
                    }}
                  >
                    <Instagram className="w-5 h-5" />
                    DM to Order
                  </a>
                  <a
                    href="tel:9894448146"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 border"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "white",
                      borderColor: "oklch(1 0 0 / 0.2)",
                      background: "oklch(1 0 0 / 0.08)",
                    }}
                  >
                    <Phone className="w-5 h-5" />
                    Call (989) 444-8146
                  </a>
                  <a
                    href="mailto:haileyssweettreats4@gmail.com"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 border"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "white",
                      borderColor: "oklch(1 0 0 / 0.2)",
                      background: "oklch(1 0 0 / 0.08)",
                    }}
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer
      className="py-12 sm:py-16"
      style={{ background: "oklch(0.22 0.04 50)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5" style={{ color: "oklch(0.72 0.1 10)" }} fill="oklch(0.72 0.1 10)" />
              <span
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Hailey's Sweet Treats
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.7 0.02 50)", fontWeight: 300 }}
            >
              Handcrafted chocolate-covered strawberries and cake pops, made fresh with love in Michigan.
            </p>
            <a
              href="https://www.instagram.com/haileyssweettreats4/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-300 hover:opacity-80"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.85 0.06 10)" }}
            >
              <Instagram className="w-4 h-4" />
              @haileyssweettreats4
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.8 0.02 10)" }}
            >
              Quick Links
            </h4>
            <div className="space-y-3">
              {["About", "Treats", "Order", "Events", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm transition-colors duration-300 hover:opacity-80"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.65 0.02 50)", fontWeight: 300 }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.8 0.02 10)" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:9894448146"
                className="block text-sm transition-colors duration-300 hover:opacity-80"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.65 0.02 50)", fontWeight: 300 }}
              >
                (989) 444-8146
              </a>
              <a
                href="mailto:haileyssweettreats4@gmail.com"
                className="block text-sm transition-colors duration-300 hover:opacity-80"
                style={{ fontFamily: "var(--font-body)", color: "oklch(0.65 0.02 50)", fontWeight: 300 }}
              >
                haileyssweettreats4@gmail.com
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)", color: "oklch(0.8 0.02 10)" }}
            >
              Service Areas
            </h4>
            <div className="space-y-3">
              {["South Lyon, MI", "Ann Arbor, MI", "Metro Detroit Area"].map((area) => (
                <p
                  key={area}
                  className="text-sm"
                  style={{ fontFamily: "var(--font-body)", color: "oklch(0.65 0.02 50)", fontWeight: 300 }}
                >
                  {area}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "oklch(1 0 0 / 0.1)" }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-body)", color: "oklch(0.5 0.02 50)" }}
          >
            &copy; {new Date().getFullYear()} Hailey's Sweet Treats. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-body)", color: "oklch(0.45 0.02 50)" }}
          >
            Website by{" "}
            <span style={{ color: "oklch(0.65 0.06 10)" }}>Detroit AI Works</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WaveDivider color="oklch(0.97 0.01 80)" />
      <AboutSection />
      <WaveDivider flip color="oklch(0.97 0.01 80)" />
      <ProductsSection />
      <WaveDivider color="oklch(0.95 0.02 10)" />
      <OrderSection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
