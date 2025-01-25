// Icons for Social Medias and Platforms
import { FaYoutube, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';

// Social Media & Platforms Icons
export const socialIcons = [
  { name: 'tiktok', href: '/', icon: <FaTiktok className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} /> },
  { name: 'instagram', href: '/', icon: <FaInstagram className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} /> },
  { name: 'youtube', href: '/', icon: <FaYoutube className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} /> },
  { name: 'twitter', href: '/', icon: <BsTwitterX className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} /> },
  {
    name: 'whatsapp',
    href: 'https://wa.me/255689759215?',
    icon: <FaWhatsapp className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} />,
  },
];

// Legal Links
export const legals = [
  { name: 'Terms of Services', href: '/' },
  { name: 'Privacy policy', href: '/' },
  { name: 'Cookie policy', href: '/' },
  { name: 'Disclaimer', href: '/' },
];

// Contacts and Addresses
export const contactsArray = ['Sinza, Kijitonyama', 'Dar es salaam, Tanzania', '+255(0)-760-659-831', 'debug@bugverse.com'];

export const contactsObject = [
  { name: 'Dar es salaam, Tanzania', icon: null },
  { name: '+255(0)-760-659-831', icon: null },
  { name: 'debug@bugverse.com', icon: null },
];
