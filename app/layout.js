import { Geist, Geist_Mono } from 'next/font/google';
import '@/assets/styles/tailwind.css';
import '@/assets/styles/index.scss';
import ReduxProvider from '@/components/providers/ReduxProvider';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Ceiver — Digital Solutions for Tomorrow',
  description:
    'Ceiver builds innovative digital products — web apps, mobile apps, cloud solutions, and UI/UX design — that help businesses scale and succeed.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen">
        <ReduxProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
