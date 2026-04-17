import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPlaceholder from '@/components/LegalPlaceholder';

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
      <LegalPlaceholder
        title="Terms of Use"
        subtitle="The rules and conditions that apply when you use the J.Zeppelin website, contact form or email updates."
      />
      <Footer />
    </div>
  );
}
