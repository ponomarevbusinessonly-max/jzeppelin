import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FAQHeader from '@/components/FAQHeader';
import FAQContent from '@/components/FAQContent';

export const metadata = {
  title: 'FAQ — J.Zeppelin Drogentests',
  description:
    'Häufige Fragen zu J.Zeppelin-Drogentests: Getränke-Test, Multi-Drogen-Test und Aktiv-THC-Test. Anwendung, Genauigkeit, Rechtliches und Verfügbarkeit in der EU.',
  openGraph: {
    title: 'FAQ — J.Zeppelin Drogentests',
    description: 'Alles Wissenswerte über J.Zeppelin-Tests.',
    url: 'https://jzeppelin.eu/de/faq',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/de/faq',
    languages: { en: 'https://jzeppelin.eu/faq', uk: 'https://jzeppelin.eu/uk/faq' },
  },
};

export default function FAQDe() {
  return (
    <LocaleProvider locale="de">
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
