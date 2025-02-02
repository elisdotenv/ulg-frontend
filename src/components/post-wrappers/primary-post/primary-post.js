'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { FaArrowUpRightFromSquare, FaLink, FaCopy } from 'react-icons/fa6';
import { IoIosMore } from 'react-icons/io';
import { PiDotOutlineFill } from 'react-icons/pi';
import { updatedTimeFn } from '@/utils/date/date-functions';
import { truncateDescription, truncateTitle } from '@/utils/truncate/truncations';

export default function PrimaryPost({
  gotohref,
  alternativeText,
  imageURL,
  postTitle,
  postDescription,
  updatedTime,
  authorName,
  authorImageURL,
  authorLink,
}) {
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isBookMarked, setBookmark] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [upvotes, setUpvotes] = useState(674);

  // Handling clipboard action without causing hydration issues
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

  // Upvote Handler
  const handleUpvote = () => {
    if (isUpvoted) {
      // Remove upvote if already upvoted
      setUpvotes(upvotes - 1);
    } else {
      // Add upvote if not upvoted
      setUpvotes(upvotes + 1);
    }
    setIsUpvoted(!isUpvoted); // Toggle upvote state
  };

  return (
    <>
      <div className={`relative`}>
        <div
          className={`${styles.postWrapper} bg-gradient-to-b from-[#14171b] to-transparent px-[1rem] py-[1.5rem] rounded-t-2xl border-t-[1.25px] block`}>
          <div className={`flex justify-between items-center mb-[0.5rem]`}>
            <div className={`flex items-center gap-2`}>
              <Image className={`rounded-full m-0 p-0 object-cover`} src={authorImageURL} alt={''} width={40} height={40} />
              <div className={`flex flex-col`}>
                <h4 className={`${styles.AuthorName}`}>{authorName}</h4>
                <h4 className={`${styles.updatedTime}`}>
                  2m read time <PiDotOutlineFill />
                  {updatedTimeFn(updatedTime)}
                </h4>
              </div>
            </div>

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

          <div className={`${styles.TitleImage}`}>
            <div className={`${styles.TitleDescriptionTag}`}>
              <h1 className={`${styles.Title}`}>{truncateTitle(postTitle)}</h1>
              <p className={`${styles.DescriptionMd} hidden`}>{truncateDescription(postDescription)}</p>
            </div>

            <div className={`${styles.ImageWrapper} mt-[1rem]`}>
              <Image
                className={`${styles.Image}`}
                width={10000}
                height={10000}
                priority={true}
                alt={alternativeText}
                src={imageURL}
              />
            </div>

            <p className={`${styles.Description} md:hidden`}>{truncateDescription(postDescription)} </p>
          </div>

          <div className={`flex items-center gap-[0.5rem] mt-[1rem]`}>
            <div
              className={`flex items-center gap-3 rounded-[0.75rem] bg-[#a8b3cf0b] px-[16px] py-[22px] h-9 divide-x-[1.5px] divide-[#a8b3cf92]`}>
              <span onClick={handleUpvote} className={`flex items-center gap-1 font-primary font-bold text-[#a8b3cf]`}>
                {isUpvoted ? (
                  <span className={`${styles.UpvoteDownvote}`}>
                    <Image className={`w-[30px] h-[30px]`} width={0} height={0} src={'/upvote.svg'} alt={'Logo'} />
                  </span>
                ) : (
                  <span className={`${styles.UpvoteDownvote}`}>
                    <Image className={`w-[30px] h-[30px]`} width={0} height={0} src={'/novote.svg'} alt={'Logo'} />
                  </span>
                )}
                {upvotes}
              </span>

              <span className={`flex items-center`}>
                <span className={`${styles.UpvoteDownvote} ml-2`}>
                  <Image className={`w-[30px] h-[30px]`} width={0} height={0} src={'/chat.svg'} alt={'chat-svg-icon'} />
                </span>
              </span>
            </div>

            {/* --- Bookmarkings */}
            <span
              onClick={() => setBookmark()}
              className={`bg-[#a8b3cf0b] flex items-center justify-center px-[16px] py-[22px] rounded-[0.75rem] h-9 leading-[1.125rem]`}>
              {isBookMarked ? (
                <span className={`text-[32px] text-[#a8b3cf]`}>
                  <Image className={`w-[30px] h-[30px]`} width={0} height={0} src={'/bookmark.svg'} alt={'bookmark-icon'} />
                </span>
              ) : (
                <span className={`text-[32px] text-[#a8b3cf]`}>
                  <Image className={`w-[30px] h-[30px]`} width={0} height={0} src={'/nobookmark.svg'} alt={'no-bookmark-icon'} />
                </span>
              )}
            </span>

            {/* --- Save Link to clipboard */}
            <div className={`flex items-center gap-2`}>
              <span
                onClick={copyLinkToClipboard}
                className={`bg-[#a8b3cf0b] flex items-center justify-center px-[16px] py-[22px] rounded-[0.75rem] h-9 leading-[1.125rem]`}>
                <FaLink className={`text-[28px] text-[#a8b3cf]`} />
              </span>
            </div>
          </div>
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
