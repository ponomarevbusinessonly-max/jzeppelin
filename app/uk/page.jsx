import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import WhySection from '@/components/sections/WhySection';
import WhereToBuy from '@/components/sections/WhereToBuy';
import IncidentMap from '@/components/sections/IncidentMap';
import Footer from '@/components/sections/Footer';
import ScrollPills from '@/components/ScrollPills';

export const metadata = {
  title: 'J.Zeppelin — Особисті тести',
  description:
    'Швидкі тести на наркотики для особистої безпеки: тест на підмішування в напої, 9-панельний тест слини, тест на активний THC. Доступно в Німеччині та по всьому ЄС.',
  openGraph: {
    title: 'J.Zeppelin — Особисті тести',
    description:
      'Тест-кити на наркотики: перевірка підмішування, мульти-скрінінг, активний THC.',
    url: 'https://jzeppelin.eu/uk',
    locale: 'uk_UA',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/uk',
    languages: { 'en': 'https://jzeppelin.eu' },
  },
};

export default function HomeUk() {
  return (
    <LocaleProvider locale="uk">
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Products />
        <WhySection />
        <WhereToBuy />
        <IncidentMap />
        <Footer />
        <ScrollPills />
      </div>
    </LocaleProvider>
  );
}
