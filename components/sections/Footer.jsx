import React from 'react';

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Why J.Zeppelin", href: "/#why" },
  { label: "Where to Buy", href: "/#buy" },
  { label: "Incident Map", href: "/#map" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo & Tagline */}
          <div className="max-w-sm">
            <h2 className="font-heading text-4xl tracking-tight">J.ZEPPELIN</h2>
            <p className="font-body text-sm text-background/50 mt-3 font-light leading-relaxed">
              He checks so you don&apos;t have to.
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-background/60 hover:text-background transition-colors"
              >
                {link.label}
              </a>
            ))}
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
