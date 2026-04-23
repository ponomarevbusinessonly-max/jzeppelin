import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ThcParentContent from '@/app/products/thc-parent-test/ThcParentContent';

export const metadata = {
  title: 'Aktiv-THC-Test — Δ9-THC-Speichelnachweis',
  description:
    'J.Zeppelin-Test erkennt Δ9-THC (Wirksubstanz) im Speichel — nicht den THC-COOH-Metaboliten. Cut-off 50 ng/mL. Ergebnis in 5 Minuten. CE IVD.',
  openGraph: {
    title: 'Aktiv-THC-Test — Δ9-THC-Speichelnachweis',
    description: 'Erkennt direkt Δ9-THC, keine alten Metaboliten. Zeigt aktuellen Konsum.',
    url: 'https://jzeppelin.eu/de/products/thc-parent-test',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/de/products/thc-parent-test',
    languages: {
      en: 'https://jzeppelin.eu/products/thc-parent-test',
      uk: 'https://jzeppelin.eu/uk/products/thc-parent-test',
    },
  },
};

export default function ThcParentTestDe() {
  return (
    <LocaleProvider locale="de">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <ThcParentContent />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
