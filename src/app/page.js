'use client';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MobileSecondaryPost from '@/components/secondary-post-mobile/secondary-post-mobile';
import TertiaryMoviesPost from '@/components/movies-components/sixth-post/poster';
import FirstFeaturedPost from '@/components/special-featured-post/special-featured-post';
import TertiaryPost from '@/components/tertiary-post/tertiary-post';
import Link from 'next/link';
import SidewayPost from '@/components/sideway-post/sideway-post';

export default function ApplicationHomePage() {
  const [gadgets, setGadgetsPosts] = useState([]);
  const [movies, setMoviesPosts] = useState([]);
  const [trendings, setTrendingsPosts] = useState([]);
  const [games, setGamesPosts] = useState([]);
  const [cryptos, setCryptoPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /* --- Fetching posts based on their categories */
  useEffect(() => {
    const fetchPosts = async () => {
      // --- Axios Configuration Object
      const config = {
        url: 'http://localhost:4000/api/posts?populate=*',
        method: 'GET',
      };

      try {
        const res = await axios(config);
        const { data } = res.data;

        // --- [Filtering & Sorting] 'Gadgets' category posts
        const gadgetsPosts = data.filter((p) =>
          p.attributes.categories.data.some((c) => c.attributes.navigationitem === 'Gadgets')
        );

        // - Sort Gadegets Posts in order of their updated time (updatedAt)
        const sortedGadgetsPosts = gadgetsPosts.sort(
          (a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
        );

        // - Filter Latest 6 posts excluding featured
        const primaryGadgetsPosts = sortedGadgetsPosts.filter((p) => !p.attributes.isfeatured).slice(0, 6);
        // :::::::::: End of Gadgets Posts [Filtering & Sorting]

        // --- [Filtering & Sorting] 'Movies' category posts
        const moviesPosts = data.filter((p) =>
          p.attributes.categories.data.some((c) => c.attributes.navigationitem === 'Movies')
        );

        // - Sort Gadegets Posts in order of their updated time (updatedAt)
        const sortedMoviesPosts = moviesPosts.sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt));

        // - Filter Latest 6 posts excluding featured
        const primaryMoviesPosts = sortedMoviesPosts.filter((p) => !p.attributes.isfeatured).slice(0, 6);
        // :::::::::: End of Movies Posts [Filtering & Sorting]

        // --- [Filtering & Sorting] 'Trendings' category posts
        const trendingsPosts = data.filter((p) =>
          p.attributes.categories.data.some((c) => c.attributes.navigationitem === 'Trendings')
        );
        // - Sort Gadegets Posts in order of their updated time (updatedAt)
        const sortedTrendingsPosts = trendingsPosts.sort(
          (a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt)
        );

        // - Filter Latest 6 posts excluding featured
        const primaryTrendingsPosts = sortedTrendingsPosts.filter((p) => !p.attributes.isfeatured).slice(0, 6);
        // :::::::::: End of Trendings Posts [Filtering & Sorting]

        // --- [Filtering & Sorting] 'Games' category posts
        const gamesPosts = data.filter((p) => p.attributes.categories.data.some((c) => c.attributes.navigationitem === 'Games'));

        // - Sort Games Posts in order of their updated time (updatedAt)
        const sortedGamesPosts = gamesPosts.sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt));

        // - Filter Latest 6 posts excluding featured
        const primaryGamesPosts = sortedGamesPosts.filter((p) => !p.attributes.isfeatured).slice(0, 6);
        // :::::::::: End of Games Posts [Filtering & Sorting]

        // --- [Filtering & Sorting] 'Cryptos' category posts
        const cryptoPosts = data.filter((p) =>
          p.attributes.categories.data.some((c) => c.attributes.navigationitem === 'Cryptos')
        );

        // - Sort Cryptos Posts in order of their updated time (updatedAt)
        const sortedCryptoPosts = cryptoPosts.sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt));

        // - Filter Latest 6 posts excluding featured
        const primaryCryptoPosts = sortedCryptoPosts.filter((p) => !p.attributes.isfeatured).slice(0, 6);
        // :::::::::: End of Cryptos Posts [Filtering & Sorting]

        // --- Partial State Management
        setGadgetsPosts(primaryGadgetsPosts);
        setMoviesPosts(primaryMoviesPosts);
        setTrendingsPosts(primaryTrendingsPosts);
        setGamesPosts(primaryGamesPosts);
        setCryptoPosts(primaryCryptoPosts);
      } catch (error) {
        console.error(`An Error has occured: ${error.message}`);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const firstMoviesPost = movies[0];
  const firstTrendingsPost = trendings[0];

  return (
    <>
      <div className={`${styles.MainWrapper} pt-[1.25rem]`}>
        {/* --- Sponsor/Ad-Related Banner */}
        {/* <div className={` col-start-2 col-span-10 w-full h-[64px] bg-yellow-400`}></div> */}
        {/* :::::::: End of Banner */}

        {/* - GADGETS & ACCESSORIES' SECTION - */}
        <div className={`col-span-12 w-full h-full grid grid-cols-12 gap-y-[1.5rem]`}>
          <p className={`text-red-500`}>Gadgets</p>
          {/* --- [Mobile, Medium & Large Screens] */}
          <ul className={`${styles.topReviews} col-span-12 px-[0.875rem]`}>
            {gadgets.map((p) => (
              <li key={p?.id} className={`${styles.topReviewPost}`}>
                <MobileSecondaryPost
                  href={`/gadgets/${p.attributes.slug}`}
                  alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                  src={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                  title={p?.attributes?.title}
                  tag={p?.attributes?.tags[0]?.tags}
                />
              </li>
            ))}
          </ul>

          {/* --- Sponsor/Ad-Space Goes Here */}
          {/* <div className={`${styles.adverts} bg-[#3e3e3e] text-white col-start-2 col-span-10 h-[72px]`}>
            <p>Support Us & Earn this Space in Exchange</p>
          </div> */}
        </div>
        {/* --- END OF GADGETS SECTION */}

        {/* 2. --- [MOVIES] */}
        {movies.length > 0 && (
          <ul className={`${styles.tertiaryPostsGrid}`}>
            <p className={`text-red-500`}>Movies</p>
            {/* --- [Mobile Screens] Only */}
            {movies.map((p, i) => (
              <li className={`md:hidden lg:hidden`} key={i}>
                <TertiaryMoviesPost
                  href={`/movies/${p.attributes.slug}`}
                  alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                  src={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                  title={p?.attributes?.title}
                  tag={p?.attributes?.tags[0]?.tags}
                  postId={i}
                  time={p?.attributes?.updatedAt}
                />
              </li>
            ))}
          </ul>
        )}

        {/* --- [Medium & Large Screens] Only Hidden On Mobile Screens */}
        <div className={`hidden w-full h-full col-span-12 md:grid lg:grid grid-cols-12 gap-[1.5rem]`}>
          {/* 1. --- First Featured Post */}
          {firstMoviesPost && (
            <div className={`col-span-12`}>
              <FirstFeaturedPost
                href={`/movies/${firstMoviesPost.attributes.slug}`}
                alt={firstMoviesPost?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                src={'http://localhost:4000' + firstMoviesPost?.attributes?.coverimage?.data?.attributes?.url}
                title={firstMoviesPost?.attributes?.title}
                description={firstMoviesPost?.attributes?.description}
                tag={firstMoviesPost?.attributes?.tags[0]?.tags}
                author={firstMoviesPost?.attributes?.author?.authorname}
                time={firstMoviesPost?.attributes?.updatedAt}
                authorImageURL={'http://localhost:4000' + firstMoviesPost?.attributes?.authorimage?.data?.attributes?.url}
                authorURL={firstMoviesPost?.attributes?.author?.authorlink}
              />
            </div>
          )}

          {/* 2. --- Five Featured Posts */}
          {movies.length > 0 && (
            <ul className={`${styles.lgFeaturedPostsGrid}`}>
              {movies.map((p, i) => (
                <li key={i}>
                  <TertiaryMoviesPost
                    href={`/movies/${p?.attributes?.slug}`}
                    alt={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                    src={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                    title={p?.attributes?.title}
                    tag={firstMoviesPost?.attributes?.tags[0]?.tags}
                    time={firstMoviesPost?.attributes?.updatedAt}
                    postId={i}
                  />
                </li>
              ))}
            </ul>
          )}
          <Link className={`col-span-12 md:col-span-6 bg-lime-500 text-black`} href={`/movies`}>
            MOVIES
          </Link>
        </div>
        {/* --- END OF MOVIES SECTION */}

        {/* --- 3. 'CRYPTOS POSTS' */}
        <div className={`col-span-12 grid grid-cols-12 w-full h-full px-[0.5rem]`}>
          <p className={`text-red-500`}>Cyptos</p>
          <ul className={`col-span-12 flex flex-col gap-[1rem]`}>
            {games.map((p) => (
              <li key={p?.id}>
                <SidewayPost
                  href={`/cryptos/${p?.attributes?.slug}`}
                  alternativeText={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                  imageURL={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                  title={p?.attributes?.title}
                  tag={p?.attributes?.tags[0]?.tags}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* --- 4. 'MOVIES REVIEWS' */}
        <div className={`col-span-12 grid grid-cols-12 w-full h-full px-[0.5rem]`}>
          <ul className={`${styles.secondaryPostsGrid} flex flex-col gap-[0.75rem]`}>
            <p className={`text-red-500`}>Movies</p>
            {games.map((p) => (
              <li className={`${styles.secondaryPost}`} key={p.id}>
                <SidewayPost
                  href={`/movies/${p?.attributes?.slug}`}
                  alternativeText={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                  imageURL={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                  title={p?.attributes?.title}
                  tag={p?.attributes?.tags[0]?.tags}
                />
              </li>
            ))}
          </ul>

          {/* --- [Aside] - Ads Stats and Ad Poster */}
          <div className={`hidden w-full h-fit col-span-4 lg:flex flex-col gap-[0.625rem] sticky top-0 p-[1rem]`}>
            {/* 1. --- Ads Stats */}
            <div className={`w-full h-[23vh] bg-lime-600 flex items-center justify-center`}>
              <p>AdStats</p>
            </div>

            {/* 2. --- Ads Space */}
            <div className={`w-full h-[37vh] bg-sky-600 flex items-center justify-center`}>
              <p>AdSpace</p>
            </div>
          </div>
        </div>
        {/* --- END OF MOVIES SECTION */}

        {/* 5. --- [TRENDINGS] */}
        <div className={`w-full h-full col-span-12 grid grid-cols-12 gap-[1rem] px-[0.5rem]`}>
          {/* --- [Mobile Screens] */}
          <ul className={`${styles.secondaryPostsGrid} md:hidden flex flex-col gap-[0.75rem]`}>
            <p className={`text-red-500`}>Trendings</p>
            {trendings.map((p) => (
              <li className={`${styles.secondaryPost} md:hidden`} key={p.id}>
                <SidewayPost
                  href={`/trendings/${p?.attributes?.slug}`}
                  alternativeText={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                  imageURL={'http://localhost:4000' + p?.attributes?.coverimage?.data?.attributes?.url}
                  title={p?.attributes?.title}
                  tag={p?.attributes?.tags[0]?.tags}
                />
              </li>
            ))}
          </ul>

          {/* --- [Medium & Large Screens] */}
          <div className={`hidden w-full h-full col-span-12 md:grid lg:grid grid-cols-12 gap-[1.5rem]`}>
            {/* 1. --- First Featured Post */}
            {firstTrendingsPost && (
              <div className={`col-span-12`}>
                <FirstFeaturedPost
                  href={`/trendings/${firstTrendingsPost?.attributes?.slug}`}
                  alt={firstTrendingsPost?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                  src={'http://localhost:4000' + firstTrendingsPost?.attributes?.coverimage?.data?.attributes?.url}
                  title={firstTrendingsPost?.attributes?.title}
                  description={firstTrendingsPost?.attributes?.description}
                  tag={firstTrendingsPost?.attributes?.tags[0]?.tags}
                  author={firstTrendingsPost?.attributes?.author?.authorname}
                  time={firstTrendingsPost?.attributes?.updatedAt}
                  authorImageURL={'http://localhost:4000' + firstTrendingsPost?.attributes?.authorimage?.data?.attributes?.url}
                  authorURL={firstTrendingsPost?.attributes?.author?.authorlink}
                />
              </div>
            )}

            {/* 2. --- 5-Featured Posts */}
            {trendings.length > 0 && (
              <ul className={`${styles.lgFeaturedPostsGrid}`}>
                {trendings.map((p, i) => (
                  <li key={i}>
                    <TertiaryPost
                      href={`/trendings/${p?.attributes?.slug}`}
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
        {/* --- END OF TRENDINGS SECTION */}
      </div>
    </>
  );
}
