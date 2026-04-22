'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import AIAnalysisUploader from '@/components/AIAnalysisUploader';
import { useDict, useLocale } from '@/lib/i18n/LocaleProvider';

export default function AIAnalysisContent() {
  const dict = useDict();
  const locale = useLocale();
  const a = dict.aiAnalysis;
  const buyHref = locale === 'uk' ? '/uk/#buy' : '/#buy';

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-32 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-border px-4 py-1.5 mb-10">
        <Sparkles size={13} className="text-muted-foreground" />
        <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">{a.badge}</span>
      </div>

      {/* Heading */}
      <h1 className="font-heading text-6xl sm:text-7xl md:text-9xl tracking-tight leading-[0.9] max-w-4xl">
        {a.headline[0]}<br />{a.headline[1]}
      </h1>
      <p className="mt-6 font-body text-lg md:text-xl text-muted-foreground font-light max-w-xl leading-relaxed">
        {a.subtitle}
      </p>

      <AIAnalysisUploader />

      {/* How it will work */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl w-full text-left">
        {a.steps.map((item) => (
          <div key={item.step}>
            <span className="font-heading text-4xl text-muted-foreground/20">{item.step}</span>
            <h3 className="font-heading text-2xl tracking-tight mt-2">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground font-light mt-1 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Notify CTA */}
      <p className="mt-16 font-body text-sm text-muted-foreground/50">
        {a.ctaPre}{' '}
        <a href={buyHref} className="underline underline-offset-2 hover:text-foreground transition-colors">
          {a.ctaLink}
        </a>{' '}
        {a.ctaPost}
      </p>
    </main>
  );
}
