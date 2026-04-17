import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FAQHeader from '@/components/FAQHeader';
import FAQContent from '@/components/FAQContent';

export const metadata = {
  title: 'FAQ — J.Zeppelin Drug Tests',
  description:
    'Frequently asked questions about J.Zeppelin drug test kits: Drink Check Test, Multi-Drug Test, and THC Parent Test. How to use, accuracy, legality, and availability in the EU.',
  openGraph: {
    title: 'FAQ — J.Zeppelin Drug Tests',
    description: 'Everything you need to know about J.Zeppelin tests.',
    url: 'https://jzeppelin.com/faq',
  },
};

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 w-full px-6 md:px-16 lg:px-24 pt-32 pb-20" style={{ backgroundColor: '#f5f5f5' }}>
        <FAQHeader />
        <FAQContent />
      </main>

      <Footer />
    </div>
  );
}
