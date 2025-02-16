'use client';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryPost from '@/components/primary-post/primary-post';
import TertiaryPost from '@/components/tertiary-post/tertiary-post';
import FirstFeaturedPost from '@/components/special-featured-post/special-featured-post';
import MobileSecondaryPost from '@/components/secondary-post-mobile/secondary-post-mobile';
import TertiaryMoviesPost from '@/components/movies-components/sixth-post/poster';
import EnhancedPrimaryPost from '@/components/enhanced/primary-post';

export default function GadgetsPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleSecondaryCount, setVisibleSecondaryCount] = useState(8);

  /* --- Data Fetching (Fetching All the Posts With Category Set to 'gadgets') */
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
          p.attributes.categories.data.some((c) => c.attributes.navigationitem === 'Gadgets')
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

  // On Error Encounter
  if (error) {
    return (
      <p className={`text-black`}>
        An error has occurred <br /> {error}
      </p>
    );
  }

  // On Loading Resources
  if (isLoading) {
    return (
      <div className={`w-full h-full bg-yellow-500 flex justify-center items-center`}>
        <p className={`text-white text-2xl font-bold`}>Loading Animations</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return <p className={`text-black`}>There are currently no posts for this dummy niche!</p>;
  }

  // 1. Latest 6 posts excluding featured
  const primaryPosts = posts.filter((p) => !p.attributes.isfeatured).slice(0, 6);
  const firstPrimaryPost = primaryPosts[0]; // --- Most Latest Post
  const fivePrimaryPost = primaryPosts.slice(1, 6); // --- Five Most Latest Posts

  // 2. Featured posts (Limit to 8 featured posts)
  const featuredPosts = posts.filter((p) => p.attributes.isfeatured).slice(0, 8);

  // 3. Neither Featured Post Nor Most Latest Post
  const secondaryPosts = posts
    .filter((p) => !p.attributes.isfeatured && !primaryPosts.includes(p))
    .slice(0, visibleSecondaryCount);

  const handleSeeMore = () => {
    // Increase count by 8 on click
    setVisibleSecondaryCount((c) => c + 8);
  };

  console.log(posts);

  return (
    <div className={`max-w-[1300px] mx-auto min-h-screen grid grid-cols-12 gap-[2rem]`}>
      {/* >>> Group-1 [MOBILE, TABLETS & DESKTOP SCREENS] */}
      <div className={`w-full h-full col-span-12 md:grid lg:grid grid-cols-12 gap-[1.5rem] pt-[2rem]`}>
        {primaryPosts.length > 0 && (
          <ul className={`${styles.lgFeaturedPostsGrid} px-[1rem] md:px-0`}>
            {fivePrimaryPost.map((p, i) => (
              <li key={i}>
                <TertiaryMoviesPost
                  href={`/gadgets/${p.attributes.slug}`}
                  alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                  src={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                  title={p?.attributes?.title}
                  tag={p?.attributes?.tags[0]?.tags}
                  author={p?.attributes?.author?.authorname}
                  time={p?.attributes?.updatedAt}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* END OF GROUP-1 */}

      {/* >>> Group-2 : [Mobile Screens] - 6 First Latest Posts */}
      <div className={`w-full h-full col-span-12 grid grid-cols-12 gap-[2rem]`}>
        {/* [Mobile Screens] */}
        <ul className={`${styles.secondaryPostsGrid} md:hidden px-0 md:px-[1rem] flex flex-col gap-[0.75rem]`}>
          {primaryPosts.map((p) => (
            <li className={`${styles.secondaryPost} md:hidden`} key={p.id}>
              <EnhancedPrimaryPost
                href={`/gadgets/${p.attributes.slug}`}
                alt={p?.attributes?.CoverImage?.data?.attributes?.alternativeText || ''}
                src={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                title={p?.attributes?.title}
                description={p?.attributes?.description}
                author={p?.attributes?.author?.authorname}
                authorImageURL={p?.attributes?.authorimage?.data?.attributes?.url}
                tag={p?.attributes?.tags}
                time={p?.attributes?.updatedAt}
              />
            </li>
          ))}
        </ul>

        {/* [Medium & Large Screens] */}
        <div className={`hidden w-full h-full col-span-12 md:grid lg:grid grid-cols-12 gap-[1.5rem]`}>
          {/* 1. First Featured Post */}
          {firstPrimaryPost && (
            <div className={`col-span-12`}>
              <FirstFeaturedPost
                href={`/gadgets/${firstPrimaryPost?.attributes.slug}`}
                alt={firstPrimaryPost?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                src={'http://localhost:4000' + firstPrimaryPost?.attributes?.coverimage?.data?.attributes?.url}
                title={firstPrimaryPost?.attributes?.title}
                description={firstPrimaryPost?.attributes?.description}
                tag={firstPrimaryPost?.attributes?.tags[0]?.tags}
                author={firstPrimaryPost?.attributes?.author?.authorname}
                time={firstPrimaryPost?.attributes?.updatedAt}
                authorImageURL={'http://localhost:4000' + firstPrimaryPost?.attributes?.authorimage?.data?.attributes?.url}
                authorURL={firstPrimaryPost?.attributes?.author?.authorlink}
              />
            </div>
          )}

          {/* 2. 5-Featured Posts */}
          {fivePrimaryPost.length > 0 && (
            <ul className={`${styles.lgFeaturedPostsGrid}`}>
              {fivePrimaryPost.map((p, i) => (
                <li key={i}>
                  <TertiaryPost
                    href={`/gadgets/${p.attributes.slug}`}
                    alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
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
          )}
        </div>
      </div>
      {/* >>> End of Group-2 */}

      {/* > Group-3: 8 Featured Reviews Post */}
      <div className={`col-span-12 w-full h-full md:block hidden`}>
        {/* [Medium & Large Screens] */}
        <ul className={`${styles.topReviews} md:block hidden`}>
          {featuredPosts.map((p) => (
            <li key={p?.id} className={`${styles.topReviewPost}`}>
              <MobileSecondaryPost
                href={`/gadgets/${p.attributes.slug}`}
                alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
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
      </div>

      <div>
        {/* [Mobile Screens] */}
        {featuredPosts.length > 0 && (
          <ul className={`${styles.tertiaryPostsGrid} px-[1rem]`}>
            {featuredPosts.map((p, i) => (
              <li className={`md:hidden lg:hidden`} key={i}>
                <TertiaryPost
                  href={`/gadgets/${p.attributes.slug}`}
                  alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
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
        )}
      </div>
      {/* > End of Group-3 */}

      {/* >>> Group-4: - 8 Other Posts */}
      <div className={`w-full h-full col-span-12 grid grid-cols-12 gap-[2rem]`}>
        {/* [MOBILE SCREENS to 768px] */}
        <ul className={`${styles.secondaryPostsGrid} md:hidden flex flex-col gap-[0.75rem]`}>
          {secondaryPosts.map((p) => (
            <li className={`${styles.secondaryPost} md:hidden`} key={p.id}>
              <EnhancedPrimaryPost
                href={`/gadgets/${p.attributes.slug}`}
                src={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                title={p?.attributes?.title}
                description={p?.attributes?.description}
                author={p?.attributes?.author?.authorname}
                authorImageURL={p?.attributes?.authorimage?.data?.attributes?.url}
                tag={p?.attributes?.tags}
                time={p?.attributes?.updatedAt}
              />
            </li>
          ))}
        </ul>

        {/* [MEDIUM & LARGE SCREENS] */}
        <ul className={`${styles.secondaryPostsGrid} hidden md:flex  px-[1rem] flex-col gap-[0.75rem]`}>
          {secondaryPosts.map((p) => (
            <li className={`${styles.secondaryPost} hidden md:block`} key={p.id}>
              <PrimaryPost
                href={`/gadgets/${p.attributes.slug}`}
                alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                src={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                title={p?.attributes?.title}
                description={p?.attributes?.description}
                author={p?.attributes?.author?.authorname}
                authorImageURL={p?.attributes?.authorimage?.data?.attributes?.url}
                tag={p?.attributes?.tags[0]?.tags}
                time={p?.attributes?.updatedAt}
              />
            </li>
          ))}
        </ul>

        {/* >Ad-Space [Mobile & Medium Screens] */}
        <div className={` ${styles.adBannerPhaseOneSM}`}>
          <p>An Animated GIF poster posing as a CTA for advertisers to advertise here</p>
        </div>

        {/* >Ad-Space [Large Screens] */}
        <div className={`${styles.adBannerPhaseOneLG} hidden`}>
          {/* 1. Ad-Stats */}
          <div className={`flex items-center justify-center p-[2rem] text-center w-full h-[22vh] bg-[#333333]`}>
            <p>An Animated GIF uptown poster playing in a loop, posing as a CTA to redirect to uptown social community</p>
          </div>

          {/* 2. Ad-Space */}
          <div className={`flex flex-col items-center p-[2rem] text-center justify-center w-full h-[43vh] bg-[#333333]`}>
            <p>UPTOWN</p>
            <p>Animated GIF CTA redirecting to Uptown Communities</p>
            <p>Events Broadcasting through Animated GIFs</p>
          </div>
        </div>

        {/* "SEE MORE" Button */}
        {visibleSecondaryCount < posts.length - primaryPosts.length - featuredPosts.length && (
          <button onClick={handleSeeMore} className=' col-span-12 lg:col-start-4 lg:col-span-3 p-2 bg-[#333333] text-white'>
            SEE MORE
          </button>
        )}
      </div>
      {/* > End of Phase 3 */}
    </div>
  );
}
