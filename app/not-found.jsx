import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export const metadata = {
  title: '404 — Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-heading text-[10rem] md:text-[16rem] tracking-tight leading-none text-foreground/10">
          404
        </h1>
        <p className="font-heading text-4xl md:text-5xl tracking-tight -mt-8 mb-6">
          Page not found
        </p>
        <p className="font-body text-muted-foreground text-lg mb-10 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-foreground text-background font-heading text-xl tracking-wide hover:bg-foreground/90 transition-colors"
        >
          Back to home →
        </Link>
      </main>
      <Footer />
    </div>
  );
}
