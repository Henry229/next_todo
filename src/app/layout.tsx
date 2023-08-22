import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

const openSan = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Simple TodoApp',
  description: 'simple todo app for next13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={openSan.className}>
      <body>{children}</body>
    </html>
  );
}
