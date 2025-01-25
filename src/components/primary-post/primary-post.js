'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { FaArrowUpRightFromSquare, FaBookmark, FaRegBookmark, FaLink, FaCopy } from 'react-icons/fa6';
import { IoIosMore } from 'react-icons/io';
import { PiArrowFatDownBold, PiArrowFatDownFill, PiArrowFatUpFill, PiArrowFatUpBold, PiDotOutlineFill } from 'react-icons/pi';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
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
              className={`flex items-center gap-3 rounded-[0.5rem] bg-[#333333]/90 px-[6px] h-9 divide-x-[1.5px] divide-[#a8b3cf92]`}>
              <span onClick={() => handleUpvote()} className={`flex items-center gap-1 font-primary font-bold text-[#a8b3cf]`}>
                {isUpvoted ? (
                  <PiArrowFatUpFill className={`${styles.UpvoteDownvote}`} />
                ) : (
                  <PiArrowFatUpBold className={`${styles.UpvoteDownvote}`} />
                )}
                {Upvotes}
              </span>

              {/* () ---> Handle Chat Functionality */}
              <span className={`flex items-center`}>
                <HiChatBubbleBottomCenterText className={`${styles.UpvoteDownvote} ml-2`} />
              </span>
            </div>

            {/* --- Bookmark */}
            <span
              onClick={() => setBookmark()}
              className={`bg-[#333333]/90 flex items-center justify-center px-[8px] rounded-[6px] h-9 leading-[1.125rem]`}>
              {isBookMarked ? (
                <FaBookmark className={`text-[20px] text-[#a8b3cf]`} />
              ) : (
                <FaRegBookmark className={`text-[20px] text-[#a8b3cf]`} />
              )}
            </span>

            {/* --- Link & Read-post */}
            <div className={`flex items-center gap-2`}>
              <span
                onClick={() => copyLinkToClipboard()}
                className={`bg-[#333333]/90 flex items-center justify-center px-[8px] rounded-[6px] h-9 leading-[1.125rem] `}>
                <FaLink className={`text-[22px] text-[#a8b3cf]`} />
              </span>

              <Link href={gotohref}>
                <span className={`${styles.GoBtn}`}>View post</span>
              </Link>
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
