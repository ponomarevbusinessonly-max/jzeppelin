'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import { ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

// Word-split headline ("MULTI-DRUG TEST" — single line)
const HEADLINE_WORDS = ["MULTI-DRUG", "TEST"];
const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
};
const wordVar = {
  hidden:  { y: "105%" },
  visible: { y: "0%", transition: { duration: 0.85, ease } },
};

// Generic stagger
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.8, ease } },
};

const steps = [
  {
    num: "01",
    title: "Swab your gums",
    text: "Remove the device cap. Place the absorbent tip against your upper and lower jaws. Actively swab around the gums on both sides of your mouth 10–15 times to saturate the collector.",
  },
  {
    num: "02",
    title: "Collect the fluid",
    text: "Insert the absorbent tip into the device and hold it until oral fluid flows into the test windows (~60 seconds). Remove the collector and start the timer.",
  },
  {
    num: "03",
    title: "Read at 3–10 min",
    text: "Place on a flat surface. Read at 3 minutes. If all lines are visible at 3 min → result is ready. If any line is missing at 3 min → wait and re-read at 10 minutes. Do not read after 15 minutes.",
  },
  {
    num: "04",
    title: "Interpret result",
    text: "Two lines (C + T) = NEGATIVE for that substance. One line in C only = POSITIVE. No line in C = INVALID. Alcohol strip (if present): read color at 3–5 minutes against the chart.",
  },
];

const panels = [
  { code: "OPI",  name: "Opiates",          cutoff: "40 ng/mL" },
  { code: "MET",  name: "Methamphetamine",  cutoff: "50 ng/mL" },
  { code: "BZO",  name: "Benzodiazepines",  cutoff: "30 ng/mL" },
  { code: "COC",  name: "Cocaine",          cutoff: "20 ng/mL" },
  { code: "AMP",  name: "Amphetamine",      cutoff: "40 ng/mL" },
  { code: "MDMA", name: "MDMA / Ecstasy",   cutoff: "50 ng/mL" },
  { code: "BUP",  name: "Buprenorphine",    cutoff: "10 ng/mL" },
  { code: "MTD",  name: "Methadone",        cutoff: "30 ng/mL" },
  { code: "THC",  name: "Cannabis (THC)",   cutoff: "50 ng/mL" },
];

const facts = [
  "9 substance panels in a single test",
  "Results in 3–10 minutes",
  "Non-invasive oral fluid (saliva) collection",
  "Includes alcohol strip indicator (0.02% cut-off)",
  "CE-marked · IVD · Hangzhou AllTest Biotech",
  "EC Representative: MedNet EC-REP GmbH, Münster, Germany",
];

const limitations = [
  "Provides a qualitative, preliminary result only. GC/MS is the preferred confirmatory method.",
  "A negative result does not guarantee a drug-free specimen — a drug may be present below the cut-off level.",
  "The alcohol strip is highly sensitive to alcohol vapors in the air (e.g. disinfectants, perfumes). Test away from such environments.",
  "For in vitro diagnostic use. Not for legal or forensic determination of drug use.",
  "Do not use after the expiration date. Store in sealed pouch at 2–30 °C. Do not freeze.",
];

