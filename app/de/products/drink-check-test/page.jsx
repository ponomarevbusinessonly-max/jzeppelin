import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import DrinkCheckContent from '@/app/products/drink-check-test/DrinkCheckContent';

export const metadata = {
  title: 'Getränke-Test — K.-o.-Tropfen-Sticker-Test',
  description:
    'Sticker-Test für Getränke: erkennt GHB, Ketamin und Flunitrazepam in 1–3 Minuten. 6 Einmal-Sticker pro Packung. Diskret und in der Tasche tragbar.',
  openGraph: {
    title: 'Getränke-Test — K.-o.-Tropfen-Sticker-Test',
    description: '6 diskrete Sticker-Tests. Erkennt die häufigsten K.-o.-Substanzen direkt in deinem Drink.',
    url: 'https://jzeppelin.eu/de/products/drink-check-test',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/de/products/drink-check-test',
    languages: {
      en: 'https://jzeppelin.eu/products/drink-check-test',
      uk: 'https://jzeppelin.eu/uk/products/drink-check-test',
    },
  },
};

export default function DrinkCheckTestDe() {
  return (
    <LocaleProvider locale="de">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <DrinkCheckContent />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
