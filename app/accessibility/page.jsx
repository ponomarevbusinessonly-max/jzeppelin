import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Accessibility Statement',
  description:
    'J.Zeppelin accessibility statement in accordance with the European Accessibility Act and the German BFSG.',
  robots: { index: true, follow: true },
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <LegalPage file="accessibility.md" />
      <Footer />
    </div>
  );
}
