import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ThcParentContent from '@/app/products/thc-parent-test/ThcParentContent';

export const metadata = {
  title: 'Тест на активний THC — виявлення Δ9-THC у слині',
  description:
    'Тест J.Zeppelin виявляє Δ9-THC (активну речовину) у слині — не метаболіт THC-COOH. Поріг 50 нг/мл. Результат за 5 хвилин. CE IVD.',
  openGraph: {
    title: 'Тест на активний THC — виявлення Δ9-THC у слині',
    description: 'Виявляє безпосередньо Δ9-THC, а не старі метаболіти. Відображає нещодавнє вживання.',
    url: 'https://jzeppelin.eu/uk/products/thc-parent-test',
    locale: 'uk_UA',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/uk/products/thc-parent-test',
    languages: { en: 'https://jzeppelin.eu/products/thc-parent-test' },
  },
};

export default function ThcParentTestUk() {
  return (
    <LocaleProvider locale="uk">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <ThcParentContent />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
