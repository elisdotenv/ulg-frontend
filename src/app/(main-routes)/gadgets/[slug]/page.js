'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './page.module.css';
import FilteredImageCover from '@/components/ui/filtered-image-cover/filtered-image';
import FilteredImageLg from '@/components/ui/filtered-image-lg/filtered-image-lg';
import { GoZap } from 'react-icons/go';
import Link from 'next/link';
import { truncateTitle } from '@/utils/truncations';
import Image from 'next/image';
import { AuthorProfileDatePostedTop, AuthorProfileMobile, MobileDatePosted } from '@/components/ui/author-date/AuthorProfile';
import { FaBookmark, FaRegBookmark, FaCopy } from 'react-icons/fa6';
import { RiShareForwardFill, RiFacebookBoxFill } from 'react-icons/ri';
import { BsTwitterX, BsWhatsapp, BsInstagram, BsLink45Deg, BsPeopleFill } from 'react-icons/bs';
import KeyPointsWrapper from '@/components/ui/key-points/key-points';
import SummaryPage from '@/components/ui/view-page/summary-page';
import EnhancedPrimaryPost from '@/components/enhanced/primary-post';
import TertiaryMoviesPost from '@/components/movies-components/sixth-post/poster';
import MobileSecondaryPost from '@/components/secondary-post-mobile/secondary-post-mobile';
import JoinWhatsappCTA from '@/components/ui/cta/join-whatsapp';

