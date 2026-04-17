'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1];

export default function LegalPlaceholder({ title, subtitle, children }) {
  return (
    <main className="flex-1 w-full px-6 md:px-16 lg:px-24 pt-32 pb-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft size={14} />
        Back to home
      </Link>

      <motion.h1
        className="font-heading text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.95] mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {title}
      </motion.h1>

      {subtitle && (
        <motion.p
          className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mb-14"
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        className="border-2 border-foreground p-8 md:p-12 max-w-3xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
      >
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 w-10 h-10 border-2 border-foreground flex items-center justify-center">
            <FileText size={18} />
          </div>
          <div>
            <p className="font-heading text-xs tracking-widest uppercase text-muted-foreground/70 mb-1">
              Placeholder
            </p>
            <h2 className="font-heading text-2xl tracking-tight uppercase">
              Content coming soon
            </h2>
          </div>
        </div>

        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
          This page is reserved for the official <strong className="text-foreground">{title}</strong>.
          The final text will be drafted by our legal counsel and published here shortly.
        </p>

        {children}

        <p className="font-body text-xs text-muted-foreground/50 mt-8 pt-6 border-t border-foreground/10">
          Questions? Reach us at{' '}
          <a href="mailto:info@jzeppelin.eu" className="text-foreground underline underline-offset-2">
            info@jzeppelin.eu
          </a>
        </p>
      </motion.div>
    </main>
  );
}
