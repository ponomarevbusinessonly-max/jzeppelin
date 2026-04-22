import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import AIAnalysisContent from '@/components/AIAnalysisContent';

export const metadata = {
  title: 'AI Test Analysis — Coming Soon',
  description:
    'Upload a photo of your J.Zeppelin test strip and our AI will read the result for you. Coming soon.',
};

export default function AIAnalysis() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <AIAnalysisContent />
      <Footer />
    </div>
  );
}
