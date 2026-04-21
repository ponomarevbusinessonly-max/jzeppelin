'use client';

/**
 * Renders Vercel Analytics ONLY when the visitor has explicitly accepted
 * cookies. Reads the same localStorage key as CookieConsent.jsx.
 *
 * Behaviour:
 * - On mount: checks current consent value in localStorage.
 * - Listens for the custom 'cookieConsentChange' event dispatched by
 *   CookieConsent.jsx so analytics activates immediately when the user
 *   clicks "Accept all" without requiring a page reload.
 * - If consent is 'rejected', 'dismissed', or not yet set → nothing loaded.
 */

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';

const STORAGE_KEY = 'jzeppelin-cookie-consent';

function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw)?.choice ?? null;
  } catch {
    return null;
  }
}

export default function ConditionalAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // Initial check
    setAccepted(readConsent() === 'accepted');

    // React immediately when user makes a choice in the cookie banner
    const handler = () => setAccepted(readConsent() === 'accepted');
    window.addEventListener('cookieConsentChange', handler);
    return () => window.removeEventListener('cookieConsentChange', handler);
  }, []);

  if (!accepted) return null;
  return <Analytics />;
}
