'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
/*import { FaArrowUpRightFromSquare, FaBookmark, FaRegBookmark, FaLink, FaCopy } from 'react-icons/fa6';*/
import { FaArrowUpRightFromSquare, FaLink, FaCopy } from 'react-icons/fa6';
import { IoIosMore } from 'react-icons/io';
/*import { PiArrowFatDownBold, PiArrowFatDownFill, PiArrowFatUpFill, PiArrowFatUpBold, PiDotOutlineFill } from 'react-icons/pi';*/
import { PiDotOutlineFill } from 'react-icons/pi';
/*import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';*/
import { updatedTimeFn } from '@/utils/date/date-functions';
import { truncateDescription, truncateTitle } from '@/utils/truncate/truncations';

export default function PrimaryPost({
  gotohref,
  alternativeText,
  imageURL,
  postTitle,
  postDescription,
  updatedTime,
  authorname,
  authorImageURL,
  authorLink,
}) {
  // --- State variables and dynamic data
  const [isBookMarked, setIsBookMarked] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [Upvotes, setUpvotes] = useState(674);

  // --- Base URL
  const baseURL = 'https://tranquil-morning-50f1598ff6.strapiapp.com';

  // ()--- Copy post link (Current URL Path) to user's clipboard
  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setIsLinkCopied(true);
        setTimeout(() => {
          setIsLinkCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  };

  // ()--- Change the bookmark Icon on every click
  const setBookmark = () => {
    setIsBookMarked(!isBookMarked);
  };

  // ()--- Upvote Handler
  const handleUpvote = () => {
    setIsUpvoted(true);
    setUpvotes(Upvotes + 1);
    setIsDownvoted(false);
  };

  // ()--- Downvote Handler
  const handleDownvote = () => {
    setIsDownvoted(!isDownvoted);
    setUpvotes(Upvotes - 1);
    setIsUpvoted(false);
  };

  return (
    <>
      <div className={`relative`}>
        <div
          className={`${styles.postWrapper} bg-gradient-to-b from-[#14171b] to-transparent px-[1rem] py-[1.5rem] rounded-t-2xl border-t-[1.25px] block`}>
          {/* 1. >>> Post Header Content */}
          <div className={`flex justify-between items-center mb-[0.5rem]`}>
            {/* --- Author profile & Updated time */}
            <div className={`flex items-center gap-2`}>
              {/* --- author image */}
              <Image
                className={`rounded-full m-0 p-0`}
                src={authorImageURL}
                alt={''}
                width={40}
                height={40}
                objectFit='cover'
                layout='intrinsic'
              />

              {/* --- author-name & read-time/updated date  */}
              <div className={`flex flex-col`}>
                <h4 className={`${styles.AuthorName}`}>{authorname}</h4>
                <h4 className={`${styles.updatedTime}`}>
                  2m read time <PiDotOutlineFill />
                  {updatedTimeFn(updatedTime)}
                </h4>
              </div>
            </div>

            {/* --- go-to button and See more actions button */}
            <div className={`flex items-center gap-4`}>
              <Link href={gotohref}>
                <span>
                  <FaArrowUpRightFromSquare className={`text-[18px] text-[#a8b3cf]`} />
                </span>
              </Link>
              <span>
                <IoIosMore className={`text-[24px] text-[#a8b3cf]`} />
              </span>
            </div>
          </div>
          {/* ####### */}

          {/* 2. >>> Post Main Content */}
          <div className={`${styles.TitleImage}`}>
            <div className={`${styles.TitleDescriptionTag}`}>
              {/* --- Title */}
              <h1 className={`${styles.Title}`}>{truncateTitle(postTitle)}</h1>

              {/* --- Descriptions */}
              <p className={`${styles.DescriptionMd} hidden`}>{truncateDescription(postDescription)}</p>
            </div>

            {/* --- Image */}
            <div className={`${styles.ImageWrapper} mt-[1rem]`}>
              <Image
                className={`${styles.Image}`}
                width={10000}
                height={10000}
                layout='fixed'
                priority={true}
                alt={alternativeText}
                src={imageURL}
              />
            </div>

            {/* --- Descriptions */}
            <p className={`${styles.Description} md:hidden`}>{truncateDescription(postDescription)}</p>
          </div>
          {/* ####### */}

          {/* 3. >>> Post Footer Content */}
          <div className={`flex items-center gap-[0.5rem] mt-[1rem]`}>
            {/* --- Upvote/Chat */}
            <div
              className={`flex items-center gap-3 rounded-[0.5rem] bg-[#a8b3cf0b] px-[14px] py-[16px] h-9 divide-x-[1.5px] divide-[#a8b3cf92]`}>
              <span onClick={() => handleUpvote()} className={`flex items-center gap-1 font-primary font-bold text-[#a8b3cf]`}>
                {isUpvoted ? (
                  <span className={`${styles.UpvoteDownvote}`}>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-7 h-7 pointer-events-none'>
                      <path
                        d='M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z'
                        fill='currentcolor'
                        fillRule='evenodd'></path>
                    </svg>
                  </span>
                ) : (
                  <span className={`${styles.UpvoteDownvote}`}>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-7 h-7 pointer-events-none'>
                      <path
                        d='M9.456 4.216l-5.985 7.851c-.456.637-.583 1.402-.371 2.108l.052.155a2.384 2.384 0 002.916 1.443l2.876-.864.578 4.042a2.384 2.384 0 002.36 2.047h.234l.161-.006a2.384 2.384 0 002.2-2.041l.576-4.042 2.877.864a2.384 2.384 0 002.625-3.668L14.63 4.33a3.268 3.268 0 00-5.174-.115zm3.57.613c.16.114.298.253.411.411l5.897 7.736a.884.884 0 01-.973 1.36l-3.563-1.069a.884.884 0 00-1.129.722l-.678 4.75a.884.884 0 01-.875.759h-.234a.884.884 0 01-.875-.76l-.679-4.75a.884.884 0 00-1.128-.72l-3.563 1.068a.884.884 0 01-.973-1.36L10.56 5.24a1.767 1.767 0 012.465-.41z'
                        fill='currentcolor'
                        fillRule='evenodd'></path>
                    </svg>
                  </span>
                )}
                {Upvotes}
              </span>

              {/* () ---> Handle Chat Functionality */}
              <span className={`flex items-center`}>
                <span className={`${styles.UpvoteDownvote} ml-2`}>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-7 h-7 pointer-events-none'>
                    <path
                      d='M8.084 3.217a35.447 35.447 0 017.05-.078l.782.078.279.031c1.089.121 1.885.372 2.606.828a4.516 4.516 0 011.664 1.86c.336.69.5 1.423.53 2.361l.005.321v3.975a4.493 4.493 0 01-3.545 4.392l-.207.04-2.089.346-2.86 2.992-.147.135c-.986.789-2.399.623-3.205-.324-.532-.625-.616-1.34-.51-2.29l.029-.224.038-.254.033-.187-1.332-.189a5.011 5.011 0 01-1.677-.55l-.253-.146-.243-.16a4.777 4.777 0 01-1.491-1.721 4.935 4.935 0 01-.532-1.972l-.009-.3V8.618c0-1.096.162-1.915.535-2.683.375-.77.94-1.4 1.664-1.859.649-.41 1.359-.655 2.288-.788l.318-.04.28-.031zm7.666 1.491a33.948 33.948 0 00-6.752-.075l-.748.075-.28.031c-.915.102-1.481.297-1.97.606a3.016 3.016 0 00-1.116 1.247c-.228.468-.357.989-.38 1.76l-.004.266v3.563c0 .577.134 1.116.375 1.587.242.471.592.874 1.024 1.18.37.263.801.453 1.276.554l.242.043 1.98.283c.339.048.457.096.575.175.119.078.262.187.27.386l-.002.024-.013.08-.164.741-.064.333c-.111.63-.167 1.332.09 1.634.263.309.7.39 1.037.187l.089-.062 2.998-3.135.13-.101.092-.063.077-.04.08-.03.035-.01.087-.02L17 15.545a2.993 2.993 0 002.495-2.77l.005-.182V8.618c0-.921-.13-1.506-.384-2.026A3.016 3.016 0 0018 5.345c-.44-.278-.943-.464-1.706-.572l-.265-.034-.279-.03zm-.55 6.294l.093.005c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005c-.398-.044-.707-.36-.707-.745 0-.38.301-.694.691-.744l.109-.007h6.4zm0-3.5l.093.004c.398.044.707.36.707.746 0 .38-.301.693-.691.743l-.109.007H8.8l-.093-.005C8.309 8.953 8 8.637 8 8.252c0-.38.301-.694.691-.744l.109-.007h6.4z'
                      fill='currentcolor'
                      fillRule='evenodd'></path>
                  </svg>
                </span>
              </span>
            </div>

            {/* --- Bookmark */}
            <span
              onClick={() => setBookmark()}
              className={`bg-[#a8b3cf0b] flex items-center justify-center px-[12px] py-[16px] rounded-[6px] h-9 leading-[1.125rem]`}>
              {isBookMarked ? (
                <span className={`text-[30px] text-[#a8b3cf]`}>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-7 h-7 pointer-events-none'>
                    <path
                      d='M15.874 3H8.126a3.357 3.357 0 00-3.35 3.152l-.772 12.77c-.028.459.106.915.38 1.286l.101.125c.666.764 1.818.9 2.647.287L12 17.023l4.868 3.597a1.964 1.964 0 003.128-1.7l-.771-12.767A3.358 3.358 0 0015.874 3zm0 1.5c.981 0 1.794.764 1.854 1.744l.771 12.768a.464.464 0 01-.74.402l-5.207-3.848a.929.929 0 00-1.104 0L6.24 19.414a.464.464 0 01-.74-.402l.773-12.768c.06-.98.872-1.744 1.853-1.744h7.748z'
                      fill='currentcolor'
                      fillRule='evenodd'></path>
                  </svg>
                </span>
              ) : (
                <span className={`text-[30px] text-[#a8b3cf]`}>
                  <svg
                    width='1em'
                    height='1em'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-7 h-7 pointer-events-none'>
                    <path
                      d='M15.874 3H8.126a3.357 3.357 0 00-3.35 3.152l-.772 12.77c-.028.459.106.915.38 1.286l.101.125c.666.764 1.818.9 2.647.287L12 17.023l4.868 3.597a1.964 1.964 0 003.128-1.7l-.771-12.767A3.358 3.358 0 0015.874 3zm0 1.5c.981 0 1.794.764 1.854 1.744l.771 12.768a.464.464 0 01-.74.402l-5.207-3.848a.929.929 0 00-1.104 0L6.24 19.414a.464.464 0 01-.74-.402l.773-12.768c.06-.98.872-1.744 1.853-1.744h7.748z'
                      fill='currentcolor'
                      fillRule='evenodd'></path>
                  </svg>
                </span>
              )}
            </span>

            {/* --- Link & Read-post */}
            <div className={`flex items-center gap-2`}>
              <span
                onClick={() => copyLinkToClipboard()}
                className={`bg-[#a8b3cf0b] flex items-center justify-center px-[12px] py-[16px] rounded-[6px] h-9 leading-[1.125rem] `}>
                <FaLink className={`text-[26px] text-[#a8b3cf]`} />
              </span>

              {/* <Link href={gotohref}>
                <span className={`${styles.GoBtn}`}>View post</span>
              </Link>*/}
            </div>
          </div>
          {/* ####### */}
        </div>
        {isLinkCopied && (
          <div
            className={`absolute w-fit inline-flex justify-center items-center top-[0.5rem] left-0 right-0 mx-auto bg-[#252525] rounded-[6px]`}>
            <span className={`flex items-center gap-1 text-[#e6f6f6] text-[15px] font-ternaryMedium px-[0.75rem] py-[6px]`}>
              <FaCopy /> Link Copied!
            </span>
          </div>
        )}
      </div>
    </>
  );
}
