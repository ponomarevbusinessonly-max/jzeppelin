import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
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
        <h1 className="font-heading text-7xl sm:text-8xl md:text-[10rem] tracking-tight leading-[0.9] mb-4">
          FAQ
        </h1>
        <p className="font-body text-base text-muted-foreground font-light mb-14 max-w-lg">
          Everything you need to know about J.Zeppelin tests and how to use them.
        </p>

        <FAQContent />
      </main>

      <Footer />
    </div>
  );
}
