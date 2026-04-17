'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import { ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

const HEADLINE_WORDS = ["THC", "PARENT", "TEST"];

const headlineContainerVars = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const wordVar = {
  hidden:  { y: "105%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden:  { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const steps = [
  {
    num: "01",
    title: "Collect oral fluid",
    text: "Insert the sponge collector into your mouth and actively swab the inside for at least 3 minutes until the sponge is fully saturated. Press it between tongue and teeth to help. No hard spots should be felt when done.",
  },
  {
    num: "02",
    title: "Fill the chamber",
    text: "Unscrew the collection chamber. Press the sponge fully against the strainer to release oral fluid up to the arrowed level. Screw it back tightly. Discard the collector.",
  },
  {
    num: "03",
    title: "Apply to cassette",
    text: "Shake the chamber for 10 seconds. Snap the tip open, invert it and transfer 3 drops (~120 μL) into the specimen well (S) of the test cassette. Start the timer.",
  },
  {
    num: "04",
    title: "Read at 5 minutes",
    text: "Two lines (C + T) = NEGATIVE. One line in C only = POSITIVE — Δ9-THC detected above 50 ng/mL. No C line = INVALID. Do not read after 15 minutes.",
  },
];

const comparisons = [
  {
    label: "Standard THC test",
    detects: "THC-COOH (metabolite)",
    window: "Days to weeks",
    note: "Shows past use — not current impairment.",
  },
  {
    label: "THC Parent Test",
    detects: "Δ9-THC (parent compound)",
    window: "Up to ~14 hours",
    note: "Reflects recent exposure, not old metabolites.",
    highlight: true,
  },
];

export default function ThcParentContent() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const slowY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const midY  = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, -220]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <main className="flex-1 w-full px-6 md:px-16 lg:px-24 pt-32 pb-20 relative overflow-hidden">

      {/* ── HERO decoratives ── */}
      <section ref={heroRef} className="relative">
        {mounted && <>
          {/* Big weed leaf — hero bottom-left, away from text */}
          <motion.div
            className="absolute -left-[10%] top-[55%] pointer-events-none hidden md:block"
            style={{ y: slowY }}
            initial={{ opacity: 0, x: -80, scale: 0.7 }}
            animate={{ opacity: 0.9, x: 0, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sketch-float-slow">
              <Image src="/visualelements/weed.png" alt="" width={700} height={700}
                className="w-[360px] h-[360px] lg:w-[480px] lg:h-[480px] object-contain"
                style={{ mixBlendMode: 'multiply', transform: 'rotate(-18deg)' }} />
            </div>
          </motion.div>

          {/* Umbrella — hero right */}
          <motion.div
            className="absolute -right-[8%] top-[20%] pointer-events-none hidden lg:block"
            style={{ y: midY }}
            initial={{ opacity: 0, x: 80, scale: 0.7 }}
            animate={{ opacity: 0.85, x: 0, scale: 1 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <div className="sketch-float-slow">
              <Image src="/visualelements/umbrella2.png" alt="" width={520} height={520}
                className="w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] object-contain"
                style={{ mixBlendMode: 'multiply', transform: 'rotate(15deg)' }} />
            </div>
          </motion.div>

          {/* weed2 — hero center top */}
          <motion.div
            className="absolute right-[28%] top-[5%] pointer-events-none hidden xl:block"
            style={{ y: fastY }}
            initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
            animate={{ opacity: 0.85, scale: 1, rotate: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <div className="drift-float">
              <Image src="/visualelements/weed2.png" alt="" width={180} height={180}
                className="w-36 h-36 lg:w-44 lg:h-44 object-contain"
                style={{ mixBlendMode: 'multiply' }} />
            </div>
          </motion.div>
        </>}

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 relative z-10">
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Hero content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-24 relative z-10">
          <div className="flex-1">
            <motion.div
              className="inline-block border border-border px-3 py-1 font-body text-xs text-muted-foreground tracking-widest uppercase mb-6 bg-background/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Oral fluid · Δ9-THC · Cut-off 50 ng/mL
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.9] mb-6 whitespace-nowrap"
              variants={headlineContainerVars}
              initial="hidden"
              animate="visible"
            >
              {HEADLINE_WORDS.map((w, i) => (
                <span key={w} className="inline-block overflow-hidden align-bottom">
                  <motion.span variants={wordVar} className="inline-block">
                    {w}{i < HEADLINE_WORDS.length - 1 ? '\u00A0' : ''}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="font-body text-lg text-muted-foreground font-light max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Detects the active Δ9-THC compound in oral fluid — not the metabolite. Designed to indicate recent exposure, not past use weeks ago.
            </motion.p>
          </div>

          <motion.div
            className="w-full lg:w-80 xl:w-96 aspect-square bg-muted border border-border overflow-hidden flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            <Image
              src="/products/THCParent.jpg"
              alt="THC Parent Test — J.Zeppelin"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          </motion.div>
        </div>
      </section>

      {/* What makes it different */}
      <motion.div
        className="mb-24 relative"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* weed2 floating left */}
        <div className="absolute -left-[4%] top-[10%] opacity-[0.85] pointer-events-none hidden lg:block sketch-float">
          <Image src="/visualelements/weed2.png" alt="" width={180} height={180}
            className="w-36 h-36 object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(-20deg)' }} />
        </div>

        <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl tracking-tight mb-10 relative z-10">What makes it different</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
          {comparisons.map((c) => (
            <motion.div
              key={c.label}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ type: 'tween', duration: 0.3 }}
              className={`border-2 p-8 ${c.highlight ? 'border-foreground bg-foreground text-background' : 'border-border'}`}
            >
              <div className={`font-heading text-xs tracking-widest uppercase mb-4 ${c.highlight ? 'text-background/60' : 'text-muted-foreground'}`}>{c.label}</div>
              <div className="font-heading text-2xl md:text-3xl tracking-tight mb-2">{c.detects}</div>
              <div className={`font-body text-sm mb-4 ${c.highlight ? 'text-background/70' : 'text-muted-foreground'}`}>Detection window: {c.window}</div>
              <p className={`font-body text-sm leading-relaxed ${c.highlight ? 'text-background/80' : 'text-muted-foreground'}`}>{c.note}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How to use */}
      <motion.div
        className="mb-24 relative"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* big weed leaf right */}
        <div className="absolute -right-[5%] top-[20%] opacity-[0.85] pointer-events-none hidden lg:block sketch-float-slow">
          <Image src="/visualelements/weed.png" alt="" width={360} height={360}
            className="w-[260px] h-[260px] lg:w-[320px] lg:h-[320px] object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(28deg)' }} />
        </div>

        <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl tracking-tight mb-10 relative z-10">How to use</motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={fadeUp}
              whileHover={{ y: -5, borderColor: 'rgba(0,0,0,0.4)' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="border border-border p-6 bg-background/70 backdrop-blur-sm"
            >
              <div className="font-heading text-5xl text-muted-foreground/20 mb-3">{step.num}</div>
              <h3 className="font-heading text-2xl tracking-tight mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
        <motion.p variants={fadeUp} className="mt-4 text-xs text-muted-foreground/50 font-body max-w-lg relative z-10">
          ⚠ Full saturation of the sponge is critical. Insufficient oral fluid will produce false or invalid results.
        </motion.p>
      </motion.div>

      {/* Key facts + Limitations */}
      <motion.div
        className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8 relative"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* umbrella floating */}
        <div className="absolute -left-[6%] top-[10%] opacity-[0.85] pointer-events-none hidden xl:block sketch-float-alt">
          <Image src="/visualelements/umbrella1.png" alt="" width={280} height={280}
            className="w-[220px] h-[220px] object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(-22deg)' }} />
        </div>
        {/* weed2 right */}
        <div className="absolute -right-[3%] bottom-[5%] opacity-[0.85] pointer-events-none hidden lg:block drift-float">
          <Image src="/visualelements/weed2.png" alt="" width={200} height={200}
            className="w-40 h-40 object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(18deg)' }} />
        </div>

        <motion.div variants={fadeUp} className="relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl tracking-tight mb-8">Key facts</h2>
          <ul className="space-y-4">
            {[
              "Detects Δ9-THC (active compound) — not THC-COOH metabolite",
              "Cut-off: 50 ng/mL in oral fluid",
              "Detection window: up to ~14 hours after use",
              "Read results at 5 minutes — invalid after 15 min",
              "96.4% agreement with GC/MS laboratory method",
              "CE-marked · IVD · Hangzhou AllTest Biotech",
              "EC Representative: MedNet EC-REP GmbH, Münster, Germany",
            ].map((fact) => (
              <li key={fact} className="flex items-start gap-3 font-body text-sm">
                <CheckCircle size={15} className="mt-0.5 flex-shrink-0 text-foreground" />
                {fact}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div variants={fadeUp} className="border border-border p-8 bg-background/70 backdrop-blur-sm relative z-10">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" />
            <h3 className="font-heading text-2xl tracking-tight">Limitations</h3>
          </div>
          <ul className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
            <li>Provides a qualitative, preliminary result only. GC/MS is the preferred confirmatory method.</li>
            <li>A negative result does not guarantee a drug-free specimen — the drug may be present below the 50 ng/mL cut-off level.</li>
            <li>For in vitro diagnostic use. Not for legal or forensic determination of drug use.</li>
            <li>Store at 2–30 °C. Do not freeze. Do not use after the expiration date.</li>
            <li>The used collector and cassette must be discarded according to local regulations.</li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Videos */}
      <motion.div
        className="mb-24 relative"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* weed scattered */}
        <div className="absolute -right-[4%] -top-[3%] opacity-[0.85] pointer-events-none hidden lg:block sketch-float">
          <Image src="/visualelements/weed.png" alt="" width={220} height={220}
            className="w-44 h-44 object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(35deg)' }} />
        </div>

        <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl tracking-tight mb-10 relative z-10">Videos</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <motion.div variants={fadeUp}>
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-3">How to use</p>
            <YoutubeEmbed videoId="" title="THC Parent Test — How to use" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-3">About the product</p>
            <YoutubeEmbed videoId="" title="THC Parent Test — About the product" />
          </motion.div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="border-t border-border pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="font-body text-muted-foreground text-sm">Available soon in Germany and across the EU.</p>
        <motion.a
          href="/#buy"
          className="px-8 py-4 bg-foreground text-background font-heading text-xl tracking-wide hover:bg-foreground/90 transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Where to buy →
        </motion.a>
      </motion.div>
    </main>
  );
}
