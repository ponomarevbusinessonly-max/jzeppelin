'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import YoutubeEmbed from '@/components/YoutubeEmbed';
import { ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1];

// Word-split headline ("DRINK CHECK TEST" — single line)
const HEADLINE_WORDS = ["DRINK", "CHECK", "TEST"];
const headlineContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const wordVar = {
  hidden:  { y: "105%" },
  visible: { y: "0%", transition: { duration: 0.85, ease } },
};

// Generic stagger
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.8, ease } },
};

const steps = [
  { num: "01", title: "Stick it",       text: "Remove the release paper and stick the sticker onto the back of your mobile phone or another flat surface." },
  { num: "02", title: "Apply a drop",   text: "Apply a single drop of your drink to the test area — it should cover all 3 test spots." },
  { num: "03", title: "Wait 1–3 min",   text: "Wait until the test spots are completely dry. This takes 1 to 3 minutes." },
  { num: "04", title: "Read the result",text: "GHB or KET spot turns blue → positive. FLZ spot turns red-purple → positive. DO NOT DRINK if any spot changes color." },
];

const substances = [
  { name: "GHB", full: "Gamma-hydroxybutyric acid", result: "Spot turns BLUE",       note: "Colorless, odorless. One of the most common drink-spiking agents." },
  { name: "KET", full: "Ketamine HCl",              result: "Spot turns BLUE",       note: "Dissociative anesthetic. Used in powder or liquid form." },
  { name: "FLZ", full: "Flunitrazepam / Rohypnol",  result: "Spot turns RED-PURPLE", note: "Powerful benzodiazepine. Causes memory loss and sedation." },
];

const facts = [
  "Single-use sticker — discreet and pocket-sized",
  "Results in 1–3 minutes",
  "Works in cocktails, beer, wine, and non-alcoholic drinks",
  "6 tests per pack",
  "No lab equipment needed",
  "Anonymous use — no app or account required",
];

const limitations = [
  "Not suitable for milk products, creamy or oily beverages.",
  "Blue or red-purple colored drinks may produce a false positive result.",
  "Discard any suspect beverage immediately — do not taste it.",
  "For personal use and reference only. A positive result should never be used as the sole basis for determining the presence of illegal drugs.",
  "This is a personal safety aid, not a certified diagnostic device. If you feel unwell — seek help immediately regardless of the test result.",
];

export default function DrinkCheckContent() {
  return (
    <main className="flex-1 w-full px-6 md:px-16 lg:px-24 pt-32 pb-20 relative overflow-hidden">

      {/* ─── Decorative floating elements (Hero area) ─── */}
      {/* Martini — right side of hero */}
      <motion.div
        className="absolute top-[18%] right-[-2%] pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, scale: 0.7, rotate: 15 }}
        animate={{ opacity: 0.88, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease, delay: 0.4 }}
      >
        <div className="sketch-float-slow">
          <Image
            src="/visualelements/Martini.png" alt=""
            width={420} height={420}
            className="w-72 lg:w-96 h-auto object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(-8deg)' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[8%] right-[6%] pointer-events-none hidden lg:block z-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.55 }}
      >
        <div className="float-rotate">
          <Image
            src="/visualelements/capsule.png" alt=""
            width={130} height={130}
            className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(28deg)' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[8%] left-[40%] pointer-events-none hidden xl:block z-0"
        initial={{ opacity: 0, y: -30, rotate: -20 }}
        animate={{ opacity: 0.82, y: 0, rotate: 0 }}
        transition={{ duration: 1.0, ease, delay: 0.7 }}
      >
        <div className="sketch-float">
          <Image
            src="/visualelements/smilepill.png" alt=""
            width={120} height={120}
            className="w-24 h-24 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[55%] left-[5%] pointer-events-none hidden lg:block z-0"
        initial={{ opacity: 0, scale: 0.6, rotate: -40 }}
        animate={{ opacity: 0.82, scale: 1, rotate: 0 }}
        transition={{ duration: 1.0, ease, delay: 0.4 }}
      >
        <div className="sketch-float-alt">
          <Image
            src="/visualelements/starpill.png" alt=""
            width={110} height={110}
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[85%] right-[6%] pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 0.9, ease, delay: 0.6 }}
      >
        <div className="drift-float">
          <Image
            src="/visualelements/alienpill.png" alt=""
            width={120} height={120}
            className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[140%] left-[8%] pointer-events-none hidden lg:block z-0"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.85, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="sketch-float">
          <Image
            src="/visualelements/pill.png" alt=""
            width={130} height={130}
            className="w-24 h-24 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </motion.div>

      {/* ─── Page content (z-10 above decoratives) ─── */}
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
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="inline-block border border-border px-3 py-1 font-body text-xs text-muted-foreground tracking-widest uppercase mb-6 bg-background/70 backdrop-blur-sm"
            >
              6 sticker tests per pack
            </motion.div>

            {/* Word-split single-line headline */}
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
              A discreet beverage sticker test that detects the three most common spiking substances in 1–3 minutes — without altering your drink.
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
              src="/products/DrinkCheck.jpg"
              alt="Drink Check Test — J.Zeppelin"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 384px"
            />
          </motion.div>
        </div>

        {/* What it detects */}
        <div className="mb-24 relative">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
            className="font-heading text-4xl md:text-5xl tracking-tight mb-10"
          >
            What it detects
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {substances.map((s) => (
              <motion.div
                key={s.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease }}
                className="border-2 border-foreground p-6 bg-background"
              >
                <div className="font-heading text-3xl tracking-tight mb-1">{s.name}</div>
                <div className="font-body text-xs text-muted-foreground mb-1 uppercase tracking-wide">{s.full}</div>
                <div className="font-body text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">{s.result}</div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.note}</p>
              </motion.div>
            ))}
          </motion.div>
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
              <YoutubeEmbed videoId="" title="Drink Check Test — How to use" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-3">About the product</p>
              <YoutubeEmbed videoId="" title="Drink Check Test — About the product" />
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
