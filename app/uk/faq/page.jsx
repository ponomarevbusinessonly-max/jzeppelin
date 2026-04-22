import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FAQHeader from '@/components/FAQHeader';
import FAQContent from '@/components/FAQContent';

export const metadata = {
  title: 'FAQ — Тести J.Zeppelin',
  description:
    'Часті запитання про тести J.Zeppelin: тест напоїв, мульти-тест і тест на активний THC. Як користуватися, точність, легальність та доступність у ЄС.',
  openGraph: {
    title: 'FAQ — Тести J.Zeppelin',
    description: 'Усе, що потрібно знати про тести J.Zeppelin.',
    url: 'https://jzeppelin.eu/uk/faq',
    locale: 'uk_UA',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/uk/faq',
    languages: { en: 'https://jzeppelin.eu/faq' },
  },
};

export default function FAQUk() {
  return (
    <LocaleProvider locale="uk">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />

        <main className="flex-1 w-full px-6 md:px-16 lg:px-24 pt-32 pb-20" style={{ backgroundColor: '#f5f5f5' }}>
          <FAQHeader />
          <FAQContent />
        </main>

        <Footer />
      </div>
    </LocaleProvider>
  );
}
