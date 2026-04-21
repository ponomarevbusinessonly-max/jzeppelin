import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Imprint',
  description:
    'Legal disclosure (Impressum) according to §5 DDG — company details and contact for J.Zeppelin.',
  robots: { index: true, follow: true },
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <LegalPage file="imprint.md" />
      <Footer />
    </div>
  );
}
