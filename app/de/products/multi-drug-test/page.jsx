import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import MultiDrugContent from '@/app/products/multi-drug-test/MultiDrugContent';

export const metadata = {
  title: 'Multi-Drogen-Test — 9-Panel-Speicheltest',
  description:
    '9-Panel-Speichelschnelltest, der OPI, MET, BZO, COC, AMP, MDMA, BUP, MTD und THC erkennt. Ergebnis in 3–10 Minuten. CE IVD.',
  openGraph: {
    title: 'Multi-Drogen-Test — 9-Panel-Speicheltest',
    description: 'Nicht-invasiver Speicheltest. Ergebnis binnen Minuten. Kein Labor nötig.',
    url: 'https://jzeppelin.eu/de/products/multi-drug-test',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/de/products/multi-drug-test',
    languages: {
      en: 'https://jzeppelin.eu/products/multi-drug-test',
      uk: 'https://jzeppelin.eu/uk/products/multi-drug-test',
    },
  },
};

export default function MultiDrugTestDe() {
  return (
    <LocaleProvider locale="de">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <MultiDrugContent />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
