import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import MultiDrugContent from './MultiDrugContent';

export const metadata = {
  title: 'Multi-Drug Test — 9-Panel Oral Fluid Rapid Test',
  description:
    'The J.Zeppelin Multi-Drug Test screens for 9 substances in oral fluid: OPI, MET, BZO, COC, AMP, MDMA, BUP, MTD, THC. Results in 3–10 minutes. CE-marked IVD.',
  openGraph: {
    title: 'Multi-Drug Test — 9-Panel Oral Fluid Rapid Test',
    description:
      'Comprehensive oral fluid test screening for 9 substance classes simultaneously. Results in 3–10 minutes.',
    url: 'https://jzeppelin.com/products/multi-drug-test',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Multi-Drug Test',
  description:
    'A 9-panel rapid oral fluid immunoassay that simultaneously screens for OPI, MET, BZO, COC, AMP, MDMA, BUP, MTD and THC. CE-marked IVD.',
  brand: { '@type': 'Brand', name: 'J.Zeppelin' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/ComingSoon',
    priceCurrency: 'EUR',
    areaServed: 'EU',
  },
};

export default function MultiDrugTest() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <MultiDrugContent />
      <Footer />
    </div>
  );
}
