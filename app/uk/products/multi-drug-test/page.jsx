import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import MultiDrugContent from '@/app/products/multi-drug-test/MultiDrugContent';

export const metadata = {
  title: 'Мульти-тест — 9-панельний тест слини',
  description:
    'Тест J.Zeppelin Multi-Drug визначає 9 речовин у слині: OPI, MET, BZO, COC, AMP, MDMA, BUP, MTD, THC. Результат за 3–10 хвилин. CE IVD.',
  openGraph: {
    title: 'Мульти-тест — 9-панельний тест слини',
    description: 'Комплексний тест слини для одночасного визначення 9 класів речовин. Результат за 3–10 хвилин.',
    url: 'https://jzeppelin.eu/uk/products/multi-drug-test',
    locale: 'uk_UA',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/uk/products/multi-drug-test',
    languages: { en: 'https://jzeppelin.eu/products/multi-drug-test' },
  },
};

export default function MultiDrugTestUk() {
  return (
    <LocaleProvider locale="uk">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <MultiDrugContent />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
