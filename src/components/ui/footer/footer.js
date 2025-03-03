import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { contact, contacts, legals, socialIcons } from '@/data/footer/footer-items';
import LogoWhite from '../../../../public/Logo-White.png';

export const FooterMobile = () => {
  return (
    <>
      <footer id='footer-section' className={`${styles.footerWrapper} bg-[#030303] pt-[2rem] pl-[1rem]`}>
        {/* --- NAME & LOGO */}
        {/*    <div className={`flex flex-col gap-[0.625rem] items-center`}>*/}
        {/* 2.LOGO*/}
        {/* <div className={`flex items-center justify-center w-[54px] h-[54px] ${styles.cardSM}`}>
            <div className={`flex items-center w-[50px] h-[50px] rounded-md bg-[#030303]`}>
              <Image
                src={LogoWhite}
                priority={true}
                className={`object-cover w-fit h-fit relative block m-0 p-0 lg:m-0 lg:p-0`}
                alt={`Logo`}
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>*/}
        {/* - Social Icons */}
        <div className={`${styles.socialIcons}`}>
          <h4 className={`font-lato font-bold text-[1.5rem] text-[#ccc] leading-[33.6px]`}>Follow Us</h4>
          <ul className={`${styles.icons}`}>
            {socialIcons.map((icon, i) => (
              <li key={i}>
                <Link href={icon.href}>{icon.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Legal */}
        <div className={`${styles.legalItems}`}>
          <h4 className={`font-lato font-bold text-[1.5rem] text-[#ccc] leading-[33.6px]`}>Legal</h4>
          <ul className={`${styles.legals}`}>
            {legals.map((legal, i) => (
              <li className={`${styles.legalItem} font-lato font-normal text-[1rem] text-[#ccc]`} key={i}>
                <Link href={legal.href}>{legal.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Contacts */}
        <div className={`${styles.contacts} `}>
          <h4 className={`font-lato font-bold text-[1.5rem] text-[#ccc] leading-[33.6px]`}>Contact us</h4>
          <ul className={`${styles.contactItems} font-lato font-normal text-[1rem] text-[#ccc]`}>
            {contacts.map((contact, i) => (
              <li key={i}>{contact}</li>
            ))}
          </ul>
        </div>
        {/* Associate */}
        <div className={`${styles.associates}`}>
          <ul className={`flex items-center gap-3 font-lato font-normal text-[1rem] text-[#CCFF00]`}>
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
          <Link className={`font-lato font-normal text-[1rem] text-[#CCFF00]`} href='/'>
            Become a partner
          </Link>
        </div>
        <h4 className={`text-[0.875rem] text-[#ccc]`}>Made by Love & Honor for Tanzanian Techies.</h4>
        {/* Conclusion */}
        <div className={`${styles.conlusion} py-[2rem]`}>
          <h4 className={`text-center text-[0.875rem] text-[#ccc]`}>
            &copy; {new Date().getFullYear()}, Uptown Lobby Store. All Rights Reserved.
          </h4>
        </div>
      </footer>
    </>
  );
};

export const FooterDesktop = () => {
  return (
    <>
      <div className={`w-full min-h-[20svh] bg-[#030303] pt-[2rem]`}>
        <div className={`h-full w-full max-w-[1300px] mx-auto grid grid-cols-5 py-[1rem]`}>
          {/* --- NAME & LOGO */}
          <div className={`col-span-2 px-[0.625rem] w-full flex flex-col gap-3`}>
            {/* - Logo */}
            <div className={`flex items-center justify-center w-[60px] h-[60px] ${styles.card}`}>
              <div className={`bg-black rounded-md w-[56px] h-[56px]`}>
                <Image
                  src={LogoWhite}
                  priority={true}
                  className={`object-cover w-fit h-fit relative block m-0 p-0 lg:m-0 lg:p-0`}
                  alt={`Logo`}
                  width={0}
                  height={0}
                />
              </div>
            </div>

            {/* Social Links */}
            <div className={`flex flex-col gap-[0.5rem]`}>
              <h4 className={`font-lato font-bold text-[1.25rem] text-[#ccc] leading-[30px]`}>Follow Us</h4>
              <div className={`col-span-1 flex items-center gap-[0.625rem]`}>
                <ul className={` ${styles.iconsDesktop}`}>
                  {socialIcons.map((icon, i) => (
                    <li key={i}>
                      <Link href={icon.href}>{icon.icon}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* --- Contacts */}
          <div className={`w-full flex flex-col col-span-1 gap-[0.625rem] px-[0.75rem]`}>
            <h4 className={`font-lato font-bold text-[1.5rem] text-[#ccc] leading-[33.6px]`}>Contact - us</h4>
            <ul className={`flex flex-col gap-1`}>
              {contact.map((con) => (
                <li
                  className={`font-lato font-normal text-[0.9375rem] text-[#ccc] leading-[20px] flex items-center gap-2`}
                  key={con.name}>
                  {con.icon}
                  {con.name}
                </li>
              ))}
            </ul>
          </div>

          {/* --- Legal */}
          <div className={`col-span-1 w-full flex flex-col gap-[0.625rem] px-[0.75rem]`}>
            <h4 className={`font-lato font-bold text-[1.5rem] text-[#ccc] leading-[33.6px]`}>Legal</h4>
            <ul className={`flex flex-col gap-1`}>
              {legals.map((legal, i) => (
                <li className={`font-lato font-normal text-[0.9375rem] text-[#ccc] leading-[20px]`} key={i}>
                  <Link href={legal.href}>{legal.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Partnership */}
          <div className={`col-span-1 w-full flex flex-col gap-[0.625rem] px-[0.75rem]`}>
            <h4 className={`font-lato font-bold text-[1.5rem] text-[#ccc] leading-[33.6px]`}>Partnership</h4>
            <ul className={`flex flex-col gap-1`}>
              <li className={`font-lato font-normal text-[0.9375rem] text-[#ccc] leading-[20px]`}>
                <Link className={`flex gap-2`} href='/'>
                  Become a partner
                  <span
                    className={`text-[#208740] shadow-2xl drop-shadow-2xl text-[0.75rem] bg-[#20874140] border-[0.5px] border-[#208740] hover:bg-[#208740] hover:text-[#fffdfa] rounded-[6px] px-3 py-[0.5px] inline-flex items-center justify-center`}>
                    Start now
                  </span>
                </Link>
              </li>
              <li className={`font-lato font-normal text-[0.9375rem] text-[#ccc] leading-[20px]`}>
                <Link href='/'>Opinion</Link>
              </li>
              <li className={`font-lato font-normal text-[0.9375rem] text-[#ccc] leading-[20px]`}>
                <Link href='/'>Affiliate</Link>
              </li>
              <li className={`font-lato font-normal text-[0.9375rem] text-[#ccc] leading-[20px]`}>
                <Link className={`flex gap-2`} href='/'>
                  Advertise
                  <span
                    className={`text-[#0969DA] drop-shadow-2xl shadow-2xl text-[0.75rem] bg-[#096bda38] border-[0.5px] border-[#0969DA] hover:bg-[#0969DA] hover:text-[#fffdfa] rounded-[6px] px-3 py-[0.5px]  inline-flex items-center justify-center`}>
                    Custom
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/*2. Conclusion */}
        <div className={`w-full bg-[#ccc]`}>
          <div className={`w-[1300px] mx-auto h-full py-[1rem] flex items-center justify-center`}>
            <h4 className={`text-center text-black  text-[0.875rem]`}>
              &copy; {new Date().getFullYear()}, Uptown Lobby Store. All Rights Reserved.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
