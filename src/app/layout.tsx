import Navbar from '@/components/Navbar';
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
      <body className='max-w-4xl mx-auto mt-4'>
        <header className='sticky top-0 z-10 bg-white border-b'>
          <div className='max-w-screen-xl mx-auto'>
            <Navbar />
          </div>
        </header>
        <main className='text-center my-5 flex flex-col gap-4'>{children}</main>
      </body>
    </html>
  );
}
