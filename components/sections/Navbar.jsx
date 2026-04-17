'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS = [
  { label: "Drink Check Test", href: "/products/drink-check-test" },
  { label: "Multi-Drug Test",  href: "/products/multi-drug-test" },
  { label: "THC Parent Test",  href: "/products/thc-parent-test" },
];

const links = [
  { label: "Products", href: "/#products", dropdown: PRODUCTS },
  { label: "Why", href: "/#why" },
  { label: "Buy", href: "/#buy" },
  { label: "Map", href: "/#map" },
  { label: "AI Analysis ✦", href: "/ai-analysis" },
  { label: "FAQ", href: "/faq" },
];

const languages = [
  { code: "EN", label: "English" },
  { code: "DE", label: "Deutsch" },
  { code: "FR", label: "Français" },
  { code: "RU", label: "Русский" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const handler = () => setLangOpen(false);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [langOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
    >
      <div className="w-full px-6 md:px-16 lg:px-24 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="J.Zeppelin"
            height={61}
            width={178}
            className="h-[61px] w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop: nav + language picker */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-40 group-hover:opacity-100 transition-opacity mt-px">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                {/* Dropdown */}
                <div className="absolute left-0 top-full pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-150">
                  <motion.div
                    className="bg-background border border-border shadow-md min-w-[180px] py-1"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 font-body text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              </div>
            ) : (
              <motion.div key={link.label} whileHover={{ x: 2 }} transition={{ duration: 0.15 }}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          )}

          <div className="w-px h-4 bg-border" />

          {/* Language picker */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe size={14} />
              <span>{activeLang}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  className="absolute right-0 top-full mt-2 bg-background border border-border shadow-md min-w-[120px] py-1"
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setActiveLang(lang.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 font-body text-sm transition-colors hover:bg-secondary ${
                        activeLang === lang.code ? 'text-foreground font-medium' : 'text-muted-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: lang + menu button */}
        <div className="md:hidden flex items-center gap-3">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 font-body text-sm text-muted-foreground p-1"
            >
              <Globe size={15} />
              <span>{activeLang}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  className="absolute right-0 top-full mt-2 bg-background border border-border shadow-md min-w-[120px] py-1 z-50"
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setActiveLang(lang.code); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 font-body text-sm transition-colors hover:bg-secondary ${
                        activeLang === lang.code ? 'text-foreground font-medium' : 'text-muted-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-background border-b border-border px-6 pb-6 pt-2 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 pb-1 border-l border-border ml-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 font-body text-xs text-muted-foreground/70 hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
