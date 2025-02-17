'use client';
import { useState } from 'react';
import { NavigationItems } from '@/data/navbar/navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';
import logo from '../../../../../public/images/logo-blocks.png';
import squares from '../../../../../public/images/square-bg.svg';
import { FaPaperPlane } from 'react-icons/fa6';
import GadgetsDetails from '@/components/details/gadgets-details/gadgets';
import MoviesDetails from '@/components/details/movies-details/movies';
import GamesDetails from '@/components/details/games-details/games';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { GiThorHammer, GiHouseKeys } from 'react-icons/gi';
import TrendingsDetails from '@/components/details/trendings-details/trendings';
import Image from 'next/image';
import CryptosDetails from '@/components/details/cryptos-details/cryptos';

/*  This Component Fetches The Navigation Items */
const DesktopNavigationBar = () => {
  const pathname = usePathname();
  const [isLobby, setIsLobby] = useState(false);
  const [isGadgets, setIsGadgets] = useState(false);
  const [isTrendings, setIsTrendings] = useState(false);
  const [isMovies, setIsMovies] = useState(false);
  const [isGames, setIsGames] = useState(false);
  const [isCryptos, setIsCryptos] = useState(false);

  return (
    <>
      <div className={`bg-[#000000] w-screen z-40 border-b-4 border-b-[#f0705a] relative`}>
        <nav className={`max-w-[1300px] h-[64px] mx-auto flex items-center justify-between bg-[#000000] `}>
          {/*  --- Logo & Navigational Items */}
          <div className={`flex items-center gap-[1.5rem]`}>
            {/* LOGO Redirects to '/'*/}
            <div>LOGO</div>

            {/*  - 2. Navigational Items */}
            <ul className={`flex items-center gap-[1rem]`}>
              {/* --- route-1 ('/lobby') Redirects to Home */}
              <li
                className={` 
                ${pathname === '/' || (pathname.startsWith('/' + '/') && '/' !== '/') ? styles.special : styles.regular}
                
                  ${isLobby ? styles.hovered : styles.notHovered}
                  `}
                onMouseOver={() => setIsLobby(true)}
                onMouseOut={() => setIsLobby(false)}>
                <Link className={`flex items-center gap-[4px] text-[1rem] leading-4 tracking-wider uppercase`} href={`/`}>
                  <GiThorHammer className={`text-white text-[28px] mr-[8px]`} />
                  UPTOWN
                </Link>
              </li>

              {/* --- route-2 ('/gadgets') Redirects to '/gadgets' */}
              <li
                className={` 
                ${
                  pathname === '/gadgets' || (pathname.startsWith('/gadgets' + '/') && '/gadgets' !== '/')
                    ? styles.special
                    : styles.regular
                }
                
                  ${isGadgets ? styles.hovered : styles.notHovered}
                  `}
                onMouseOver={() => setIsGadgets(true)}
                onMouseOut={() => setIsGadgets(false)}>
                <Link
                  className={` text-[1rem] leading-4 tracking-wider uppercase flex gap-[0.375rem] items-center`}
                  href={`/gadgets`}>
                  Gadgets
                  {isGadgets ? <AiFillCaretUp className={` `} /> : <AiFillCaretDown className={` `} />}
                </Link>
              </li>
              {/* Some Misinformations about the 'route' */}
              {isGadgets ? <div>{<GadgetsDetails />}</div> : ''}

              {/* --- route-3 ('/trendings') Redirects to '/trendings' */}
              <li
                className={` 
                ${
                  pathname === '/trendings' || (pathname.startsWith('/trendings' + '/') && '/trendings' !== '/')
                    ? styles.special
                    : styles.regular
                }
                
                  ${isTrendings ? styles.hovered : styles.notHovered}
                  `}
                onMouseOver={() => setIsTrendings(true)}
                onMouseOut={() => setIsTrendings(false)}>
                <Link
                  className={`text-[1rem] leading-4 tracking-wider uppercase flex gap-[0.375rem]  items-center`}
                  href={`/trendings`}>
                  Trendings
                  {isTrendings ? <AiFillCaretUp className={``} /> : <AiFillCaretDown className={``} />}
                </Link>
              </li>
              {/* --- Some Misinformations about the 'route' */}
              {isTrendings ? (
                <div>
                  <TrendingsDetails />
                </div>
              ) : (
                ''
              )}

              {/* --- route-4 ('/movies') Redirects to '/movies' */}
              <li
                className={` 
                ${
                  pathname === '/movies' || (pathname.startsWith('/movies' + '/') && '/movies' !== '/')
                    ? styles.special
                    : styles.regular
                }
                
                  ${isMovies ? styles.hovered : styles.notHovered}
                  `}
                onMouseOver={() => setIsMovies(true)}
                onMouseOut={() => setIsMovies(false)}>
                <Link
                  className={` text-[1rem] leading-4 tracking-wider uppercase flex gap-[0.375rem] items-center`}
                  href={`/movies`}>
                  Movies
                  {isMovies ? <AiFillCaretUp className={``} /> : <AiFillCaretDown className={``} />}
                </Link>
              </li>
              {/* --- Some Misinformations about the 'route' */}
              {isMovies ? (
                <div>
                  <MoviesDetails />
                </div>
              ) : (
                ''
              )}

              {/* --- route-5 ('/games') Redirects to '/games' */}
              <li
                className={` 
                ${
                  pathname === '/games' || (pathname.startsWith('/games' + '/') && '/games' !== '/')
                    ? styles.special
                    : styles.regular
                }
                
                  ${isGames ? styles.hovered : styles.notHovered}
                  `}
                onMouseOver={() => setIsGames(true)}
                onMouseOut={() => setIsGames(false)}>
                <Link
                  className={` text-[1rem] leading-4 tracking-wider uppercase flex gap-[0.375rem] items-center`}
                  href={`/games`}>
                  Game Reviews
                  {isGames ? <AiFillCaretUp className={``} /> : <AiFillCaretDown className={``} />}
                </Link>
              </li>

              {/* Some Misinformations about the 'route' */}
              {isGames ? (
                <div>
                  <GamesDetails />
                </div>
              ) : (
                ''
              )}

              {/* --- route-5 ('/cryptos') Redirects to '/cryptos' */}
              <li
                className={` 
                ${
                  pathname === '/cryptos' || (pathname.startsWith('/cryptos' + '/') && '/cryptos' !== '/')
                    ? styles.special
                    : styles.regular
                }
                
                  ${isCryptos ? styles.hovered : styles.notHovered}
                  `}
                onMouseOver={() => setIsCryptos(true)}
                onMouseOut={() => setIsCryptos(false)}>
                <Link
                  className={` text-[1rem] leading-4 tracking-wider uppercase flex gap-[0.375rem] items-center`}
                  href={`/cryptos`}>
                  Cyptos
                  {isCryptos ? <AiFillCaretUp className={``} /> : <AiFillCaretDown className={``} />}
                </Link>
              </li>
              {/* --- Some Misinformations about the 'route' */}
              {isCryptos ? (
                <div>
                  <CryptosDetails />
                </div>
              ) : (
                ''
              )}
            </ul>
          </div>

          {/* C. Call-To-Action  */}
          <div className={`flex items-center gap-[0.625rem]`}>
            <Link href={`/advertise-with-us`} className={`text-[1.125rem] flex items-center gap-3`}>
              <FaPaperPlane className={`text-[#fcfdfd] text-[20px]`} />
              Brand Collaboration
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopNavigationBar;
