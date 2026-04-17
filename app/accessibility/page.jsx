import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPlaceholder from '@/components/LegalPlaceholder';

export const metadata = {
  title: 'Accessibility Statement',
  description:
    'J.Zeppelin accessibility statement in accordance with the European Accessibility Act (EAA).',
  robots: { index: true, follow: true },
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <LegalPlaceholder
        title="Accessibility Statement"
        subtitle="Our commitment to making jzeppelin.eu accessible to users with disabilities, in line with the European Accessibility Act (EAA, in force since June 2025)."
      />
      <Footer />
    </div>
  );
}
