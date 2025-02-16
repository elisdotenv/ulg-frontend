'use client';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryPost from '@/components/primary-post/primary-post';
import TertiaryPost from '@/components/tertiary-post/tertiary-post';
import SecondaryPost from '@/components/secondary-post/secondary-post';
import FirstFeaturedPost from '@/components/special-featured-post/special-featured-post';
import MobileSecondaryPost from '@/components/secondary-post-mobile/secondary-post-mobile';
import TertiaryMoviesPost from '@/components/movies-components/sixth-post/poster';
import { FaPlus } from 'react-icons/fa';
import EnhancedPrimaryPost from '@/components/enhanced/primary-post';
import banner from '../../../../public/images/ad-banner.jpg';
import Image from 'next/image';

const GadgetsHomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleSecondaryCount, setVisibleSecondaryCount] = useState(8); // Initially show 10 secondary posts

  useEffect(() => {
    const fetchPosts = async () => {
      const config = {
        url: 'http://localhost:4000/api/posts?populate=*',
        method: 'GET',
      };

      try {
        const res = await axios(config);
        const { data } = res.data;

        // Filtering 'Gadgets' category posts
        const filteredPosts = data.filter((p) =>
          p.attributes.categories.data.some((c) => c.attributes.NavigationItem === 'Gadgets')
        );

        // Sort filtered posts by updatedAt in descending order
        const sortedPosts = filteredPosts.sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt));
        setPosts(sortedPosts);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (error) {
    return (
      <p className={`text-black`}>
        An error has occurred <br /> {error}
      </p>
    );
  }

  if (isLoading) {
    return (
      <div className={`w-full h-full bg-yellow-500 flex justify-center items-center`}>
        <p className={`text-white text-2xl font-bold`}>Loading Animations</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return <p className={`text-black`}>There are currently no posts for this niche.</p>;
  }

  // 1. Latest 6 posts excluding featured
  const primaryPosts = posts.filter((p) => !p.attributes.isFeatured).slice(0, 6);

  // 2. Featured posts (Limit to 6 featured posts)
  const featuredPosts = posts.filter((p) => p.attributes.isFeatured).slice(0, 7);
  const firstFeaturedPost = featuredPosts[0];
  const fiveFeaturedPost = featuredPosts.slice(1, 7);
  const fiveFeaturedPostMobile = posts.filter((p) => p.attributes.isFeatured).slice(0, 5);

  // 3. Secondary posts (not featured and not in primary)
  const secondaryPosts = posts
    .filter((p) => !p.attributes.isFeatured && !primaryPosts.includes(p))
    .slice(0, visibleSecondaryCount);

  const handleSeeMore = () => {
    // Increase count by 10 on click
    setVisibleSecondaryCount((c) => c + 8);
  };

  console.log(posts);

  return (
    <>
      <div
        className={`max-w-[1300px] mx-auto min-h-screen grid grid-cols-12 gap-x-[2rem] gap-y-[2rem] lg:gap-y-[1rem] py-[2rem]`}>
        {/* >>> Group 1: (Latest) */}
        <div className={`col-span-12 w-full h-full grid grid-cols-12 gap-[1.5rem] lg:px-0 px-[1rem]`}>
          {/* [Mobile, Medium & Large Screens] */}
          <ul className={`${styles.topReviews} col-span-12 flex flex-col gap-[1rem]`}>
            {primaryPosts.map((p) => (
              <li key={p?.id} className={`${styles.topReviewPost}`}>
                <MobileSecondaryPost
                  href={`/gadgets/${p.attributes.slug}`}
                  alt={p?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
                  src={'http://localhost:4000' + p?.attributes?.CoverImage?.data?.attributes?.url}
                  title={p?.attributes?.Title}
                  description={p?.attributes?.Description}
                  tag={p?.attributes?.Tags[0]?.Tags}
                  author={p?.attributes?.Author?.AuthorName}
                  time={p?.attributes?.updatedAt}
                />
              </li>
            ))}
          </ul>
          <div className={`${styles.adverts} col-span-12`}>
            <Image
              className={`object-cover rounded-[4px] relative block m-0 p-0 lg:m-0 lg:p-0`}
              width={0}
              height={0}
              layout='responsive'
              priority={true}
              alt={'alternativeText'}
              src={banner}
            />
          </div>
        </div>
        {/* >>> End of Latest Posts */}

        {/*  >>> Group-2: 5 Featured Posts */}
        <div className={`col-span-12 w-full h-full grid grid-cols-12 px-[1rem] my-[-0.625rem]`}>
          <div className={`${styles.categoryStrip}`}>
            <h4 className={`text-[1.125rem]  font-bold text-[#ffffda] lg:hidden py-[2px]`}>FEATURED</h4>
          </div>
        </div>

        {/* [Mobile Screens] Only */}
        {featuredPosts.length > 0 && (
          <ul className={`${styles.tertiaryPostsGrid} px-[1rem]`}>
            {fiveFeaturedPostMobile.map((p, i) => (
              <li className={`md:hidden lg:hidden`} key={i}>
                <TertiaryPost
                  href={`/gadgets/${p.attributes.slug}`}
                  alt={p?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
                  src={'http://localhost:4000' + p?.attributes?.CoverImage?.data?.attributes?.url}
                  title={p?.attributes?.Title}
                  description={p?.attributes?.Description}
                  tag={p?.attributes?.Tags[0]?.Tags}
                  author={p?.attributes?.Author?.AuthorName}
                  time={p?.attributes?.updatedAt}
                />
              </li>
            ))}
          </ul>
        )}

        {/* Category Divider */}
        <div className={`border-[#f0705a] border-b-[3.5px] col-span-12 w-full hidden md:block`}>
          <span className={`font-semibold text-[#dbd5ce] text-[1.5rem] tracking-[0.0375em]`}>FEATURED REVIEWS</span>
        </div>

        {/* [Medium & Large Screens] Only Hidden On Mobile Screens */}
        <div className={`hidden w-full h-full col-span-12 md:grid lg:grid grid-cols-12 gap-[1.5rem]`}>
          {/* 1. First Featured Post */}
          {firstFeaturedPost && (
            <div className={`col-span-12`}>
              <FirstFeaturedPost
                href={`/gadgets/${firstFeaturedPost.attributes.slug}`}
                alt={firstFeaturedPost?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
                src={'http://localhost:4000' + firstFeaturedPost?.attributes?.CoverImage?.data?.attributes?.url}
                title={firstFeaturedPost?.attributes?.Title}
                description={firstFeaturedPost?.attributes?.Description}
                tag={firstFeaturedPost?.attributes?.Tags[0]?.Tags}
                author={firstFeaturedPost?.attributes?.Author?.AuthorName}
                time={firstFeaturedPost?.attributes?.updatedAt}
                authorImageURL={'http://localhost:4000' + firstFeaturedPost?.attributes?.AuthorImage?.data?.attributes?.url}
                authorURL={firstFeaturedPost?.attributes?.Author?.AuthorLink}
              />
            </div>
          )}

          {/* 2. Five Featured Posts */}
          {featuredPosts.length > 0 && (
            <ul className={`${styles.lgFeaturedPostsGrid}`}>
              {fiveFeaturedPost.map((p, i) => (
                <li key={i}>
                  <TertiaryPost
                    href={`/gadgets/${p.attributes.slug}`}
                    alt={p?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
                    src={'http://localhost:4000' + p?.attributes?.CoverImage?.data?.attributes?.url}
                    title={p?.attributes?.Title}
                    description={p?.attributes?.Description}
                    tag={p?.attributes?.Tags[0]?.Tags}
                    author={p?.attributes?.Author?.AuthorName}
                    time={p?.attributes?.updatedAt}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* >>> End of Featured Posts */}

        {/* Ads Wrapper [TESTING] */}
        <div className={`col-span-10 col-start-2 flex items-center justify-center bg-sky-500 w-full h-[10svh]`}>
          This is a space of an Ad
        </div>
        {/* End of Ads Wrapper [END OF TESTING] */}

        {/* Category Divider */}
        {/* border-[#ff5353] */}
        <div className={`border-[#f0705a] border-b-[3.5px] col-span-12 w-full hidden md:block`}>
          <span className={`text-[#dbd5ce] text-[1.5rem] tracking-[0.0375em]`}>LATEST REVIEWS</span>
        </div>

        {/* >>> Group-3: Latest Post */}
        <div className={`col-span-12 w-full h-full md:block hidden`}>
          {/* [Medium & Large Screens] */}
          <ul className={`${styles.topRevs} md:block hidden`}>
            {secondaryPosts.map((p) => (
              <li key={p?.id} className={`${styles.topRevPost}`}>
                <MobileSecondaryPost
                  href={`/gadgets/${p.attributes.slug}`}
                  alt={p?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
                  src={'http://localhost:4000' + p?.attributes?.CoverImage?.data?.attributes?.url}
                  title={p?.attributes?.Title}
                  description={p?.attributes?.Description}
                  tag={p?.attributes?.Tags[0]?.Tags}
                  author={p?.attributes?.Author?.AuthorName}
                  time={p?.attributes?.updatedAt}
                />
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* [Mobile Screens] */}
          {secondaryPosts.length > 0 && (
            <ul className={`${styles.tertiaryPostsGrid} flex px-[1rem]`}>
              {secondaryPosts.map((p, i) => (
                <li className={`md:hidden lg:hidden`} key={i}>
                  <TertiaryMoviesPost
                    href={`/gadgets/${p.attributes.slug}`}
                    alt={p?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
                    src={'http://localhost:4000' + p?.attributes?.CoverImage?.data?.attributes?.url}
                    title={p?.attributes?.Title}
                    description={p?.attributes?.Description}
                    tag={p?.attributes?.Tags[0]?.Tags}
                    author={p?.attributes?.Author?.AuthorName}
                    time={p?.attributes?.updatedAt}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* >>> Group-4: Latest Posts (Inorder of their last updated time ) */}
        {/* Mobile Screen Category Strip */}
        <div className={`col-span-12 w-full h-full grid grid-cols-12 px-[1rem] my-[-0.625rem]`}>
          <div className={`${styles.categoryStrip}`}>
            <h4 className={`text-[1.125rem] font-bold  text-[#ffffda] lg:hidden py-[2px]`}>LATEST REVIEWS</h4>
          </div>
        </div>

        {/* Category Divider */}
        <div className={`border-[#f0705a]  border-b-[3.5px] col-span-8 w-full hidden md:block`}>
          <span className={`text-[1.5rem] tracking-[0.0375em] text-[#dbd5ce] `}>LATEST REVIEWS</span>
        </div>

        <div className={`col-span-12 w-full h-full grid grid-cols-12`}>
          {/* [Mobile-Medium-Large] Primary Post Layout */}
          <ul className={`${styles.secondaryPostsGrid} flex flex-col lg:px-0 gap-[0.75rem]`}>
            {secondaryPosts.map((p) => (
              <li className={`${styles.secondaryPost}`} key={p.id}>
                <EnhancedPrimaryPost
                  href={`/gadgets/${p.attributes.slug}`}
                  alt={p?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
                  src={'http://localhost:4000' + p?.attributes?.CoverImage?.data?.attributes?.url}
                  title={p?.attributes?.Title}
                  description={p?.attributes?.Description}
                  author={p?.attributes?.Author?.AuthorName}
                  authorImageURL={p?.attributes?.AuthorImage?.data?.attributes?.url}
                  tag={p?.attributes?.Tags}
                  time={p?.attributes?.updatedAt}
                />
              </li>
            ))}
          </ul>
          {/* >>> End of Group-4 */}

          {/*  [Aside] Ad-stats and Ad-poster */}
          <div className={`hidden  w-full h-fit col-span-4 lg:flex flex-col gap-[0.625rem] sticky top-0 p-[1rem]`}>
            {/* 1. Ads Stats */}
            <div className={`w-full h-[23vh] text-[#fff] bg-[#232527] flex items-center justify-center`}>
              <p>AdStats</p>
            </div>

            {/* 2. Ads Space */}
            <div className={`w-full h-[37vh] text-[#fff] bg-[#232527] flex items-center justify-center`}>
              <p>AdSpace</p>
            </div>
          </div>

          {/* [Mobile] SEE MORE BUTTON */}
          {visibleSecondaryCount < posts.length - primaryPosts.length - featuredPosts.length && (
            <div className={`col-span-12 flex justify-center mt-[1rem]`}>
              <button onClick={handleSeeMore} className={`rounded-[8.5px] p-px bg-[#2A3133] lg:hidden`}>
                <span
                  className={`bg-[#1B2126] lg:hidden border border-[#575e62] text-[#ffffda] rounded-[8px] px-[12px] py-[6px] shadow-sm font-bold flex gap-2 items-center`}>
                  <FaPlus />
                  See More
                </span>
              </button>
            </div>
          )}

          {/*  [Desktop] SEE MORE BUTTON */}
          {visibleSecondaryCount < posts.length - primaryPosts.length - featuredPosts.length && (
            <button
              className={`text-[#dbd5ce] transition-all rounded text-[1.125rem] font-medium hidden lg:col-start-4 lg:col-span-3 border-[2px] border-[#232527] py-[0.725rem] lg:flex gap-2 items-center justify-center`}
              onClick={handleSeeMore}>
              SEE MORE
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default GadgetsHomePage;
