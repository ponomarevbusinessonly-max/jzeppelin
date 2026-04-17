import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import LegalPlaceholder from '@/components/LegalPlaceholder';

export const metadata = {
  title: 'Right of Withdrawal',
  description:
    'Information on the 14-day right of withdrawal for consumer purchases under EU Directive 2011/83/EU.',
  robots: { index: true, follow: true },
};

export default function WithdrawalPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <LegalPlaceholder
        title="Right of Withdrawal"
        subtitle="Your statutory 14-day right of withdrawal for consumer purchases (Widerrufsbelehrung) under EU Directive 2011/83/EU — applicable once sales begin."
      />
      <Footer />
    </div>
  );
}
