import { formatPostedDate } from '@/utils/date/date-functions';
import Image from 'next/image';
import Link from 'next/link';
import { FaFileSignature } from 'react-icons/fa6';

/* --- 1. Renders On Mobile Devices Only */
export const AuthorProfileMobile = ({ authorLink, authorImage, authorName }) => {
  return (
    <>
      {/* Author Profile Element */}
      <div className={`flex items-center`}>
        <div className={`flex items-center gap-[10px]`}>
          {/* Profile Image Element */}
          <Link href={authorLink}>
            <Image
              className={`rounded-full m-0 p-0`}
              src={authorImage}
              alt={'author-image-alt'}
              width={36}
              height={36}
              objectFit='cover'
            />
          </Link>
          <div className={`flex items-center gap-1`}>
            {/* Author Name Element */}
            <span className={`text-[0.725rem] font-semibold font-primary text-[#c9c3b8]`}>By</span>
            <Link href={authorLink} className={`leading-[21.5px] text-[#c9c3b8] text-[0.85rem] font-ternaryBold`}>
              {authorName.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

/* --- 2. Renders on Medium and Large Screens Devices */
export const AuthorProfileDatePostedTop = ({ authorLink, authorImage, authorName, datePosted }) => {
  return (
    <>
      {/* Author Profile Element */}
      <div className={`w-fit lg:flex items-center justify-between gap-[1rem] hidden`}>
        {/* Profile Image Element */}
        <Link className={`flex items-center gap-3`} href={authorLink}>
          <Image
            className={`rounded-full m-0 p-0`}
            src={authorImage}
            alt={'author-image-alt'}
            width={36}
            height={36}
            objectFit='cover'
          />

          <span className={`text-[#d8d8d8] leading-[21.5px] text-[0.725rem] font-primary font-semibold no-underline`}>
            By {authorName}
          </span>

          {/* Separator */}
          <span>&minus;</span>

          {/* Date Posted Element */}
          <div className={`flex gap-1 items-center`}>
            <h6 className={`lg:text-[0.725rem] lg:font-semibold lg:font-primary lg:text-[#d8d8d8] lg:block hidden`}>Published</h6>
            <h6 className={`text-[0.725rem] font-semibold font-primary text-[#d8d8d8]`}>{formatPostedDate(datePosted)}</h6>
          </div>
        </Link>
      </div>
    </>
  );
};

export const MobileDatePosted = ({ datePosted }) => {
  return (
    <>
      {/* Date Posted Element */}
      <div className={`flex items-center gap-1 lg:hidden`}>
        <FaFileSignature className={`text-[#fcfdfd] text-[1.5rem]`} />
        <h6 className={`text-[0.825rem] font-semibold font-primary text-[#c9c3b8]`}>Updated</h6>
        <h6 className={`text-[0.825rem] font-semibold font-primary text-[#c9c3b8]`}>{formatPostedDate(datePosted)}</h6>
      </div>
    </>
  );
};
