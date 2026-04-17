import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import ThcParentContent from './ThcParentContent';

export const metadata = {
  title: 'THC Parent Test — Detect Active Δ9-THC in Oral Fluid',
  description:
    'The J.Zeppelin THC Parent Test detects Δ9-THC (the active compound) in oral fluid — not THC-COOH metabolites. Cut-off 50 ng/mL. Results in 5 minutes. CE-marked IVD.',
  openGraph: {
    title: 'THC Parent Test — Detect Active Δ9-THC in Oral Fluid',
    description: 'Detects Δ9-THC itself, not old metabolites. No false positives from past use.',
    url: 'https://jzeppelin.com/products/thc-parent-test',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'THC Parent Test',
  description:
    'An oral fluid rapid test cassette that detects Δ9-THC (the active parent compound) at a cut-off of 50 ng/mL. Detection window up to 14 hours after use. CE-marked IVD.',
  brand: { '@type': 'Brand', name: 'J.Zeppelin' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/ComingSoon',
    priceCurrency: 'EUR',
    areaServed: 'EU',
  },
};

export default function ThcParentTest() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ThcParentContent />
      <Footer />
    </div>
  );
}
