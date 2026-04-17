import './globals.css';
import QueryProvider from '@/components/QueryProvider';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: {
    default: 'J.Zeppelin — Drug Test Kits',
    template: '%s | J.Zeppelin',
  },
  description:
    'Rapid drug detection tests for personal safety. Drink spike test, 9-panel oral fluid test, and THC active compound test. Available in Germany and across the EU.',
  metadataBase: new URL('https://jzeppelin.com'),
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_EU',
    siteName: 'J.Zeppelin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
