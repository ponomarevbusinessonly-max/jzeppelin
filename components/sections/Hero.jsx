'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useDict } from '@/lib/i18n/LocaleProvider';

const headlineContainerVars = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const wordVars = {
  hidden:  { y: "105%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

// Subtitle + CTA stagger
const subVars = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.55 } },
};
const itemVars = {
  hidden:  { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const dict = useDict();
  const HEADLINE = dict.hero.headline;
  const heroRef = useRef(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Three parallax layers — slow / mid / fast
  const slowY = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, -60]);
  const midY  = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, -130]);
  const fastY = useTransform(scrollYProgress, [0, 1], shouldReduce ? [0, 0] : [0, -200]);

  // Defer parallax decoratives until after client mount to avoid SSR/CSR
  // hydration mismatch from useScroll/useTransform producing different
  // transforms on server vs first client render.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const EASE = [0.22, 1, 0.36, 1];

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

      {mounted && <>

      {/* ── Umbrella — repositioned to bottom-left ── */}
      <motion.div
        className="absolute left-[-4%] bottom-[-2%] pointer-events-none hidden md:block"
        style={{ y: slowY }}
        initial={{ opacity: 0, x: -60, scale: 0.8 }}
        animate={{ opacity: 0.85, x: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        <div className="sketch-float-slow">
          <Image
            src="/visualelements/umbrella1.png" alt=""
            width={700} height={700}
            className="w-[380px] h-[380px] lg:w-[460px] lg:h-[460px] object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(30deg) scaleX(-1)' }}
          />
        </div>
      </motion.div>

      {/* Smilepill — top left (unchanged) */}
      <motion.div
        className="absolute left-[4%] top-[10%] pointer-events-none hidden lg:block"
        style={{ y: midY }}
        initial={{ opacity: 0, y: -40, rotate: -20 }}
        animate={{ opacity: 0.82, y: 0, rotate: 0 }}
        transition={{ duration: 1.0, ease: EASE, delay: 0.5 }}
      >
        <div className="sketch-float">
          <Image src="/visualelements/smilepill.png" alt="" width={155} height={155}
            className="w-32 h-32 lg:w-36 lg:h-36 object-contain" style={{ mixBlendMode: 'multiply' }} />
        </div>
      </motion.div>

      {/* Starpill — top right, orbits the card fan */}
      <motion.div
        className="absolute right-[14%] top-[6%] pointer-events-none hidden md:block"
        style={{ y: midY }}
        initial={{ opacity: 0, scale: 0.7, rotate: -30 }}
        animate={{ opacity: 0.75, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 1.2 }}
      >
        <div className="sketch-float-alt">
          <Image src="/visualelements/starpill.png" alt="" width={100} height={100}
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain" style={{ mixBlendMode: 'multiply' }} />
        </div>
      </motion.div>

      {/* Capsule — bottom right, peeks from behind card fan */}
      <motion.div
        className="absolute right-[3%] bottom-[8%] pointer-events-none hidden lg:block"
        style={{ y: slowY }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 1.3 }}
      >
        <div className="float-rotate">
          <Image src="/visualelements/capsule.png" alt="" width={100} height={100}
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(25deg)' }} />
        </div>
      </motion.div>

      {/* Syringe — bottom center (unchanged) */}
      <motion.div
        className="absolute left-[32%] bottom-[5%] pointer-events-none hidden md:block"
        style={{ y: slowY }}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.80, x: 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.75 }}
      >
        <Image src="/visualelements/syringe.png" alt="" width={280} height={140}
          className="w-80 h-40 lg:w-96 lg:h-48 object-contain"
          style={{ mixBlendMode: 'multiply', transform: 'rotate(-8deg)' }} />
      </motion.div>

      {/* ── Fanned product card stack ── */}
      {/* Back-left: THC Parent Test */}
      <motion.div
        className="absolute hidden md:block pointer-events-auto"
        style={{
          y: slowY,
          right: '43%', top: '16%',
          width: 200,
          zIndex: 1,
          originY: 1,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
        initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 80, rotate: -22, scale: 0.88 }}
        animate={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0, rotate: -14, scale: 1 }}
        transition={{ duration: 1.0, ease: EASE, delay: 0.75 }}
        whileHover={{
          rotate: 0, scale: 1.06, y: -10, zIndex: 10,
          transition: { type: 'spring', stiffness: 260, damping: 22 }
        }}
      >
        <div
          className="bg-white ring-1 ring-black/5 p-1.5"
          style={{
            boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 20px -4px rgba(0,0,0,0.10), 0 30px 60px -20px rgba(0,0,0,0.20)',
          }}
        >
          <Image
            src="/products/THCParent.jpg"
            alt="THC Parent Test"
            width={520} height={640}
            sizes="(min-width:1280px) 220px, 180px"
            quality={90}
            className="w-full h-auto block"
          />
        </div>
      </motion.div>

      {/* Back-right: Multi-Drug Test */}
      <motion.div
        className="absolute hidden md:block pointer-events-auto"
        style={{
          y: fastY,
          right: '5%', top: '26%',
          width: 220,
          zIndex: 2,
          originY: 1,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
        initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 80, rotate: 20, scale: 0.88 }}
        animate={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 12, scale: 1 }}
        transition={{ duration: 1.0, ease: EASE, delay: 1.05 }}
        whileHover={{
          rotate: 0, scale: 1.06, y: -10, zIndex: 10,
          transition: { type: 'spring', stiffness: 260, damping: 22 }
        }}
      >
        <div
          className="bg-white ring-1 ring-black/5 p-1.5"
          style={{
            boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 8px 20px -4px rgba(0,0,0,0.10), 0 30px 60px -20px rgba(0,0,0,0.20)',
          }}
        >
          <Image
            src="/products/MultiTest.jpg"
            alt="Multi-Drug Test"
            width={520} height={640}
            sizes="(min-width:1280px) 240px, 200px"
            quality={90}
            className="w-full h-auto block"
          />
        </div>
      </motion.div>

      {/* Front-center: Drink Check Test (hero card) */}
      <motion.div
        className="absolute hidden md:block pointer-events-auto"
        style={{
          y: midY,
          right: '22%', top: '8%',
          width: 280,
          zIndex: 3,
          originY: 1,
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
        initial={shouldReduce ? { opacity: 1 } : { opacity: 0, y: 80, rotate: -8, scale: 0.88 }}
        animate={shouldReduce
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: [0, -6, 0],
              rotate: 2,
              scale: 1,
            }}
        transition={shouldReduce
          ? {}
          : {
              opacity:  { duration: 1.0, ease: EASE, delay: 0.90 },
              rotate:   { duration: 1.0, ease: EASE, delay: 0.90 },
              scale:    { duration: 1.0, ease: EASE, delay: 0.90 },
              y: {
                duration: 1.0,
                ease: EASE,
                delay: 0.90,
                // after entrance, idle float
                times: [0, 0.5, 1],
              },
            }}
        whileHover={{
          rotate: 0, scale: 1.06, y: -12, zIndex: 10,
          transition: { type: 'spring', stiffness: 260, damping: 22 }
        }}
      >
        <div
          className="bg-white ring-1 ring-black/5 p-1.5"
          style={{
            boxShadow: '0 2px 4px rgba(0,0,0,0.06), 0 12px 30px -6px rgba(0,0,0,0.12), 0 40px 80px -24px rgba(0,0,0,0.22)',
          }}
        >
          <Image
            src="/products/DrinkCheck.jpg"
            alt="Drink Check Test"
            width={520} height={640}
            sizes="(min-width:1280px) 320px, 260px"
            quality={90}
            className="w-full h-auto block"
          />
        </div>
      </motion.div>

      </>}

      {/* ── Main content ── */}
      <div className="w-full px-6 md:px-16 lg:px-24 py-20 md:py-0 relative z-10">
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-[42rem] xl:max-w-[50rem]">

            {/* Word-split headline */}
            <motion.h1
              className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] leading-[0.9] tracking-tight text-foreground"
              variants={headlineContainerVars}
              initial="hidden"
              animate="visible"
            >
              {HEADLINE.map((line, li) => (
                <span key={li} className="block">
                  {line.map((word, wi) => (
                    <span key={wi} className="inline-block overflow-hidden mr-[0.22em] last:mr-0">
                      <motion.span variants={wordVars} className="inline-block">
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </span>
              ))}
            </motion.h1>

            {/* Subtitle + CTA — staggered blur-fade */}
            <motion.div variants={subVars} initial="hidden" animate="visible">
              <motion.p
                variants={itemVars}
                className="mt-6 text-lg md:text-xl text-muted-foreground font-body font-light max-w-lg leading-relaxed"
              >
                {dict.hero.subtitle}
              </motion.p>
              <motion.div variants={itemVars}>
                <motion.a
                  href="#products"
                  className="inline-block mt-10 px-10 py-4 bg-foreground text-background font-heading text-2xl tracking-wide hover:bg-foreground/90 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {dict.hero.cta}
                </motion.a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
