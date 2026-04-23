import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import AIAnalysisContent from '@/components/AIAnalysisContent';

export const metadata = {
  title: 'KI-Testanalyse — Bald verfügbar',
  description:
    'Lade ein Foto deines J.Zeppelin-Teststreifens hoch und unsere KI liest das Ergebnis für dich. Bald verfügbar.',
  openGraph: {
    title: 'KI-Testanalyse — Bald verfügbar',
    description: 'Sofortiges KI-Urteil: positiv oder negativ — aus einem Foto des Teststreifens.',
    url: 'https://jzeppelin.eu/de/ai-analysis',
    locale: 'de_DE',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/de/ai-analysis',
    languages: { en: 'https://jzeppelin.eu/ai-analysis', uk: 'https://jzeppelin.eu/uk/ai-analysis' },
  },
};

export default function AIAnalysisDe() {
  return (
    <LocaleProvider locale="de">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <AIAnalysisContent />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
