'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Globally:
 *  - On any page load with a #hash, smoothly scroll to that element and
 *    immediately strip the #hash from the URL so /#buy → /
 *  - On any in-page anchor click (e.g. <a href="#products">) intercept,
 *    smooth-scroll, and strip the hash.
 *
 * This lets the rest of the codebase keep using plain <a href="/#buy"> while
 * the visible URL stays clean.
 */
export default function HashScrollCleaner() {
  const pathname = usePathname();

  // 1. Strip #hash on initial load / after navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.replaceState(null, '', pathname || '/');
    });
  }, [pathname]);

  // 2. Intercept clicks on any in-page anchor link
  useEffect(() => {
    const handler = (e) => {
      // Only plain left-click without modifier keys
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!href) return;

      // Only handle links targeting current page + a hash
      // forms: "#id", "/#id", "<currentPath>#id"
      let id = null;
      if (href.startsWith('#')) {
        id = href.slice(1);
      } else if (href.startsWith('/#') && (pathname === '/' || pathname === '')) {
        id = href.slice(2);
      } else if (href.startsWith(pathname + '#')) {
        id = href.slice(pathname.length + 1);
      }
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.replaceState(null, '', pathname || '/');
    };

    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [pathname]);

  return null;
}
