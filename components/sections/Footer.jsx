import React from 'react';
import Link from 'next/link';

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Why J.Zeppelin", href: "/#why" },
  { label: "Where to Buy", href: "/#buy" },
  { label: "Incident Map", href: "/#map" },
  { label: "FAQ", href: "/faq" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Right of Withdrawal", href: "/withdrawal" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Imprint", href: "/imprint" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12">
          {/* Logo & Tagline */}
          <div className="max-w-sm">
            <h2 className="font-heading text-4xl tracking-tight">J.ZEPPELIN</h2>
            <p className="font-body text-sm text-background/50 mt-3 font-light leading-relaxed">
              He checks so you don&apos;t have to.
            </p>
          </div>

          {/* Explore */}
          <nav>
            <p className="font-heading text-xs tracking-widest uppercase text-background/40 mb-4">
              Explore
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
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
              Legal
            </p>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
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
            EU Importer: UcanDrive GmbH, EMittelstr. 5-5A, 12529 Schönefeld, Germany
          </p>
          <p className="font-body text-xs text-background/30 mt-2">
            Non-IVD consumer product. For personal use only.
          </p>
          <p className="font-body text-xs text-background/20 mt-4">
            &copy; {new Date().getFullYear()} J.Zeppelin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
