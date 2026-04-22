import { LocaleProvider } from '@/lib/i18n/LocaleProvider';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import AIAnalysisContent from '@/components/AIAnalysisContent';

export const metadata = {
  title: 'AI-аналіз тестів — Незабаром',
  description:
    'Завантажте фото своєї тест-смужки J.Zeppelin — і наш ШІ прочитає результат за вас. Незабаром.',
  openGraph: {
    title: 'AI-аналіз тестів — Незабаром',
    description: 'Миттєвий AI-вердикт: позитивний чи негативний — з фото тест-смужки.',
    url: 'https://jzeppelin.eu/uk/ai-analysis',
    locale: 'uk_UA',
  },
  alternates: {
    canonical: 'https://jzeppelin.eu/uk/ai-analysis',
    languages: { en: 'https://jzeppelin.eu/ai-analysis' },
  },
};

export default function AIAnalysisUk() {
  return (
    <LocaleProvider locale="uk">
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <AIAnalysisContent />
        <Footer />
      </div>
    </LocaleProvider>
  );
}
