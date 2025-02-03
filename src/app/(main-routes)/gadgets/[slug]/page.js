'use client';
import FilteredCoverImage from '@/ui/filtered-cover-image/filtered-cover-image';
import styles from './page.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import FilteredCoverImageLg from '@/ui/filtered-cover-image-lg/filtered-cover-image-lg';
import Link from 'next/link';

/* Icons */
import { GoZap } from 'react-icons/go';
import { FaBookmark, FaRegBookmark, FaCopy } from 'react-icons/fa6';
import { BsPeopleFill } from 'react-icons/bs';
import { RiShareForwardFill, RiFacebookBoxFill } from 'react-icons/ri';
import { BsTwitterX, BsWhatsapp, BsInstagram, BsLink45Deg } from 'react-icons/bs';
import { truncateTitle } from '@/utils/truncate/truncations';

export default function GadgetsPageSlug({ params }) {
  const slug = React.use(params).slug;
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [openShare, setOpenShare] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // --- Close Share Button Dropdown Function
  const closeShareDropDown = (e) => {
    setOpenShare(false);
  };

  // --- Open/Close Share Button Dropdown Function
  const showShareItems = () => {
    setOpenShare(!openShare);
  };

  // --- Copy Link (Current URL Path) to user's clipboard
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

  // --- Fetching Posts and Posts Data
  http: useEffect(() => {
    document.body.addEventListener('click', closeShareDropDown);

    /* --- Async Function to Fetch All the Posts (Filtering is done after fetching all ) */
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          `https://tranquil-morning-50f1598ff6.strapiapp.com/api/posts?filters[slug][$eq]=${slug}&populate=*`
        );
        const currentPost = data.data[0];
        setPost(currentPost);

        // --- Fetch Related Posts
        if (currentPost) {
          const categoryId = currentPost.attributes.categories.data[0].id;
          console.log(`Category Id 👙`);
          console.log(categoryId);
          const relatedResponse = await axios.get(
            `https://tranquil-morning-50f1598ff6.strapiapp.com/api/posts?filters[categories][id][$eq]=${categoryId}&filters[slug][$ne]=${slug}&populate=*`
          );
          setRelatedPosts(relatedResponse.data.data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) fetchPost();
  }, [slug]);

  // --- While Loading Post's Data
  if (isLoading)
    return (
      <div className={`w-screen min-h-screen flex items-center justify-center`}>
        <p>Loading...</p>
      </div>
    );

  // --- On Error Encounter
  if (error) return <p>An Error has occurred: {error}</p>;
  if (!post) return null;

  // --- Post's Properties (State) on Level-1
  const {
    title,
    description,
    author,
    authorimage,
    coverimage,
    keypoints,
    textblockone,
    textblocktwo,
    note,
    tags,
    refsource,
    updatedAt,
  } = post?.attributes;

  /* --- Cover-Image and Author-Image */
  const baseURL = 'https://tranquil-morning-50f1598ff6.strapiapp.com/';
  const imageURL = coverimage?.data?.attributes?.url;
  const authorImageURL = authorimage?.data?.attributes?.url ? `${baseURL}${authorimage.data.attributes.url}` : '';

  const primaryRelatedPosts = relatedPosts.slice(0, 3);
  const secondaryRelatedPosts = relatedPosts.slice(3, 9);
  console.log(`Sliced Related Posts`);
  console.log(primaryRelatedPosts);
  console.log(secondaryRelatedPosts);

  return (
    <div className='col-span-12 mx-auto grid grid-cols-12 lg:max-w-[1200px] lg:w-full min-h-screen gap-[0.75rem] bg-[#252525] relative'>
      {/* --- [MOBILE SCREENS] - Post Tag Element */}
      <div className='px-[1rem] pt-[5rem] col-span-12 lg:hidden w-full h-full md:col-span-10 md:col-start-2'>
        <span className='bg-transparent font-semibold text-white text-[0.875rem] border border-[#a4a4a4] rounded px-[12px] py-[3px] inline-block'>
          {tags[0].tags}
        </span>
      </div>
      {/* -#####- */}

      {/* --- [MOBILE SCREENS] - Post Title Element */}
      <div className='px-[1rem] col-span-12 lg:hidden w-full h-full md:col-span-10 md:col-start-2'>
        <h1 className='font-quadraSemiBold tracking-wide text-[2.125rem] leading-[1.1]  text-[#fffdfa]'>{title}</h1>
      </div>
      {/* -#####- */}

      {/* --- [MOBILE SCREENS] - Post Description Element */}
      <div className='px-[1rem] lg:hidden col-span-12 block m-0 md:col-span-10 md:col-start-2'>
        <p className='text-[#fffdfa] font-normal text-[1.25rem] leading-[1.25]'>{description}</p>
      </div>
      {/* -#####- */}

      {/* --- [MOBILE SCREENS] - Post Cover Image Element */}
      <div className='col-span-12 lg:hidden border-b-[2px] border-b-[#1e2522] md:col-span-10 md:col-start-2'>
        <FilteredCoverImage imageURL={imageURL} alternativetext={coverimage?.data?.attributes?.alternativeText || ''} />
      </div>
      {/* -#####- */}

      {/* --- [MEDIUM & LARGE SCREENS] - Header Element (Post Title, Cover Image, Related Posts Section) */}
      <div
        className={`hidden bg-[#333333] py-[1.25rem] px-[0.625rem] col-span-12 w-full h-full  grid-cols-12 ${styles.HeaderContext}`}>
        {/* a. Title (Post Heading) */}
        <div className={`col-span-12`}>
          <h1 className='text-[2.75rem] font-quadraSemiBold leading-[1.175] text-[#ffffda]'>{title}</h1>
        </div>

        {/* b. Cover Image/Cover Video */}
        <div className={`col-span-8`}>
          <FilteredCoverImageLg
            imageURL={imageURL}
            alternativetext={coverimage?.data?.attributes?.alternativeText || ''}
            imageCaption={coverimage?.data?.attributes?.caption || 'image-caption-not-available'}
            postTag={tags[0].tags}
          />
        </div>

        {/* c. Related Posts Wrapper */}
        <div className={`hidden col-span-4 flex-col gap-[0.725rem] px-[1rem] ${styles.primaryRelatedPosts}`}>
          <h4
            className={`flex gap-2 items-center font-[satoshi] font-semibold text-[1.25rem] border-b-[#f0705a] border-b-[3px] pt-[10px] pb-[4px]`}>
            <GoZap />
            RELATED POSTS
          </h4>
          {primaryRelatedPosts.map((p) => (
            <Link href={`/gadgets/${p.attributes.slug}`} key={p.id} className={`grid grid-cols-12 gap-3 items-stretch`}>
              <Image
                className={`object-cover rounded block m-0 p-0 col-span-4`}
                width={1000}
                height={1000}
                priority={true}
                src={imageURL}
                alt={coverimage?.data?.attributes?.alternativeText || ''}
              />
              <h4 className={`col-span-8 font-semibold`}>{truncateTitle(p?.attributes?.title)}</h4>
            </Link>
          ))}
          {/* --- Add a Top Sponser for the Blog web app (bugverse.tech) */}
          {/* --- <div className='w-full p-[0.625em]'>Powered by</div> */}
        </div>

        {/* d. Author Publication and Social Links */}
        <div className={`col-span-8 grid grid-cols-12 justify-between items-center`}>
          {/* <div className={`col-span-7 w-full`}>
            <AuthorProfileDatePostedTop
              AuthorName={Author?.AuthorName}
              AuthorImageURL={AuthorImageSrc}
              AuthorURL={Author?.AuthorLink}
              DatePosted={updatedAt}
            />
          </div>*/}

          {/* e. Share Button */}
          <div className={`w-full relative h-full col-span-5 flex items-center justify-end z-30 gap-[1rem]`}>
            {/* --- change the 'href' to the community whatsapp group */}
            <Link href={`/advertise-with-us`} className={`${styles.joinBtn} flex items-center gap-2`}>
              <BsPeopleFill className={`text-[20px] text-[#ffffff]`} />
              clan
            </Link>
            <div className={`${styles.spanDivider}`}></div>
            {/* --- Bookmark Button */}
            <button className={`flex items-center gap-2`} onClick={() => setIsBookmarked(!isBookmarked)}>
              {isBookmarked ? <FaBookmark /> : <FaRegBookmark />} Save{' '}
            </button>
            <div className={`${styles.spanDivider}`}></div>
            <button onClick={() => showShareItems()} className={`flex items-center justify-between gap-2`}>
              <RiShareForwardFill className={`text-[1.5rem]`} />
              <span className={`text-[#fcfdfd] leading-[21.5px] font-medium text-[0.875rem]`}>Share</span>
            </button>
            <ul className={`${openShare ? styles.shareON : styles.shareOFF}`}>
              <Link href={`/`} className={`${styles.shareLink} `}>
                <RiFacebookBoxFill className={`text-[1.05rem]`} /> Facebook
              </Link>
              <Link href={`/`} className={`${styles.shareLink}`}>
                <BsInstagram className={`text-[1.05rem]`} />
                Instagram
              </Link>
              <Link href={`/`} className={`${styles.shareLink}`}>
                <BsTwitterX className={`text-[1.05rem]`} />
                Twitter
              </Link>
              <Link href={`/`} className={`${styles.shareLink}`}>
                <BsWhatsapp className={`text-[1.05rem]`} />
                Whatsapp
              </Link>
              <Link href={`/`} className={`${styles.shareLink}`}>
                <BsLink45Deg className={`text-[1.05rem]`} />
                Copy link
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {/* -#####- */}
    </div>
  );
}
