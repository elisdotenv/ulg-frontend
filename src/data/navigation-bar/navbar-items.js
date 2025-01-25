import { ImFire } from 'react-icons/im';
import { BsFillKeyboardFill } from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import { VscSparkleFilled } from 'react-icons/vsc';
import { IoHomeSharp, IoGameController } from 'react-icons/io5';
import { FaBitcoin } from 'react-icons/fa6';

export const NavigationItems = [
  { name: 'Lobby', href: '/', icon: <IoHomeSharp /> },
  { name: 'Gadgets', href: '/gadgets', icon: <BsFillKeyboardFill /> },
  { name: 'Trendings', href: '/trendings', icon: <ImFire /> },
  { name: 'Cypto', href: '/trendings', icon: <FaBitcoin /> },
  { name: 'Movies', href: '/movies', icon: <BiMoviePlay /> },
  { name: 'Game Reviews', href: '/reviews', icon: <IoGameController /> },
];
