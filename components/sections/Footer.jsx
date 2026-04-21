'use client';

import React from 'react';
import Link from 'next/link';
import { useDict } from '@/lib/i18n/LocaleProvider';

export default function Footer() {
  const dict = useDict();
  const f = dict.footer;

  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12">
          {/* Logo & Tagline */}
          <div className="max-w-sm">
            <h2 className="font-heading text-4xl tracking-tight">J.ZEPPELIN</h2>
            <p className="font-body text-sm text-background/50 mt-3 font-light leading-relaxed">
              {f.tagline}
            </p>
          </div>

          {/* Explore */}
          <nav>
            <p className="font-heading text-xs tracking-widest uppercase text-background/40 mb-4">
              {f.explore}
            </p>
            <ul className="flex flex-col gap-2.5">
              {f.navLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <p className="font-heading text-xs tracking-widest uppercase text-background/40 mb-4">
              {f.legal}
            </p>
            <ul className="flex flex-col gap-2.5">
              {f.legalLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom info */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <p className="font-body text-xs text-background/40 leading-relaxed">
            {f.importer}
          </p>
          <p className="font-body text-xs text-background/30 mt-2">
            {f.disclaimer}
          </p>
          <p className="font-body text-xs text-background/20 mt-4">
            &copy; {new Date().getFullYear()} J.Zeppelin. {f.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
