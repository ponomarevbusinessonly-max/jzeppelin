'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

const EASE = [0.22, 1, 0.36, 1];

const gridStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const cardVar = {
  hidden:  { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE } },
};

function FAQCard({ question, answer, even }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={cardVar}
      whileHover={{ y: -4 }}
      transition={{ type: 'tween', duration: 0.25, ease: EASE }}
      className="border-2 border-foreground p-6 flex flex-col"
      style={{ backgroundColor: even ? '#f5f5f5' : '#ffffff' }}
    >
      <h3 className="font-heading text-xl md:text-2xl tracking-tight uppercase leading-tight mb-4">
        {question}
      </h3>

      {/* Collapsed preview (shown only when closed) */}
      {!open && (
        <p className="font-body text-sm text-foreground leading-relaxed flex-1 line-clamp-3">
          {answer}
        </p>
      )}

      {/* Smooth expand */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            key="full"
            className="font-body text-sm text-foreground leading-relaxed flex-1 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="mt-4 self-end w-7 h-7 border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors flex-shrink-0"
        aria-label={open ? 'Collapse' : 'Expand'}
      >
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="flex items-center justify-center"
        >
          {open ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}

export default function FAQContent() {
  return (
    <>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        variants={gridStagger}
        initial="hidden"
        animate="visible"
      >
        {faqs.map((faq, i) => (
          <FAQCard key={faq.question} question={faq.question} answer={faq.answer} even={i % 2 === 0} />
        ))}
      </motion.div>

      <motion.p
        className="mt-14 font-body text-sm text-muted-foreground/60"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        Still have questions?{' '}
        <a href="mailto:hello@jzeppelin.com" className="underline underline-offset-2 hover:text-foreground transition-colors">
          Contact us
        </a>
      </motion.p>
    </>
  );
}
