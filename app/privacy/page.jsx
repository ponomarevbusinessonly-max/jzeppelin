import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How J.Zeppelin collects, uses and protects your personal data under the GDPR.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <LegalPage file="privacy.md" />
      <Footer />
    </div>
  );
}
