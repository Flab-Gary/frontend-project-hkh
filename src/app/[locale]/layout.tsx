import type { Metadata } from 'next';
import ClientProviders from '@/hoc/ClientProvider';
import { Provider } from 'react-wrap-balancer';
import '@/styles/global.css';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/Fizz.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/Fizz.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/Fizz.png',
    },
    {
      rel: 'icon',
      url: '/Fizz.ico',
    },
  ],
};

export default async function RootLayout({ children, }: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <body>
        <Provider>
          <ClientProviders >
            {children}
          </ClientProviders>
        </Provider>
      </body>
    </html >
  );
}
