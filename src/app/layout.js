// Vercel Analytics Tracker and Insight Tracker
import { Analytics } from '@vercel/analytics/react';
import { Geist } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Welcome to the Lobby (@uptown-lobby)',
  description: 'For the Love of Tech and Games',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
