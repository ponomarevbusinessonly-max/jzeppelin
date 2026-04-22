// Wraps all /uk/* routes so CSS can scope Ukrainian-specific overrides
// (see globals.css — [data-locale="uk"] swaps the heading font to Oswald
// to avoid the Bebas Neue / Cyrillic-fallback mismatch).
export default function UkLayout({ children }) {
  return (
    <div data-locale="uk" lang="uk">
      {children}
    </div>
  );
}
