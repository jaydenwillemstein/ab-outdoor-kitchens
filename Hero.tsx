"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/site";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brown pb-16 pt-32 text-[#f3e9d2] md:pt-28">
      <motion.div style={{ y }} className="absolute inset-[-40px]" aria-hidden>
        <Image src="/images/hero.jpg" alt="" fill priority sizes="100vw" className="scale-110 object-cover opacity-60 blur-2xl" />
      </motion.div>
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-[5vw] md:grid-cols-[1fr_1.4fr]">
        <div>
          <h1 className="text-5xl md:text-7xl">
            {["AB Outdoor", "Kitchens"].map((t, i) => (
              <span key={t} className="block overflow-hidden">
                <motion.span className="block" initial={{ y: "105%" }} animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.3 + i * 0.2, ease: [0.2, 0.7, 0.2, 1] }}>{t}</motion.span>
              </span>
            ))}
          </h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
            <p className="mt-6 text-lg">{SITE.tagline}<br />Complete outdoor kitchens voor wie buiten wil koken zoals binnen: stijlvol, warm en zonder compromis.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/modellen" className="btn btn-gold">Ontdek onze outdoor kitchens</Link>
              <Link href="/contact" className="btn hover:bg-white/10">Vraag vrijblijvend informatie aan</Link>
            </div>
          </motion.div>
        </div>
        <motion.figure initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 1.2 }}>
          <Image src="/images/hero.jpg" alt="Impressie van een AB outdoor kitchen in een tuin bij avondlicht" width={1206} height={904} priority
            sizes="(min-width:768px) 55vw, 100vw" className="h-auto w-full border-[6px] border-[#f3e9d2] shadow-2xl" />
          <figcaption className="pt-2 text-sm opacity-80">Impressie, geen foto van een geleverde keuken</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
