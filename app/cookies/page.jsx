import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPage from '@/components/LegalPage';

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
      <LegalPage file="cookies.md" />
      <Footer />
    </div>
  );
}
