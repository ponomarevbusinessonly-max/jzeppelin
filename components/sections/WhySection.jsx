'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDict } from '@/lib/i18n/LocaleProvider';

export default function WhySection() {
  const dict = useDict();
  const features = dict.why.features;
  return (
    <section id="why" className="py-28 md:py-36 relative overflow-hidden">

      {/* Decorative elements — all opacity 0.8+ */}
      <div className="absolute right-[4%] top-[10%] opacity-[0.82] sketch-float-slow pointer-events-none hidden lg:block" style={{ transform: 'rotate(-10deg)' }}>
        <Image src="/visualelements/weed2.png" alt="" width={220} height={220}
          className="w-48 h-48 object-contain"
          style={{ mixBlendMode: 'multiply', filter: 'invert(1)' }} />
      </div>

      <div className="absolute right-[12%] bottom-[12%] opacity-[0.80] sketch-float pointer-events-none hidden xl:block">
        <Image src="/visualelements/pill2.png" alt="" width={130} height={130}
          className="w-28 h-28 object-contain" style={{ mixBlendMode: 'multiply' }} />
      </div>

      <div className="absolute left-[2%] bottom-[20%] opacity-[0.80] sketch-float-alt pointer-events-none hidden lg:block" style={{ transform: 'rotate(15deg)' }}>
        <Image src="/visualelements/syringe.png" alt="" width={240} height={120}
          className="w-56 h-28 object-contain" style={{ mixBlendMode: 'multiply' }} />
      </div>

      <div className="w-full px-6 md:px-16 lg:px-24 relative z-10">

        {/* Heading */}
        <motion.div
          className="max-w-2xl mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h2
            className="font-heading text-5xl md:text-7xl tracking-tight mb-8"
            variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {dict.why.heading}
          </motion.h2>
          <motion.p
            className="font-body text-lg md:text-xl text-foreground font-medium leading-snug mb-6"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {dict.why.lead}
          </motion.p>
          <motion.p
            className="font-body text-base text-muted-foreground leading-relaxed mb-4"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {dict.why.body1}
          </motion.p>
          <motion.p
            className="font-body text-base text-muted-foreground leading-relaxed"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {dict.why.body2}
          </motion.p>
        </motion.div>

        {/* Feature boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border border-border">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              className="border-border p-8 md:p-10 bg-background group hover:bg-foreground/[0.03] transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.10 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <p className="font-heading text-2xl md:text-3xl tracking-tight mb-2">
                {f.label}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          className="mt-10 text-xs text-muted-foreground/50 font-body max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {dict.why.disclaimer}
        </motion.p>

      </div>
    </section>
  );
}
