// Vercel Analytics Tracker and Insight Tracker
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Geist, Lato, Roboto } from 'next/font/google';
import NavigationBar from '@/components/ui/navigation-bar/navigation-bar';
import { FooterDesktop, FooterMobile } from '@/components/ui/footer/footer';
import DesktopNavigationBar from '@/components/ui/navigation-bar/desktop-navigation/desktop-navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const latoSans = Lato({
  variable: '--font-lato-sans',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

const robotoSans = Roboto({
  variable: '--font-lato-sans',
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
});

// @metadata Object
export const metadata = {
  title: {
    default: 'uptown-lobby',
  },
  description: 'Video Games, Tech, Crypto, Movies and Everything in Between',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${latoSans.variable} ${robotoSans.variable} antialiased`}>
        <main className={`min-h-screen flex flex-col relative`}>
          {/* ---  Mobile Layout Navigatio-bar */}
          <div className={`sticky top-0 left-0 right-0 z-50 md:hidden`}>
            <NavigationBar />
          </div>

          {/* --- Medium & Desktop Layout Navigatio-bar */}
          <nav className={`w-full hidden md:block sticky top-0 left-0 right-0 z-40 mb-5`}>
            <div className={'desktopNavigation'}>
              <DesktopNavigationBar />
            </div>
          </nav>

          {/* --- Main Contents Section */}
          <section>
            {children}
            <Analytics />
          </section>

          {/* --- Footer Section */}
          <footer>
            {/* - Mobile Layout Footer */}
            <div className={`md:hidden`}>
              <FooterMobile />
            </div>

            {/* - Desktop Layout Footer */}
            <div className={`hidden md:block lg:block`}>
              <FooterDesktop />
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
