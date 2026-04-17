'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Word-split headline data
const HEADLINE = [
  ["Your", "Night,"],
  ["Your", "Rules"],
];

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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Three parallax layers — slow / mid / fast
  const slowY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const midY  = useTransform(scrollYProgress, [0, 1], [0, -130]);
  const fastY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Defer parallax decoratives until after client mount to avoid SSR/CSR
  // hydration mismatch from useScroll/useTransform producing different
  // transforms on server vs first client render.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

      {mounted && <>
      {/* ── Umbrella — bottom-right ── */}
      <motion.div
        className="absolute right-[-18%] bottom-[-1%] pointer-events-none hidden md:block"
        style={{ y: slowY }}
        initial={{ opacity: 0, x: 80, scale: 0.8 }}
        animate={{ opacity: 0.9, x: 0, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="sketch-float-slow">
          <Image
            src="/visualelements/umbrella1.png" alt=""
            width={700} height={700}
            className="w-[460px] h-[460px] lg:w-[580px] lg:h-[580px] object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(-30deg)' }}
          />
        </div>
      </motion.div>

      {/* Weed — right center */}
      <motion.div
        className="absolute right-[1%] top-[30%] pointer-events-none hidden xl:block"
        style={{ y: fastY }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.88, x: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      >
        <div className="drift-float" style={{ transform: 'rotate(-12deg)' }}>
          <Image src="/visualelements/weed.png" alt="" width={260} height={260}
            className="w-52 h-52 object-contain" style={{ mixBlendMode: 'multiply' }} />
        </div>
      </motion.div>

      {/* Smilepill — top left */}
      <motion.div
        className="absolute left-[4%] top-[10%] pointer-events-none hidden lg:block"
        style={{ y: midY }}
        initial={{ opacity: 0, y: -40, rotate: -20 }}
        animate={{ opacity: 0.82, y: 0, rotate: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <div className="sketch-float">
          <Image src="/visualelements/smilepill.png" alt="" width={155} height={155}
            className="w-32 h-32 lg:w-36 lg:h-36 object-contain" style={{ mixBlendMode: 'multiply' }} />
        </div>
      </motion.div>

      {/* Capsule — bottom right */}
      <motion.div
        className="absolute right-[7%] bottom-[14%] pointer-events-none hidden lg:block"
        style={{ y: midY }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
      >
        <div className="float-rotate">
          <Image src="/visualelements/capsule.png" alt="" width={150} height={150}
            className="w-32 h-32 lg:w-36 lg:h-36 object-contain"
            style={{ mixBlendMode: 'multiply', transform: 'rotate(25deg)' }} />
        </div>
      </motion.div>

      {/* Starpill — top right area */}
      <motion.div
        className="absolute right-[20%] top-[11%] pointer-events-none hidden md:block"
        style={{ y: midY }}
        initial={{ opacity: 0, scale: 0.7, rotate: -30 }}
        animate={{ opacity: 0.82, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      >
        <div className="sketch-float-alt">
          <Image src="/visualelements/starpill.png" alt="" width={120} height={120}
            className="w-24 h-24 lg:w-28 lg:h-28 object-contain" style={{ mixBlendMode: 'multiply' }} />
        </div>
      </motion.div>

      {/* Syringe — bottom center */}
      <motion.div
        className="absolute left-[32%] bottom-[5%] pointer-events-none hidden md:block"
        style={{ y: slowY }}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.80, x: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
      >
        <Image src="/visualelements/syringe.png" alt="" width={280} height={140}
          className="w-80 h-40 lg:w-96 lg:h-48 object-contain"
          style={{ mixBlendMode: 'multiply', transform: 'rotate(-8deg)' }} />
      </motion.div>

      {/* Alienpill — right mid */}
      <motion.div
        className="absolute right-[17%] top-[30%] pointer-events-none hidden md:block"
        style={{ y: fastY }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.82, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
      >
        <div className="sketch-float">
          <Image src="/visualelements/alienpill.png" alt="" width={125} height={125}
            className="w-24 h-24 lg:w-28 lg:h-28 object-contain" style={{ mixBlendMode: 'multiply' }} />
        </div>
      </motion.div>
      </>}

      {/* ── Main content ── */}
      <div className="w-full px-6 md:px-16 lg:px-24 py-20 md:py-0 relative z-10">
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-4xl">

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
                Spiked drinks happen. Bad trips happen. J.Zeppelin makes sure you know before it's too late — with fast, discreet tests you can use anywhere.
              </motion.p>
              <motion.div variants={itemVars}>
                <motion.a
                  href="#products"
                  className="inline-block mt-10 px-10 py-4 bg-foreground text-background font-heading text-2xl tracking-wide hover:bg-foreground/90 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  See our tests
                </motion.a>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
