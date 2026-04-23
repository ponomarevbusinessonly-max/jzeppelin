// Wraps all /de/* routes. Sets data-locale for potential CSS scoping,
// mirrors the /uk layout pattern. DE uses Latin glyphs only so the
// default Bebas Neue heading font works without overrides.
export default function DeLayout({ children }) {
  return (
    <div data-locale="de" lang="de">
      {children}
    </div>
  );
}
