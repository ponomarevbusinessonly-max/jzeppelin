'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What substances can the DRINK CHECK TEST detect?",
    answer: "The DRINK CHECK TEST detects GHB (gamma-hydroxybutyric acid), Ketamine, and Flunitrazepam (Rohypnol) — the three most commonly used drink-spiking substances. The sticker is placed on a beverage and reacts within seconds."
  },
  {
    question: "How accurate are the tests?",
    answer: "Our tests follow CE-marked rapid test standards. Accuracy is above 99% for the target substances at clinically relevant concentrations. However, no rapid test is 100% infallible — if you feel unsafe, trust your instincts regardless of the result."
  },
  {
    question: "Can I use the DRINK CHECK TEST on any drink?",
    answer: "Yes — it works on most beverages including cocktails, beer, and non-alcoholic drinks. High-sugar or carbonated drinks may slightly affect sensitivity. For best results, apply the sticker to a small sample of the drink."
  },
  {
    question: "What is the MULTI-DRUG TEST used for?",
    answer: "The MULTI-DRUG TEST is an oral fluid (saliva) test that screens for 9 substance classes: Opiates, Methamphetamine, Benzodiazepines, Cocaine, Amphetamine, MDMA, Buprenorphine, Methadone, and THC. It is used for personal safety checks or harm-reduction purposes."
  },
  {
    question: "What makes the THC PARENT TEST different?",
    answer: "Standard THC tests detect the metabolite THC-COOH, which stays in the body for days or weeks. The THC Parent Test detects Δ9-THC itself — the active compound — meaning it only shows positive during active impairment, not residual presence."
  },
  {
    question: "Are the tests single-use?",
    answer: "Yes. All J.Zeppelin tests are single-use for accuracy and hygiene reasons. The DRINK CHECK TEST pack contains 6 sticker tests. The MULTI-DRUG and THC PARENT TEST each contain individual cassettes."
  },
  {
    question: "How do I read the result?",
    answer: "For the oral fluid tests: two lines = negative, one line (control only) = positive, no lines = invalid test. For the DRINK CHECK sticker, a color change indicates the presence of a substance. Detailed instructions are included in every pack."
  },
  {
    question: "Are the tests legal in the EU?",
    answer: "Yes. Our tests are sold as personal safety tools and are not classified as medical devices requiring prescription. They comply with CE marking requirements for in-vitro diagnostic devices."
  },
  {
    question: "Where can I buy J.Zeppelin tests?",
    answer: "We are currently launching in Germany and expanding across the EU. Leave your email on our main page to be notified when tests are available in your region or online."
  },
  {
    question: "Is the Incident Map data verified?",
    answer: "No. The Incident Map is entirely community-submitted and anonymous. Reports are not verified by J.Zeppelin. The map exists to raise awareness — not as a scientific or legal data source."
  },
];

function FAQCard({ question, answer, even }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-2 border-foreground p-6 flex flex-col"
      style={{ backgroundColor: even ? '#f5f5f5' : '#ffffff' }}
    >
      <h3 className="font-heading text-xl md:text-2xl tracking-tight uppercase leading-tight mb-4">
        {question}
      </h3>
      <p className={`font-body text-sm text-foreground leading-relaxed flex-1 transition-all duration-200 ${open ? '' : 'line-clamp-3'}`}>
        {answer}
      </p>
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 self-end w-7 h-7 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors flex-shrink-0"
        aria-label={open ? 'Collapse' : 'Expand'}
      >
        {open ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
      </button>
    </div>
  );
}

export default function FAQContent() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {faqs.map((faq, i) => (
          <FAQCard key={faq.question} question={faq.question} answer={faq.answer} even={i % 2 === 0} />
        ))}
      </div>

      <p className="mt-14 font-body text-sm text-muted-foreground/60">
        Still have questions?{' '}
        <a href="mailto:hello@jzeppelin.com" className="underline underline-offset-2 hover:text-foreground transition-colors">
          Contact us
        </a>
      </p>
    </>
  );
}
