'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import { FaBars } from 'react-icons/fa6';
import { BsChevronRight } from 'react-icons/bs';
import SideNavigationBar from './sidebar-navigation/sidebar-navigation';
import LogoWhite from '../../../../public/Logo-White.png';
import Image from 'next/image';

const NavigationBar = () => {
  /* State Variables */
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [Items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showHorizontalNav, setShowHorizontalNav] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`relative bg-[#030303] w-screen h-[64px] px-[0.75rem] border-b border-[#575e62] flex justify-between items-center`}>
        {/* 1. Chevron & CTA */}
        <div className={`min-w-[55%] flex items-center gap-[1rem]`}>
          <button onClick={toggleNav} className={`text-[1.25rem] shadow-2xl p-[0.475rem] rounded border border-[#575e62]`}>
            <BsChevronRight className={`text-[1.475rem] text-[#ffffda]`} />
          </button>

          <button className={`rounded-[8.5px] p-px bg-gradient-to-br from-[#B2E905] via-[#CCFF00] to-yellow-400`}>
            <Link
              href={`/`}
              className={`bg-[#030303] block border border-[#575e62] text-[#ffffda] rounded-[8px] px-[12px] py-[6px] shadow-sm font-bold`}>
              Join us
            </Link>
          </button>
        </div>

        {/* 2.LOGO*/}
        <div className={`flex items-center justify-center w-[54px] h-[54px] ${styles.card}`}>
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
        {isOpen && <SideNavigationBar className={`md:hidden`} onClose={toggleNav} />}
      </nav>
    </>
  );
};

export default NavigationBar;