export default function GadgetSlug({ params }) {
  const slug = React.use(params).slug;
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [openShare, setOpenShare] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // --- Close Share Button Dropdown Function
  const closeShareDropDown = () => {
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
        const { data } = await axios.get(`http://localhost:4000/api/posts?filters[slug][$eq]=${slug}&populate=*`);
        const currentPost = data.data[0];
        setPost(currentPost);

        // --- Fetch Related Posts
        if (currentPost) {
          const categoryId = currentPost.attributes.categories.data[0].id;
          console.log(`Category Id 👙`);
          console.log(categoryId);
          const relatedResponse = await axios.get(
            `http://localhost:4000/api/posts?filters[categories][id][$eq]=${categoryId}&filters[slug][$ne]=${slug}&populate=*`
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

  //  --- On Loading Post Data
  if (isLoading)
    return (
      <div className={`w-screen min-h-screen flex items-center justify-center`}>
        <p>Loading...</p>
      </div>
    );

  // --- On Error Encounter
  if (error) return <p>An Error has occurred: {error}</p>;
  if (!post) return null;

  // --- Destucturing Post's Properties (State) to Level-1
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
    isfeatured,
  } = post?.attributes;

  console.log(`Testing Data Fetching On Gadgets Page`);
  console.log(title);
  console.log(description);
  console.log(refsource);

  console.log(`Cover Image URL - http://localhost:4000${coverimage?.data?.attributes?.url}`);

  const primaryRelatedPosts = relatedPosts.slice(0, 3);
  const secondaryRelatedPosts = relatedPosts.slice(3, 9);

  return (
    <div className='col-span-12 mx-auto grid grid-cols-12 lg:max-w-[1200px] lg:w-full min-h-screen gap-[0.75rem] bg-[#252525] relative'>
      {/* --- [MOBILE SCREENS] - Post Tag Element */}
      <div className='px-[1rem] pt-[0.75rem] col-span-12 lg:hidden w-full h-full md:col-span-10 md:col-start-2'>
        <span className='bg-transparent font-primary font-semibold text-white text-[0.875rem] border border-[#a4a4a4] rounded px-[12px] py-[3px] inline-block'>
          {tags[0].tags}
        </span>
      </div>
      {/* ::::::::: */}

      {/* --- [MOBILE SCREENS] - Post Title Element */}
      <div className='px-[1rem] col-span-12 lg:hidden w-full h-full md:col-span-10 md:col-start-2'>
        <h1 className='font-quadraSemiBold tracking-wide text-[2.125rem] leading-[1.1]  text-[#fffdfa]'>{title}</h1>
      </div>
      {/* ::::::::: */}

      {/* [MOBILE SCREENS] - Post Description Element */}
      <div className='px-[1rem] lg:hidden col-span-12 block m-0 md:col-span-10 md:col-start-2'>
        <p className='text-[#fffdfa] font-normal font-secondary text-[1.25rem] leading-[1.25]'>{description}</p>
      </div>
      {/* ::::::::: */}

      {/* [MOBILE SCREENS] - Post Cover Image Element */}
      <div className='col-span-12 lg:hidden border-b-[2px] border-b-[#1e2522] md:col-span-10 md:col-start-2'>
        <FilteredImageCover
          imageURL={`http://localhost:4000${coverimage?.data?.attributes?.url}`}
          alternativeText={coverimage?.data?.attributes?.alternativeText || 'not-defined'}
        />
      </div>
      {/* ::::::::: */}

      {/* [MEDIUM & LARGE SCREENS] - Header Element (Title, Cover Image, Related Posts Section) */}
      <div
        className={`bg-[#333333] py-[1.25rem] px-[0.625rem] col-span-12 w-full h-full hidden grid-cols-12 ${styles.HeaderContext}`}>
        {/* a. Title (Post Heading) */}
        <div className={`col-span-12`}>
          <h1 className='text-[2.75rem] font-quadraSemiBold leading-[1.175] text-[#ffffda]'>{title}</h1>
        </div>

        {/* b. Cover Image/Cover Video */}
        <div className={`col-span-8`}>
          <FilteredImageLg
            imageURL={`http://localhost:4000${coverimage?.data?.attributes?.url}`}
            alternativeText={coverimage?.data?.attributes?.alternativeText || 'not-defined'}
            ImgCaption={coverimage?.data?.attributes?.caption || 'image-caption-not-available'}
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
                src={`http://localhost:4000${p?.attributes?.coverimage?.data?.attributes?.url}`}
                alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText}
              />
              <h4 className={`col-span-8 font-primary font-semibold`}>{truncateTitle(p?.attributes?.title)}</h4>
            </Link>
          ))}
          {/* >_ Add a Top Sponser for the Blog web app (bugverse.tech) */}
          {/* <div className='w-full p-[0.625em]'>Powered by</div> */}
        </div>

        {/* d. Author Publication and Social Links */}
        <div className={`col-span-8 grid grid-cols-12 justify-between items-center`}>
          <div className={`col-span-7 w-full`}>
            <AuthorProfileDatePostedTop
              AuthorName={author?.authorname}
              AuthorImageURL={authorimage}
              AuthorURL={author?.authorlink}
              DatePosted={updatedAt}
            />
          </div>

          {/* e. Share Button */}
          <div className={`w-full relative h-full col-span-5 flex items-center justify-end z-30 gap-[1rem]`}>
            {/* >_ change the 'href' to the community whatsapp group */}
            <Link href={`/advertise-with-us`} className={`${styles.joinBtn} flex items-center gap-2`}>
              <BsPeopleFill className={`text-[20px] text-[fcfcfd]`} />
              clan
            </Link>
            <div className={`${styles.spanDivider}`}></div>
            {/* Bookmark Button */}
            <button className={`flex items-center gap-2`} onClick={() => setIsBookmarked(!isBookmarked)}>
              {isBookmarked ? <FaBookmark /> : <FaRegBookmark />} Save{' '}
            </button>
            <div className={`${styles.spanDivider}`}></div>
            <button onClick={() => showShareItems()} className={`flex items-center justify-between gap-2`}>
              <RiShareForwardFill className={`text-[1.5rem]`} />
              <span className={`text-[#fcfdfd] leading-[21.5px] font-medium text-[0.875rem] font-secondary`}>Share</span>
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

      {/* [MEDIUM & LARGE SCREENS] - Post Description Element */}
      <div className='hidden col-span-8 lg:block m-0 p-0'>
        <p className={`text-[#dedede] italic font-normal font-primary text-[1.25rem] leading-[1.25]`}>{description}</p>
      </div>
      {/* ::::::::::::::: */}

      {/* [MOBILE SCREENS] - Post Author Details Element */}
      <div className='col-span-8 lg:hidden px-[1rem] flex flex-col gap-[0.625rem] md:flex md:flex-row md:justify-between md:col-span-10 md:col-start-2'>
        <AuthorProfileMobile AuthorName={author?.authorname} AuthorImageURL={authorimage} AuthorURL={author.authorlink} />
        <MobileDatePosted DatePosted={updatedAt} />
      </div>
      {/* ::::::::::::::: */}

      {/* [MOBILE SCREENS] - Post Social Links Element */}
      <div className=' relative col-span-4 lg:hidden px-[1rem] flex items-start justify-end gap-[0.625rem] md:flex md:flex-row md:justify-between md:col-span-10 md:col-start-2'>
        <button onClick={() => showShareItems()} className={`flex items-center justify-between gap-2`}>
          <RiShareForwardFill className={`text-[1.5rem] text-[#fcfdfd]`} />
          <span className={`text-[#c9c3b8] leading-[21.5px] text-[0.9375rem] font-quadraMedium`}>Share</span>
        </button>

        {/* Social Links for a share button */}
        <ul className={`${openShare ? styles.shareONMobile : styles.shareOFFMobile}`}>
          <Link href={`/`} className={`${styles.shareLink} `}>
            <RiFacebookBoxFill className={`text-[1.05rem] text-[#fffdfa]`} /> Facebook
          </Link>
          <Link href={`/`} className={`${styles.shareLink}`}>
            <BsInstagram className={`text-[1.05rem] text-[#fffdfa]`} />
            Instagram
          </Link>
          <Link href={`/`} className={`${styles.shareLink}`}>
            <BsTwitterX className={`text-[1.05rem] text-[#fffdfa]`} />
            Twitter
          </Link>
          <Link href={`/`} className={`${styles.shareLink}`}>
            <BsWhatsapp className={`text-[1.05rem] text-[#fffdfa]`} />
            Whatsapp
          </Link>
          <span onClick={() => copyLinkToClipboard()} className={`${styles.shareLink}`}>
            <BsLink45Deg className={`text-[1.05rem] text-[#fffdfa]`} />
            Copy link
          </span>
        </ul>
      </div>
      {/* ::::::::::::::: */}

      {/* [MOBILE, MEDIUM & LARGE SCREENS] - Post Summary Blocks Element */}
      <div className='col-span-12 lg:col-span-8 md:col-span-10 md:col-start-2'>
        {keypoints && <KeyPointsWrapper content={keypoints} />}
      </div>

      <div className='col-span-12 lg:col-span-8 md:col-span-10 md:col-start-2'>
        <SummaryPage textblockone={textblockone} textblocktwo={textblocktwo} notecontext={note} refsource={refsource} />
      </div>
      {/* ::::::::::::::: */}

      {/* [MOBILE SCREENS] - Ad Space Element */}
      <div className='bg-[#333333] flex items-center justify-center text-center col-span-12 lg:hidden w-full min-h-[30vh] p-[2rem] md:col-span-10 md:col-start-2'>
        <p>Animated GIF CTA redirecting to Uptown Communities</p>
      </div>
      {/* ::::::::::::::: */}

      {/* [LARGE SCREENS] - Side Ad Wrapper Element*/}
      <aside className=' hidden lg:flex flex-col gap-2 col-span-4 px-[1rem]'>
        <div className='w-full min-h-[60vh] flex flex-col p-[2rem] items-center justify-center text-center z-30 top-[80px] sticky bg-[#333333]'>
          <p>UPTOWN</p>
          <p>Animated GIF CTA redirecting to Uptown Communities</p>
          <p>Events Broadcasting through Animated GIFs</p>
        </div>
      </aside>
      {/* ::::::::::::::: */}

      {/* Related Posts Section */}
      {/* [MOBILE SCREENS] - More Like This Section Element */}
      <div className={`col-span-12 w-full h-full grid grid-cols-12 px-[1rem]`}>
        <div className={`col-span-12 py-[2px] lg:hidden `}>
          <h4
            className={`text-[1.25rem] tracking-wider font-quadraSemiBold text-[#ffffda]  lg:hidden py-[2px] flex items-center gap-[0.625rem]`}>
            <GoZap className={`text-[1.5rem]`} />
            RELATED POSTS
          </h4>
        </div>
      </div>
      {/* ::::::::::::::: */}

      {/* A. [MOBILE SCREENS] - Bottom Related Posts Element */}
      <div className='col-span-12 md:hidden overflow-x-scroll flex flex-col gap-[0.75rem] bg-neutral-200 py-[0.75rem] px-[1rem] pb-[1.5rem]'>
        <ul className={`${styles.secondaryPostsGrid} flex gap-[1rem]`}>
          {secondaryRelatedPosts.map((p, i) => (
            <li className={`${styles.secondaryPost}`} key={p.id}>
              <TertiaryMoviesPost
                time={updatedAt}
                href={`/gadgets/${p.attributes.slug}`}
                alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                src={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                title={p?.attributes?.title}
                tag={p?.attributes?.tags[0]?.tags}
                postId={i}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* ::::::::::::::: */}

      <div className={`hidden col-span-12 w-full h-full md:grid grid-cols-12 gap-[1.5rem]`}>
        {/* B. [MEDIUM & LARGE SCREENS] */}
        <ul className={`${styles.topReviews} col-span-12 flex flex-col gap-y-[1rem] gap-x-[1.25rem]`}>
          {secondaryRelatedPosts.map((p) => (
            <li key={p?.id} className={`${styles.topReviewPost}`}>
              <MobileSecondaryPost
                href={`/gadgets/${p.attributes.slug}`}
                alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || 'not-defined'}
                src={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                title={p?.attributes?.title}
                description={p?.attributes?.description}
                tag={p?.attributes?.tags[0]?.tags}
                author={p?.attributes?.author?.authorname}
                time={p?.attributes?.updatedAt}
              />
            </li>
          ))}
        </ul>
        <div className={`${styles.adverts} col-span-12`}>
          <p>Animated Ad Banner GIF</p>
        </div>
      </div>
      {/* ::::::::::::::: */}

      {/* [MOBILE SCREENS] - CTA Element */}
      <div className='lg:hidden col-span-12 px-[1rem] '>
        <JoinWhatsappCTA />
      </div>
      {/* ::::::::::::::: */}

      {/* [MISCELLANEOUS LAYOUTS] */}
      {/* 1. Link Copied Alert Box */}
      {isLinkCopied && (
        <div
          className={`md:hidden absolute w-fit inline-flex justify-center items-center top-[50vh] left-0 right-0 mx-auto bg-[#333333] rounded-[6px]`}>
          <span className={`text-[#fcfdfd] text-[1rem] font-ternaryMedium px-[0.75rem] py-[6px] flex items-center gap-2`}>
            {' '}
            <FaCopy className={`text-[#fcfdfd]`} />
            Copied to Clipboard!
          </span>
        </div>
      )}
    </div>
  );
}
