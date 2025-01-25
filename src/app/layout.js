import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Uptown Lobby',
  description: 'Made by Gamers and Techleets for Gamers and Techleets',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}
