import Link from 'next/link';
import styles from './page.module.css';
import { contactsArray, contactsObject, legals, socialIcons } from '@/data/footer/footer-items';
import Image from 'next/image';
import logo from '../../../public/images/logo-blocks-footer.png';

/* --- Mobile UI Footer "Only to Mobile Screens" */
export const FooterMobile = () => {
  return (
    <>
      {/* --- Footer Section */}
      <footer
        id='footer-section'
        className={`${styles.footerWrapper} bg-[#151B23] border-t-[1px] border-t-[#7f76672c] pt-[2rem]`}>
        {/* ---Name and Logo */}
        <div className={`flex flex-col gap-[0.625rem] items-center`}>
          <div className={`hidden`}>UPTOWN</div>
          {/* --- Logo */}
          <div className={`flex justify-end items-center`}>
            <Image
              layout='fixed'
              priority={true}
              className={`object-cover h-fit w-fit relative block m-0 p-0 lg:m-0 lg:p-0`}
              src={logo}
              alt={`Logo`}
              width={0}
              height={0}
            />
          </div>
        </div>

        {/* --- Social Icons & Links */}
        <div className={`${styles.socialIcons}`}>
          <h4 className={`text-[.9375rem] font-primary font-semibold text-[#9198A1]`}>Stay connected</h4>
          <ul className={`${styles.icons}`}>
            {socialIcons.map((icon, i) => (
              <li key={i}>
                <Link href={icon.href}>{icon.icon}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Legals Section */}
        <div className={`${styles.legalItems}`}>
          <h4 className={`text-[.9375rem] font-primary font-semibold text-[#9198A1]`}>Legal</h4>
          <ul className={`${styles.legals}`}>
            {legals.map((legal, i) => (
              <li className={`${styles.legalItem} text-[0.9375rem] text-[#9198A1]`} key={i}>
                <Link href={legal.href}>{legal.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Contacts & Address Section */}
        <div className={`${styles.contacts} `}>
          <h4 className={`text-[.9375rem] font-primary font-semibold text-[#9198A1]`}>Contact us</h4>
          <ul className={`${styles.contactItems} text-[0.9375rem] text-[#9198A1]`}>
            {contactsArray.map((contact, i) => (
              <li key={i}>{contact}</li>
            ))}
          </ul>
        </div>

        {/* --- Associates & Affilliate Section */}
        <div className={`${styles.associates}`}>
          <ul className={`flex items-center gap-2 text-[0.9375rem] text-[#9198A1] font-bold font-secondary`}>
            <li>
              <Link href='/'>Advertise</Link>
            </li>
            <span className={`${styles.divide}`}></span>
            <li>
              <Link href='/'>Opinion</Link>
            </li>
            <span className={`${styles.divide}`}></span>
            <li>
              <Link href='/'>Affiliate</Link>
            </li>
          </ul>
          <Link className={`text-[0.9375rem] text-[#9198A1] font-bold font-secondary`} href='/'>
            Become a partner
          </Link>
        </div>

        {/* --- Conclusion */}
        <div className={`${styles.conlusion} bg-[#010101] py-[1.5rem]`}>
          <h4 className={`text-center text-[0.875rem] text-[#adbdbc]`}>Made with passion and love, All rights reserved</h4>
          <h4 className={`text-center text-[0.875rem] text-[#adbdbc]`}>&copy; {new Date().getFullYear()} dotstub, Inc.</h4>
        </div>
      </footer>
    </>
  );
};
