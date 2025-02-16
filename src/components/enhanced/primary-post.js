'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { truncateDescription, truncateDescriptionMedium, truncateTitle } from '@/utils/truncations';
import { enhancedlastUpdate, lastUpdate } from '@/utils/date-functions';
import { FaArrowUpRightFromSquare, FaBookmark, FaRegBookmark, FaLink, FaCopy } from 'react-icons/fa6';
import { IoIosMore } from 'react-icons/io';
import { PiArrowFatDownBold, PiArrowFatDownFill, PiArrowFatUpFill, PiArrowFatUpBold, PiDotOutlineFill } from 'react-icons/pi';

const EnhancedPrimaryPost = ({ href, alt, src, title, description, time, author, authorImageURL }) => {
  const [isBookMarked, setIsBookMarked] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [Upvotes, setUpvotes] = useState(673);
  const baseURL = 'http://localhost:4000';

  // Copy Link (Current URL Path) to user's clipboard
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

  // Change the bookmark Icon on every click
  const setBookmark = () => {
    setIsBookMarked(!isBookMarked);
  };

  // Upvote Handler
  const handleUpvote = () => {
    setIsUpvoted(true);
    setUpvotes(Upvotes + 1);
    setIsDownvoted(false);
  };

  // Downvote Handler
  const handleDownvote = () => {
    setIsDownvoted(!isDownvoted);
    setUpvotes(Upvotes - 1);
    setIsUpvoted(false);
  };

  return (
    <>
      <div className={`relative`}>
        <div
          className={`${styles.postWrapper} bg-gradient-to-b from-[#333333] to-transparent p-[1rem] rounded-t-2xl border-t-[1.25px] border-t-[#a8b3cf] block`}>
          {/* 1. Post Header Content */}
          <div className={`flex justify-between items-center`}>
            {/* Author profile & Updated time */}
            <div className={`flex items-center gap-2`}>
              {/* author image */}
              <Image
                className={`rounded-full m-0 p-0`}
                src={baseURL + authorImageURL}
                alt={''}
                width={36}
                height={36}
                objectFit='cover'
              />

              {/* author-name & read-time/updated date  */}
              <div className={`flex flex-col`}>
                <h4 className={`${styles.AuthorName}`}>{author}</h4>
                <h4 className={`${styles.Time}`}>
                  4m read time <PiDotOutlineFill /> {enhancedlastUpdate(time)}
                </h4>
              </div>
            </div>

            {/* go-to button and See more actions button */}
            <div className={`flex items-center gap-4`}>
              <Link href={href}>
                <span>
                  <FaArrowUpRightFromSquare className={`text-[18px]`} />
                </span>
              </Link>
              <span>
                <IoIosMore className={`text-[24px]`} />
              </span>
            </div>
          </div>
          {/* ####### */}

          {/* 2. Post Main Content */}
          <div className={`${styles.TitleImage}`}>
            <div className={`${styles.TitleDescriptionTag}`}>
              {/* Title */}
              <h1 className={`${styles.Title}`}>{truncateTitle(title)}</h1>
              {/* Descriptions */}
              <p className={`${styles.DescriptionMd} hidden`}>{truncateDescriptionMedium(description)}</p>
            </div>

            {/* Image */}
            <div className={`${styles.ImageWrapper}`}>
              <Image
                className={`${styles.Image}`}
                width={10000}
                height={10000}
                priority={true}
                alt={alt}
                src={src}
              />
            </div>

            {/* Descriptions */}
            <p className={`${styles.Description} md:hidden`}>{truncateDescription(description)}</p>
          </div>
          {/* ####### */}

          {/* 3. Post Footer Content */}
          <div className={`flex items-center gap-[0.5rem] mt-[0.625rem]`}>
            {/* Upvote/Downvote */}
            <div
              className={`flex items-center gap-3 rounded-[0.5rem] bg-[#333333]/90 px-[6px] h-9 divide-x-[1.5px] divide-[#4f4f4f]`}>
              <span onClick={() => handleUpvote()} className={`flex items-center gap-1 font-primary font-bold`}>
                {isUpvoted ? (
                  <PiArrowFatUpFill className={`${styles.UpvoteDownvote}`} />
                ) : (
                  <PiArrowFatUpBold className={`${styles.UpvoteDownvote}`} />
                )}
                {Upvotes}
              </span>
              <span onClick={() => handleDownvote()} className={`flex items-center`}>
                {isDownvoted ? (
                  <PiArrowFatDownFill className={`${styles.UpvoteDownvote} ml-2`} />
                ) : (
                  <PiArrowFatDownBold className={`${styles.UpvoteDownvote} ml-2`} />
                )}
              </span>
            </div>

            {/* Bookmark */}
            <span
              onClick={() => setBookmark()}
              className={`bg-[#333333]/90 flex items-center justify-center px-[8px] rounded-[6px] h-9 leading-[1.125rem]`}>
              {isBookMarked ? <FaBookmark className={`text-[20px]`} /> : <FaRegBookmark className={`text-[20px]`} />}
            </span>

            {/* Link & Read-post */}
            <div className={`flex items-center gap-2`}>
              <span
                onClick={() => copyLinkToClipboard()}
                className={`bg-[#333333]/90 flex items-center justify-center px-[8px] rounded-[6px] h-9 leading-[1.125rem] `}>
                <FaLink className={`text-[22px]`} />
              </span>

              <Link href={href}>
                <span className={`${styles.GoBtn}`}>View post</span>
              </Link>
            </div>
          </div>
          {/* ####### */}
        </div>
        {isLinkCopied && (
          <div
            className={`absolute w-fit inline-flex justify-center items-center top-[0.5rem] left-0 right-0 mx-auto bg-[#252525] rounded-[6px]`}>
            <span className={`flex items-center gap-1 text-[#fcfdfd] text-[15px] font-ternaryMedium px-[0.75rem] py-[6px]`}>
              <FaCopy /> Link Copied!
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default EnhancedPrimaryPost;
