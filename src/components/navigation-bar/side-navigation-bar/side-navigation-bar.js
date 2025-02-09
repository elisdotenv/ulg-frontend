'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { NavigationItems } from '@/data/navigation-bar/navbar-items';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { BsThreeDots } from 'react-icons/bs';
import { BsChevronLeft } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa6';
import logo from '../../../../public/images/logo-blocks-footer.png';

export default function SideNavigationBar({ className, onClose }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  let currentPath = `${pathname}${searchParams ? '?' + searchParams.toString() : ''}`;
  const Path = currentPath.endsWith('?') ? currentPath.slice(0, -1) : currentPath;
  console.log(currentPath);
  if (currentPath === '/?') {
    currentPath = '';
  }

  // Animation variants
  const variants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { x: '0%', opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
  };

  return (
    <motion.div
      className={`${className} bg-[#1e2522] fixed top-0 left-0 w-screen h-[100vh] z-50`}
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
      <nav className='flex flex-col justify-between h-full'>
        {/* Logo and Routes */}
        <div className={`flex flex-col gap-[2rem]`}>
          {/* 1. Logo & Close Button */}
          <div className='flex justify-between items-center px-[1rem] h-[64px] relative'>
            {/* 2.LOGO*/}
            <div className={`flex justify-end items-center pr-[1rem]`}>
              {/*  <Image
                priority={true}
                className={`object-cover w-fit h-fit relative block m-0 p-0 lg:m-0 lg:p-0`}
                src={logo}
                alt={`Logo`}
                width={0}
                height={0}
              />*/}
              <p className={`text-white`}>LOGO</p>
            </div>

            <button onClick={onClose} className={`text-[1.25rem] shadow-2xl p-[0.375rem] rounded border-[1px] border-[#575e62]`}>
              <BsChevronLeft className={`text-[1.375rem] text-[#ffffda]`} />
            </button>
          </div>

          {/* 2. Routes (Navigation-Items) */}
          <ul className={`flex flex-col items-start px-[1.375rem] space-y-5`}>
            {NavigationItems.map((n) => (
              <motion.li
                key={n.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}>
                <Link className={`${Path === n.href ? styles.active : styles.inactive}`} onClick={onClose} href={n.href}>
                  <span className={`text-[1.75rem]`}>{n.icon}</span>
                  <span className={`text-[0.9375rem] font-semibold leading-[1.5] uppercase`}>{n.name}</span>
                </Link>
                {/* Route to About-us, Advertise Here, Privacy Policy, Terms of Use, Site Map   */}
              </motion.li>
            ))}

            {/* Brand Collaborattion */}
            <Link onClick={onClose} className={`flex gap-2 items-center`} href={'/advertise-with-us'}>
              <span className={`text-[1.375rem] p-[0.25rem]`}>
                <FaPaperPlane className={`text-[#98E216]`} />
              </span>
              <span className={`text-[1rem] font-semibold leading-[1.5] text-[#98E216]`}>BRAND COLLABORATION</span>
            </Link>

            {/* More (Redirects to the footer section) */}
            <Link onClick={onClose} className={`flex gap-2 items-center`} href={'#footer-section'}>
              <span className={`text-[1.375rem] border-[1.25px] border-neutral-500 rounded-full p-[0.25rem]`}>
                <BsThreeDots className={`text-neutral-500`} />
              </span>
              <span className={`text-[0.9375rem] font-normal leading-[1.5] text-neutral-500`}>More</span>
            </Link>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}
