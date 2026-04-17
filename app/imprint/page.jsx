import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPlaceholder from '@/components/LegalPlaceholder';

export const metadata = {
  title: 'Imprint',
  description:
    'Legal disclosure (Impressum) according to §5 TMG — company details and contact for J.Zeppelin.',
  robots: { index: true, follow: true },
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <LegalPlaceholder
        title="Imprint"
        subtitle="Legal disclosure in accordance with §5 TMG (Telemediengesetz) — mandatory for commercial websites operating in Germany."
      />
      <Footer />
    </div>
  );
}
