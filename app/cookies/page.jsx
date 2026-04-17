import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPlaceholder from '@/components/LegalPlaceholder';

export const metadata = {
  title: 'Cookie Policy',
  description:
    'Information about the cookies and similar technologies used on the J.Zeppelin website.',
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <LegalPlaceholder
        title="Cookie Policy"
        subtitle="Which cookies we use, for what purposes, and how you can manage your consent (ePrivacy Directive & TTDSG)."
      />
      <Footer />
    </div>
  );
}
