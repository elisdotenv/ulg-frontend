import Image from 'next/image';
import Link from 'next/link';

const AuthorBiography = ({ authorBioLink, authorName, authorUserName, authorDpURL, authorBio }) => {
  return (
    <>
      <div className={`border border-[#a8b3cf]/80 px-[1.25em] py-[.8375em] rounded-[.5em] mt-[1em]`}>
        <div className={`flex items-center gap-[1rem]`}>
          <Image
            className={`rounded-full m-0 p-0`}
            src={authorDpURL}
            alt={''}
            width={48}
            height={48}
            objectFit='cover'
            layout='intrinsic'
          />
          <div className={`flex flex-col`}>
            <Link href={authorBioLink} className={`text-light no-underline leading-[21.5px] font-medium text-[1.05rem] `}>
              {authorName}
            </Link>
            <Link href={authorBioLink} className={`text-[#a8b3cf] no-underline leading-[21.5px] font-[350] text-[0.9375rem] `}>
              {authorUserName}
            </Link>
          </div>
        </div>
        <p className={`italic text-light leading-7`}>{authorBio}</p>
      </div>
    </>
  );
};

export default AuthorBiography;
