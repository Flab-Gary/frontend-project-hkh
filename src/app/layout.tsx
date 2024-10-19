import type { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { AppConfig } from '@/utils/AppConfig';
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

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body>
        <ClientProviders >
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
