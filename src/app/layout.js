// Vercel Analytics Tracker and Insight Tracker
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Geist } from 'next/font/google';
import { FooterMobile } from '@/components/footer/footer';
import MobileNavigationBar from '@/components/navigation-bar/mobile-navigation-bar/mobile-navigatioin';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'upptwn-lobby',
  },
  description: 'Video Games, Tech, Crypto, Movies and Everything in Between',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} antialiased`}>
        {/* 1. Navigation Bar Section */}
        <div>
          {/* --- [Mobile Screen] */}
          <div className={`md:hidden fixed top-0 left-0 right-0 z-50`}>
            <MobileNavigationBar />
          </div>

          {/* --- [Medium to Large Screen] */}
        </div>

        {/* --- 2. Main Contents Section */}
        <main>
          {children}
          <Analytics />
        </main>

        {/* --- 3. Footer Section */}
        <footer>
          {/* --- [Mobile Screen] */}
          <div className={`md:hidden`}>
            <FooterMobile />
          </div>
          {/* --- [Medium to Large Screen] */}
          <div className={`hidden md:block`}></div>
        </footer>
      </body>
    </html>
  );
}
