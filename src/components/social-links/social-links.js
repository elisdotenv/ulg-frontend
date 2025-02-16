'use client';
import { useState } from 'react';
import Link from 'next/link';
import { BsWhatsapp, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTelegram, BiLogoTiktok } from 'react-icons/bi';
import { IoAdd, IoClose } from 'react-icons/io5';

export const SocialLinks = () => {
  return (
    <>
      {/* Social Links */}
      <div className={`flex items-center space-x-2 border-emerald-500 border-[2px] p-[10px]`}>
        {/* Add respective social link address inside of href='' in <Link>  */}
        <Link href={`/`}>
          <div className={`bg-[#FF0000] text-white p-[10px] text-[1.25rem]`}>
            <BsYoutube />
          </div>
        </Link>
        <Link href={`/`}>
          <div className={`bg-[#14171A] text-white p-[10px] text-[1.25rem]`}>
            <BsTwitterX />
          </div>
        </Link>
        <Link href={`/`}>
          <div className={`bg-[#25D366] text-white p-[10px] text-[1.25rem]`}>
            <BsWhatsapp />
          </div>
        </Link>
      </div>
    </>
  );
};

export const SocialLinksFooter = () => {
  const [icons, setIcons] = useState(false);
  console.log(icons);
  return (
    <>
      <div className={`w-full p-[10px] flex items-center justify-center space-x-4 bg-violet-600 relative mb-[2.5em]`}>
        {/* Add respective social link address inside of href='' in <Link>  */}
        <div>
          <p className={`text-light`}>Let's connect</p>
        </div>

        {/* Vertical Rule Divider */}
        <div className={`bg-light w-[5px] h-full`}></div>

        {/* Icons */}
        <div className={`flex items-center space-x-2`}>
          {/* Youtube */}
          <Link href={`/`}>
            <div className={`bg-[#FF0000] text-white p-[10px] text-[1.25rem] rounded`}>
              <BsYoutube />
            </div>
          </Link>

          {/* Twitter X */}
          <Link href={`/`}>
            <div className={`bg-[#14171A] text-white p-[10px] text-[1.25rem] rounded`}>
              <BsTwitterX />
            </div>
          </Link>

          {/* Whatsapp */}
          <Link href={`/`}>
            <div className={`bg-[#25D366] text-white p-[10px] text-[1.25rem] rounded`}>
              <BsWhatsapp />
            </div>
          </Link>

          {/* Add */}
          <div onClick={() => setIcons(!icons)} className={`bg-white text-black p-[10px] text-[1.25rem] rounded`}>
            {icons ? <IoClose /> : <IoAdd />}
          </div>

          <div className={`gap-2 absolute -bottom-[1.75em] right-[2.15em] ${icons ? 'flex' : 'hidden'}`}>
            {/* Linked in */}
            <Link href={`/`}>
              <div className={`bg-[#0077B5] text-white p-[10px] text-[1.25rem] rounded`}>
                <BiLogoLinkedin />
              </div>
            </Link>

            {/* Tiktok */}
            <Link href={`/`}>
              <div className={`bg-dark text-white p-[10px] text-[1.25rem] rounded`}>
                <BiLogoTiktok />
              </div>
            </Link>

            {/* Mail */}
            <Link href={`/`}>
              <div className={`bg-[#0088CC] text-white p-[10px] text-[1.25rem] rounded`}>
                <BiLogoTelegram />
              </div>
            </Link>

            {/* Facebook */}
            <Link href={`/`}>
              <div className={`bg-[#1877F2] text-white p-[10px] text-[1.25rem] rounded`}>
                <BiLogoFacebook />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
