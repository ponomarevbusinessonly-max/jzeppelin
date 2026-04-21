import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import DrinkCheckContent from '@/app/products/drink-check-test/DrinkCheckContent';

export const metadata = {
  title: 'Тест напоїв — виявлення GHB, Кетаміну та Rohypnol',
  description:
    'Тест J.Zeppelin для перевірки напоїв виявляє GHB, кетамін та флунітразепам (Rohypnol) за 1–3 хвилини. 6 стікерних тестів в упаковці. Непомітний, без лабораторії.',
  openGraph: {
    title: 'Тест напоїв — виявлення GHB, Кетаміну та Rohypnol',
    description: 'Непомітний стікерний тест, що виявляє три найпоширеніші речовини для підмішування за 1–3 хвилини.',
    url: 'https://jzeppelin.eu/uk/products/drink-check-test',
    locale: 'uk_UA',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/uk/products/drink-check-test',
    languages: { en: 'https://jzeppelin.eu/products/drink-check-test' },
  },
};

export default function DrinkCheckTestUk() {
  return (
    <LocaleProvider locale="uk">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <DrinkCheckContent />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
