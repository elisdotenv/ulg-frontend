'use client';
import { NavigationItems } from '@/data/navbar/navbar';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { BsThreeDots } from 'react-icons/bs';
import styles from './page.module.css';
import { BsChevronLeft } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa6';
import LogoWhite from '../../../../../public/Logo-White.png';

const SideNavigationBar = ({ className, onClose }) => {
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
            <div className={`flex items-center justify-center w-[54px] h-[54px] ${styles.card}`}>
              <div className={`flex items-center w-[50px] h-[50px] rounded-md bg-[#1e2522]`}>
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
};

export default SideNavigationBar;