export default function MultiDrugContent() {
  return (
    <main className="flex-1 w-full px-6 md:px-16 lg:px-24 pt-32 pb-20 relative overflow-hidden">

      {/* ─── Decorative floating elements ─── */}

      {/* Umbrella2 — top left of hero, large */}
      <motion.div
        className="absolute top-[5%] left-[-3%] pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, scale: 0.7, rotate: -25 }}
        animate={{ opacity: 0.88, scale: 1, rotate: 0 }}
        transition={{ duration: 1.3, ease, delay: 0.25 }}
      >
        <div className="sketch-float-slow">
          <Image
            src="/visualelements/umbrella2.png" alt=""
            width={520} height={520}
            className="w-72 lg:w-[28rem] h-auto object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(20deg)' }}
          />
        </div>
      </motion.div>

      {/* Capsule — top right of hero, big */}
      <motion.div
        className="absolute top-[8%] right-[-2%] pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
        animate={{ opacity: 0.88, scale: 1, rotate: 0 }}
        transition={{ duration: 1.0, ease, delay: 0.4 }}
      >
        <div className="float-rotate">
          <Image
            src="/visualelements/capsule.png" alt=""
            width={260} height={260}
            className="w-44 h-44 lg:w-56 lg:h-56 object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(35deg)' }}
          />
        </div>
      </motion.div>

      {/* Smilepill — between hero and panels, large */}
      <motion.div
        className="absolute top-[42%] left-[3%] pointer-events-none hidden lg:block z-0"
        initial={{ opacity: 0, y: 30, rotate: -20 }}
        whileInView={{ opacity: 0.85, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.0, ease }}
      >
        <div className="sketch-float">
          <Image
            src="/visualelements/smilepill.png" alt=""
            width={220} height={220}
            className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </motion.div>

      {/* Starpill — right of panels */}
      <motion.div
        className="absolute top-[56%] right-[2%] pointer-events-none hidden lg:block z-0"
        initial={{ opacity: 0, scale: 0.5, rotate: -40 }}
        whileInView={{ opacity: 0.85, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.0, ease }}
      >
        <div className="sketch-float-alt">
          <Image
            src="/visualelements/starpill.png" alt=""
            width={210} height={210}
            className="w-36 h-36 lg:w-44 lg:h-44 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </motion.div>

      {/* Pill — left of how-to-use */}
      <motion.div
        className="absolute top-[78%] left-[-2%] pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.88, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="drift-float">
          <Image
            src="/visualelements/pill.png" alt=""
            width={240} height={240}
            className="w-40 h-40 lg:w-52 lg:h-52 object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(-15deg)' }}
          />
        </div>
      </motion.div>

      {/* Pill2 — right between sections */}
      <motion.div
        className="absolute top-[110%] right-[-1%] pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 0.85, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="sketch-float">
          <Image
            src="/visualelements/pill2.png" alt=""
            width={220} height={220}
            className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(18deg)' }}
          />
        </div>
      </motion.div>

      {/* Syringe — lower section, big */}
      <motion.div
        className="absolute top-[135%] left-[5%] pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 0.85, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.0, ease }}
      >
        <Image
          src="/visualelements/syringe.png" alt=""
          width={420} height={210}
          className="w-72 lg:w-96 h-auto object-contain"
          style={{ mixBlendMode: 'multiply', transform: 'rotate(-12deg)' }}
        />
      </motion.div>

      {/* Alienpill — right lower */}
      <motion.div
        className="absolute top-[155%] right-[3%] pointer-events-none hidden lg:block z-0"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.88, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="sketch-float-alt">
          <Image
            src="/visualelements/alienpill.png" alt=""
            width={200} height={200}
            className="w-36 h-36 lg:w-44 lg:h-44 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </motion.div>

      {/* Weed2 — bottom left */}
      <motion.div
        className="absolute top-[180%] left-[2%] pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, rotate: -25, scale: 0.7 }}
        whileInView={{ opacity: 0.85, rotate: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.1, ease }}
      >
        <div className="drift-float">
          <Image
            src="/visualelements/weed2.png" alt=""
            width={280} height={280}
            className="w-52 h-52 lg:w-64 lg:h-64 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </motion.div>

      {/* Umbrella1 — bottom right */}
      <motion.div
        className="absolute top-[195%] right-[-3%] pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, scale: 0.7, rotate: 20 }}
        whileInView={{ opacity: 0.88, scale: 1, rotate: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease }}
      >
        <div className="sketch-float-slow">
          <Image
            src="/visualelements/umbrella1.png" alt=""
            width={420} height={420}
            className="w-72 lg:w-96 h-auto object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(-25deg)' }}
          />
        </div>
      </motion.div>

      {/* ─── Page content ─── */}
      <div className="relative z-10">

        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <Link href="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft size={14} />
            Back to home
          </Link>
        </motion.div>

        {/* Hero */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-24">
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="inline-block border border-border px-3 py-1 font-body text-xs text-muted-foreground tracking-widest uppercase mb-6 bg-background/70 backdrop-blur-sm"
            >
              9-panel oral fluid test · CE IVD
            </motion.div>

            {/* Single-line word-split headline */}
            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[0.95] mb-8 whitespace-nowrap"
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
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.85, ease, delay: 0.85 }}
              className="font-body text-lg text-muted-foreground font-light max-w-md leading-relaxed"
            >
              A rapid oral fluid immunoassay that simultaneously screens for 9 substance classes — stimulants, opioids, benzodiazepines, MDMA and cannabis. Non-invasive, no lab needed.
            </motion.p>
          </div>

          {/* Product photo */}
          <motion.div
            className="w-full lg:w-80 xl:w-96 aspect-square bg-muted border border-border overflow-hidden flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, ease, delay: 0.45 }}
          >
            <Image
              src="/products/MultiTest.jpg"
              alt="Multi-Drug Rapid Test — J.Zeppelin"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          </motion.div>
        </div>

        {/* 9 Panels */}
        <div className="mb-24 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
            className="font-heading text-4xl md:text-5xl tracking-tight mb-10"
          >
            9 Panels
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="border-2 border-foreground bg-background"
          >
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 divide-x-2 divide-foreground">
              {panels.map((p, i) => (
                <div key={p.code} className={`p-4 flex flex-col items-center text-center ${i % 2 === 0 ? 'bg-foreground/[0.03]' : 'bg-background'}`}>
                  <span className="font-heading text-2xl tracking-tight">{p.code}</span>
                  <span className="font-body text-xs text-muted-foreground mt-1 leading-tight">{p.name}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 divide-x-2 divide-foreground border-t-2 border-foreground">
              {panels.map((p, i) => (
                <div key={p.code + '-cutoff'} className={`px-4 py-2 text-center ${i % 2 === 0 ? 'bg-foreground/[0.03]' : 'bg-background'}`}>
                  <span className="font-body text-xs text-muted-foreground/60">{p.cutoff}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <p className="mt-3 text-xs text-muted-foreground/50 font-body">
            Cut-off values in ng/mL oral fluid.
          </p>
        </div>

        {/* How to use */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
            className="font-heading text-4xl md:text-5xl tracking-tight mb-10"
          >
            How to use
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease }}
                className="border border-border p-6 bg-background"
              >
                <div className="font-heading text-5xl text-muted-foreground/20 mb-3">{step.num}</div>
                <h3 className="font-heading text-2xl tracking-tight mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-4 text-xs text-muted-foreground/50 font-body max-w-lg">
            ⚠ Do not eat, drink, chew gum or use tobacco products for at least 10 minutes before collection. Store at 15–30 °C before use.
          </p>
        </div>

        {/* Key facts + Limitations */}
        <div className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease }}
          >
            <h2 className="font-heading text-4xl md:text-5xl tracking-tight mb-8">Key facts</h2>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              {facts.map((fact) => (
                <motion.li
                  key={fact}
                  variants={fadeUp}
                  className="flex items-start gap-3 font-body text-sm"
                >
                  <CheckCircle size={15} className="mt-0.5 flex-shrink-0 text-foreground" />
                  {fact}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease }}
            className="border border-border p-8 bg-background"
          >
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle size={18} className="flex-shrink-0 mt-0.5" />
              <h3 className="font-heading text-2xl tracking-tight">Limitations</h3>
            </div>
            <ul className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
              {limitations.map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Videos */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
            className="font-heading text-4xl md:text-5xl tracking-tight mb-10"
          >
            Videos
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeUp}>
              <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-3">How to use</p>
              <YoutubeEmbed videoId="" title="Multi-Drug Test — How to use" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-3">About the product</p>
              <YoutubeEmbed videoId="" title="Multi-Drug Test — About the product" />
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
          className="border-t border-border pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="font-body text-muted-foreground text-sm">Available soon in Germany and across the EU.</p>
          <motion.a
            href="/#buy"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 bg-foreground text-background font-heading text-xl tracking-wide hover:bg-foreground/90 transition-colors"
          >
            Where to buy →
          </motion.a>
        </motion.div>

      </div>
    </main>
  );
}
