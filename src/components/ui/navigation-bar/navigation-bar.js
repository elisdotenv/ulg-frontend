'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import { FaBars } from 'react-icons/fa6';
import { BsChevronRight } from 'react-icons/bs';
import SideNavigationBar from './sidebar-navigation/sidebar-navigation';
import logo from '../../../../public/images/logo-blocks.png';
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
        className={`relative bg-[#010101] w-screen h-[64px] px-[0.75rem] border-b border-[#575e62] flex justify-between items-center`}>
        {/* 1. Chevron & CTA */}
        <div className={`min-w-[55%] flex items-center gap-[1rem]`}>
          <button onClick={toggleNav} className={`text-[1.25rem] shadow-2xl p-[0.375rem] rounded border border-[#575e62]`}>
            <BsChevronRight className={`text-[1.375rem] text-[#ffffda]`} />
          </button>

          <button className={`rounded-[8.5px] p-px bg-gradient-to-br from-[#B2E905] via-yellow-400 to-[#98E216]`}>
            <Link
              href={`/`}
              className={`bg-[#1e2522] block border border-[#575e62] text-[#ffffda] rounded-[8px] px-[12px] py-[6px] shadow-sm font-bold`}>
              Join us
            </Link>
          </button>
        </div>

        {/* 2.LOGO*/}
        <div className={`flex justify-end items-center pr-[0.625rem]`}>
          {/* <Image
            layout='fixed'
            priority={true}
            className={`object-cover w-fit h-fit relative block m-0 p-0 lg:m-0 lg:p-0`}
            src={logo}
            alt={`Logo`}
            width={0}
            height={0}
          />*/}
        </div>
        {isOpen && <SideNavigationBar className={`md:hidden`} onClose={toggleNav} />}
      </nav>
    </>
  );
};

export default NavigationBar;
