import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import DrinkCheckContent from './DrinkCheckContent';

export const metadata = {
  title: 'Drink Check Test — Detect GHB, Ketamine & Rohypnol',
  description:
    'The J.Zeppelin Drink Check Test detects GHB, Ketamine, and Flunitrazepam (Rohypnol) in your drink in 1–3 minutes. 6 sticker tests per pack. Discreet, no lab needed.',
  openGraph: {
    title: 'Drink Check Test — Detect GHB, Ketamine & Rohypnol',
    description:
      'Discreet beverage sticker test that detects the three most common spiking substances in 1–3 minutes.',
    url: 'https://jzeppelin.com/products/drink-check-test',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Drink Check Test',
  description:
    'A discreet beverage sticker test that detects GHB, Ketamine, and Flunitrazepam (Rohypnol) — the three most common drink-spiking substances. Results in 1–3 minutes.',
  brand: { '@type': 'Brand', name: 'J.Zeppelin' },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/ComingSoon',
    priceCurrency: 'EUR',
    areaServed: 'EU',
  },
};

export default function DrinkCheckTest() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <DrinkCheckContent />
      <Footer />
    </div>
  );
}
