import type { Metadata } from 'next';
import ClientProviders from '@/hoc/ClientProvider';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default async function RootLayout({ children, }: {
  children: React.ReactNode;
}) {

  return (
    <html lang={'ko'}>
      <body>

        <ClientProviders >
          {children}
        </ClientProviders>
      </body>
    </html >
  );
}
