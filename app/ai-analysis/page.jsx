import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import AIAnalysisUploader from '@/components/AIAnalysisUploader';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'AI Test Analysis — Coming Soon',
  description:
    'Upload a photo of your J.Zeppelin test strip and our AI will read the result for you. Coming soon.',
};

export default function AIAnalysis() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-border px-4 py-1.5 mb-10">
          <Sparkles size={13} className="text-muted-foreground" />
          <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">Coming Soon</span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-9xl tracking-tight leading-[0.9] max-w-4xl">
          AI Test<br />Analysis
        </h1>
        <p className="mt-6 font-body text-lg md:text-xl text-muted-foreground font-light max-w-xl leading-relaxed">
          Upload a photo of your J.Zeppelin test strip and our AI will instantly tell you — positive or negative.
        </p>

        <AIAnalysisUploader />

        {/* How it will work */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl w-full text-left">
          {[
            { step: "01", title: "Photograph", text: "Take a clear photo of your test strip after use." },
            { step: "02", title: "Upload", text: "Upload it here — no account required." },
            { step: "03", title: "Result", text: "AI reads the lines and returns a clear positive / negative verdict." },
          ].map((item) => (
            <div key={item.step}>
              <span className="font-heading text-4xl text-muted-foreground/20">{item.step}</span>
              <h3 className="font-heading text-2xl tracking-tight mt-2">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground font-light mt-1 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Notify CTA */}
        <p className="mt-16 font-body text-sm text-muted-foreground/50">
          Want early access?{' '}
          <a href="/#buy" className="underline underline-offset-2 hover:text-foreground transition-colors">
            Leave your email
          </a>{' '}
          on the main page.
        </p>
      </main>

      <Footer />
    </div>
  );
}
