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
  title: 'J.Zeppelin — Persönliche Drogentests',
  description:
    'Schnelle Drogentests für die persönliche Sicherheit: Getränke-Test gegen K.-o.-Tropfen, 9-Panel-Speicheltest, Aktiv-THC-Test. Bald in Deutschland und ganz Europa.',
  openGraph: {
    title: 'J.Zeppelin — Persönliche Drogentests',
    description:
      'Drogentest-Kits: K.-o.-Check, Multi-Screening, Aktiv-THC-Test.',
    url: 'https://jzeppelin.eu/de',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/de',
    languages: { en: 'https://jzeppelin.eu', uk: 'https://jzeppelin.eu/uk' },
  },
};

export default function HomeDe() {
  return (
    <LocaleProvider locale="de">
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
