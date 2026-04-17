'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function WhereToBuy() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="buy" className="py-28 md:py-36 border-t border-border">
      <div className="w-full px-6 md:px-16 lg:px-24">

        <motion.h2
          className="font-heading text-5xl md:text-7xl tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease }}
        >
          Where to Buy
        </motion.h2>

        <motion.p
          className="font-body text-lg text-muted-foreground font-light mb-12 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
        >
          Coming soon in Germany and across the EU.
        </motion.p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.p
              key="thanks"
              className="font-body text-foreground text-lg"
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              Thank you. We&apos;ll let you know.
            </motion.p>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease, delay: 0.2 }}
              exit={{ opacity: 0 }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3.5 border border-border bg-transparent font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
              />
              <motion.button
                type="submit"
                className="px-8 py-3.5 bg-foreground text-background font-heading text-xl tracking-wide hover:bg-foreground/90 transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
              >
                Notify me
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
