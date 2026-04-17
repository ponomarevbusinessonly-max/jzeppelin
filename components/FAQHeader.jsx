'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

const FAQ_LETTERS = ['F', 'A', 'Q'];

const letterContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const letterVar = {
  hidden:  { y: '105%' },
  visible: { y: '0%', transition: { duration: 0.9, ease: EASE } },
};

export default function FAQHeader() {
  return (
    <>
      <motion.h1
        className="font-heading text-7xl sm:text-8xl md:text-[10rem] tracking-tight leading-[0.9] mb-4"
        variants={letterContainer}
        initial="hidden"
        animate="visible"
      >
        {FAQ_LETTERS.map((ch, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span variants={letterVar} className="inline-block">
              {ch}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.p
        className="font-body text-base text-muted-foreground font-light mb-14 max-w-lg"
        initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.85, delay: 0.5, ease: EASE }}
      >
        Everything you need to know about J.Zeppelin tests and how to use them.
      </motion.p>
    </>
  );
}
