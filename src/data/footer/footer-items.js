import { FaYoutube, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';

export const socialIcons = [
  { name: 'tiktok', href: '/', icon: <FaTiktok className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} /> },
  { name: 'instagram', href: '/', icon: <FaInstagram className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} /> },
  { name: 'youtube', href: '/', icon: <FaYoutube className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} /> },
  { name: 'twitter', href: '/', icon: <BsTwitterX className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} /> },
  {
    name: 'whatsapp',
    href: 'wa.me',
    icon: <FaWhatsapp className={`lg:w-[20px] w-[18px] lg:h-[20px] h-[18px] text-[0.75rem]`} />,
  },
];

export const legals = [
  { name: 'Terms of Services', href: '/' },
  { name: 'Privacy policy', href: '/' },
  { name: 'Cookie policy', href: '/' },
  { name: 'Disclaimer', href: '/' },
];

export const contacts = ['Sinza, Kijitonyama', 'Dar es salaam, Tanzania', '+255(0)-760-659-831', 'debug@bugverse.com'];

export const contact = [
  /*  { name: 'Sinza, Kijitonyama', icon: <FaLocationDot /> },*/
  { name: 'Dar es salaam, Tanzania', icon: null },
  { name: '+255(0)-760-659-831', icon: null },
  { name: 'debug@bugverse.com', icon: null },
];

{
  /*<FaLocationDot /> <FaPhone /> <IoMailSharp />*/
}
