import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPlaceholder from '@/components/LegalPlaceholder';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How J.Zeppelin collects, uses and protects your personal data in accordance with the GDPR.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <LegalPlaceholder
        title="Privacy Policy"
        subtitle="How we collect, use and protect your personal data under the GDPR (Regulation (EU) 2016/679)."
      />
      <Footer />
    </div>
  );
}
