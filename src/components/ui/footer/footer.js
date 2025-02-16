import Link from 'next/link';
import styles from './page.module.css';
import { contact, contacts, legals, socialIcons } from '@/data/footer/footer-items';
import Image from 'next/image';
import logo from '../../../../public/images/logo-blocks-footer.png';

export const FooterMobile = () => {
  return (
    <>
      <footer
        id='footer-section'
        className={`${styles.footerWrapper} bg-[#151B23] border-t-[1px] border-t-[#7f76672c] pt-[2rem]`}>
        {/* Name and Logo */}
        <div className={`flex flex-col gap-[0.625rem] items-center`}>
          <div className={`hidden`}>UPTOWN</div>
          {/* 2.LOGO*/}
          <div className={`flex justify-end items-center`}>
            {/* ---  Uncomment this for a Logo Image at the Footer */}
            {/* <Image
              priority={true}
              className={`object-cover h-fit w-fit relative block m-0 p-0 lg:m-0 lg:p-0`}
              src={logo}
              alt={`Logo`}
              width={0}
              height={0}
            />*/}
          </div>
        </div>

        {/* Social Icons */}
        <div className={`${styles.socialIcons}`}>
          <h4 className={`text-[.9375rem] font-semibold text-[#9198A1]`}>Stay connected</h4>
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
          <h4 className={`text-[.9375rem]  font-semibold text-[#9198A1]`}>Legal</h4>
          <ul className={`${styles.legals}`}>
            {legals.map((legal, i) => (
              <li className={`${styles.legalItem} text-[0.9375rem] text-[#9198A1]`} key={i}>
                <Link href={legal.href}>{legal.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className={`${styles.contacts} `}>
          <h4 className={`text-[.9375rem]  font-semibold text-[#9198A1]`}>Contact us</h4>
          <ul className={`${styles.contactItems} text-[0.9375rem] text-[#9198A1]`}>
            {contacts.map((contact, i) => (
              <li key={i}>{contact}</li>
            ))}
          </ul>
        </div>

        {/* Associate */}
        <div className={`${styles.associates}`}>
          <ul className={`flex items-center gap-2 text-[0.9375rem] text-[#9198A1] font-bold `}>
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
          <Link className={`text-[0.9375rem] text-[#9198A1] font-bold`} href='/'>
            Become a partner
          </Link>
        </div>

        {/* Conclusion */}
        <div className={`${styles.conlusion} bg-[#010101] py-[1.5rem]`}>
          <h4 className={`text-center text-[0.875rem] text-[#adbdbc]`}>Made with Passion and Love, All rights reserved</h4>
          <h4 className={`text-center text-[0.875rem] text-[#adbdbc]`}>&copy; {new Date().getFullYear()} bugverse, Inc.</h4>
        </div>
      </footer>
    </>
  );
};

export const FooterDesktop = () => {
  return (
    <>
      {/* bg-[#151B23] */}
      <div className={`w-full min-h-[20svh] bg-[#000000] border-t-[1px] border-t-[#55555581] pt-[0.625rem]`}>
        <div className={`h-full w-full max-w-[1300px] mx-auto grid grid-cols-5 py-[2rem]`}>
          {/* 1. Name and Logo */}
          <div className={`col-span-2 px-[0.625rem] w-full flex flex-col gap-4`}>
            {/* Logo */}
            <div className={`flex`}>
              {/* <Image
                layout='fixed'
                priority={true}
                className={`object-cover h-fit w-fit relative block m-0 p-0 lg:m-0 lg:p-0`}
                src={logo}
                alt={`Logo`}
                width={0}
                height={0}
              />*/}
              LOGO
            </div>

            {/* Name */}
            <div>NAME</div>
          </div>

          {/* 3. Contacts */}
          <div className={`col-span-1 w-full flex flex-col gap-[0.625rem] px-[0.75rem]`}>
            <h4 className={`text-[.9375rem]  font-semibold text-[#9198A1]`}>Contact - us</h4>
            <ul className={`flex flex-col gap-1`}>
              {contact.map((con) => (
                <li className={`text-[0.875rem] text-[#9198A1] flex items-center gap-2`} key={con.name}>
                  {con.icon}
                  {con.name}
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Legal */}
          <div className={`col-span-1 w-full flex flex-col gap-[0.625rem] px-[0.75rem]`}>
            <h4 className={`text-[.9375rem]  font-semibold text-[#9198A1]`}>Legal</h4>
            <ul className={`flex flex-col gap-1`}>
              {legals.map((legal, i) => (
                <li className={`text-[#9198A1]`} key={i}>
                  <Link className={`text-[0.875rem]`} href={legal.href}>
                    {legal.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Associate */}
          <div className={`col-span-1 w-full flex flex-col gap-[0.625rem] px-[0.75rem]`}>
            <h4 className={`text-[.9375rem] font-semibold text-[#9198A1]`}>Partnership</h4>
            <ul className={`flex flex-col gap-1`}>
              <li className={`text-[0.875rem] text-[#9198A1]`}>
                <Link className={`flex gap-2`} href='/'>
                  Become a partner
                  <span
                    className={`text-[#208740] shadow-2xl drop-shadow-2xl text-[0.75rem] bg-[#20874140] border-[0.5px] border-[#208740] hover:bg-[#208740] hover:text-[#fffdfa] rounded-[6px] px-3 py-[0.5px] inline-flex items-center justify-center`}>
                    Start now
                  </span>
                </Link>
              </li>
              <li className={`text-[0.875rem] text-[#9198A1]`}>
                <Link href='/'>Opinion</Link>
              </li>
              <li className={`text-[0.875rem] text-[#9198A1]`}>
                <Link href='/'>Affiliate</Link>
              </li>
              <li className={`text-[0.875rem] text-[#9198A1]`}>
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
        {/* bg-[#151B23] */}
        {/*       <div className={`w-full`}>
          <div className={`w-full mx-auto h-full flex justify-between items-center py-[1.5rem]`}>
            <h4 className={`text-center text-[#9198A1]  text-[0.875rem]`}>
              All rights reserved &copy; {new Date().getFullYear()} bugverse, Inc
            </h4>*/}

        {/* Social Links */}
        {/*            <div className={`col-span-1 flex items-center gap-[0.625rem]`}>
              <ul className={` ${styles.iconsDesktop}`}>
                {socialIcons.map((icon, i) => (
                  <li key={i}>
                    <Link href={icon.href}>{icon.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>*/}
      </div>
    </>
  );
};
