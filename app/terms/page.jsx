import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms of Use',
  description:
    'The terms and conditions governing the use of the J.Zeppelin website and services.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <LegalPage file="terms.md" />
      <Footer />
    </div>
  );
}
