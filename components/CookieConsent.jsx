'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'jzeppelin-cookie-consent';
const EASE = [0.22, 1, 0.36, 1];

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  // Show the banner only on first visit (and only after mount, to avoid
  // SSR/CSR mismatch).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // slight delay so it doesn't appear the instant the page loads
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage may be blocked (private mode) — still show banner
      setVisible(true);
    }
  }, []);

  const save = (choice) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice, ts: Date.now() })
      );
      // Notify ConditionalAnalytics (and any other listeners) synchronously
      // so analytics loads immediately on Accept without a page reload.
      window.dispatchEvent(new Event('cookieConsentChange'));
    } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[100]"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <div className="bg-background border-2 border-foreground shadow-xl p-5 md:p-6 relative">
            <button
              onClick={() => save('dismissed')}
              aria-label="Dismiss"
              className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-9 h-9 border-2 border-foreground flex items-center justify-center">
                <Cookie size={18} />
              </div>
              <div>
                <h2 className="font-heading text-lg tracking-tight uppercase leading-tight">
                  Cookies
                </h2>
                <p className="font-body text-[11px] tracking-widest uppercase text-muted-foreground/70 mt-0.5">
                  Your choice matters
                </p>
              </div>
            </div>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
              We use essential cookies to make the site work and, with your
              consent, analytics cookies to understand how visitors use it.
              See our{' '}
              <Link
                href="/cookies"
                className="underline underline-offset-2 text-foreground hover:opacity-70 transition-opacity"
              >
                cookie policy
              </Link>
              {' '}and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-2 text-foreground hover:opacity-70 transition-opacity"
              >
                privacy policy
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <motion.button
                onClick={() => save('rejected')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 px-4 py-2.5 border-2 border-foreground text-foreground font-heading text-xs tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                Reject
              </motion.button>
              <motion.button
                onClick={() => save('accepted')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 px-4 py-2.5 bg-foreground text-background font-heading text-xs tracking-widest uppercase hover:bg-foreground/85 transition-colors"
              >
                Accept all
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
