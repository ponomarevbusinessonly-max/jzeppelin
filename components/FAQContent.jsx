'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { useDict } from '@/lib/i18n/LocaleProvider';

const EASE = [0.22, 1, 0.36, 1];

const groupVar = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const itemVar = {
  hidden:  { opacity: 0, y: 20, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.55, ease: EASE } },
};
const listStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

function FAQItem({ q, a }) {
  return (
    <motion.div
      variants={itemVar}
      className="border-l-2 border-foreground pl-5 py-1"
    >
      <h3 className="font-heading text-lg md:text-xl tracking-tight uppercase leading-tight mb-2">
        {q}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        {a}
      </p>
    </motion.div>
  );
}

function FAQGroup({ topic, items, index }) {
  return (
    <motion.section
      variants={groupVar}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="mb-16"
    >
      <div className="flex items-baseline gap-4 mb-6">
        <span className="font-heading text-xs tracking-widest uppercase text-muted-foreground/60">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="font-heading text-2xl md:text-3xl tracking-tight uppercase">
          {topic}
        </h2>
        <div className="flex-1 h-px bg-foreground/15" />
      </div>

      <motion.div
        className="space-y-5"
        variants={listStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {items.map((it) => (
          <FAQItem key={it.q} q={it.q} a={it.a} />
        ))}
      </motion.div>
    </motion.section>
  );
}

function ContactForm({ c, index }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrMsg('');

    const form = e.currentTarget;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      _subject: `FAQ question from ${form.name.value.trim() || 'visitor'}`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@jzeppelin.eu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success === 'true' || json.success === true) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error(json.message || 'Submit failed');
      }
    } catch (err) {
      setStatus('error');
      setErrMsg(err.message || c.errGeneric);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mt-24 border-2 border-foreground p-8 md:p-12 bg-background"
    >
      <div className="flex items-baseline gap-4 mb-2">
        <span className="font-heading text-xs tracking-widest uppercase text-muted-foreground/60">
          {String(index).padStart(2, '0')}
        </span>
        <h2 className="font-heading text-2xl md:text-3xl tracking-tight uppercase">
          {c.heading}
        </h2>
      </div>
      <p className="font-body text-sm text-muted-foreground mb-8 max-w-lg">
        {c.lead} <span className="text-foreground">info@jzeppelin.eu</span>.
      </p>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex items-start gap-3 border border-foreground p-6"
        >
          <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-heading text-lg tracking-tight uppercase mb-1">{c.successHead}</p>
            <p className="font-body text-sm text-muted-foreground">
              {c.successText}
            </p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="name"
              required
              type="text"
              placeholder={c.namePh}
              className="border border-foreground px-4 py-3 bg-transparent font-body text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
            <input
              name="email"
              required
              type="email"
              placeholder={c.emailPh}
              className="border border-foreground px-4 py-3 bg-transparent font-body text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground/20"
            />
          </div>

          <textarea
            name="message"
            required
            rows={5}
            placeholder={c.messagePh}
            className="border border-foreground px-4 py-3 bg-transparent font-body text-sm placeholder:text-muted-foreground/60 resize-none focus:outline-none focus:ring-2 focus:ring-foreground/20"
          />

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="font-body text-xs text-muted-foreground/60">
              {c.privacy}
            </p>

            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={status === 'idle' ? { scale: 1.03 } : {}}
              whileTap={status === 'idle' ? { scale: 0.97 } : {}}
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-heading text-sm tracking-wider uppercase hover:bg-foreground/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <span className="w-3 h-3 border-2 border-background/40 border-t-background rounded-full animate-spin" />
                  {c.sending}
                </>
              ) : (
                <>
                  {c.sendBtn} <Send size={14} />
                </>
              )}
            </motion.button>
          </div>

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-body text-sm text-red-600 mt-1"
            >
              {errMsg}
            </motion.p>
          )}
        </form>
      )}
    </motion.section>
  );
}

export default function FAQContent() {
  const dict = useDict();
  const groups = dict.faq.groups;
  const c = dict.faq.contact;
  return (
    <>
      {groups.map((g, i) => (
        <FAQGroup key={g.topic} topic={g.topic} items={g.items} index={i} />
      ))}

      <ContactForm c={c} index={groups.length + 1} />

      <motion.p
        className="mt-10 font-body text-xs text-muted-foreground/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {c.footerPre}{' '}
        <a href="mailto:info@jzeppelin.eu" className="underline underline-offset-2 hover:text-foreground transition-colors">
          info@jzeppelin.eu
        </a>
      </motion.p>
    </>
  );
}
