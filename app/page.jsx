import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import WhySection from '@/components/sections/WhySection';
import WhereToBuy from '@/components/sections/WhereToBuy';
import IncidentMap from '@/components/sections/IncidentMap';
import Footer from '@/components/sections/Footer';
import ScrollPills from '@/components/ScrollPills';
export const metadata = {
  title: "J.Zeppelin — Know What's In Your Drink",
  description:
    'Personal drug test kits for drink spiking, multi-drug screening, and active THC detection. Fast results, CE-marked, discreet. Launching in Germany and across the EU.',
  openGraph: {
    title: "J.Zeppelin — Know What's In Your Drink",
    description:
      'Personal drug test kits for drink spiking, multi-drug screening, and active THC detection.',
    url: 'https://jzeppelin.com',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Products />
      <WhySection />
      <WhereToBuy />
      <IncidentMap />
      <Footer />
      <ScrollPills />
    </div>
  );
}
