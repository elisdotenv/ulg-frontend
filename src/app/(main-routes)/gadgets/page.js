'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryPost from '@/components/post-wrappers/primary-post/primary-post';
import TernaryPost from '@/components/post-wrappers/ternary-post/page';
import styles from './page.module.css';
import SecondaryPost from '@/components/post-wrappers/secondary-post/secondary-post';

export default function GadgetsPage() {
  // --- State variables
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleSecondaryCount, setVisibleSecondaryCount] = useState(8);

  // --- API Endpoint
  const API_URL = 'https://tranquil-morning-50f1598ff6.strapiapp.com/api/posts?populate=*';

  useEffect(() => {
    const fetchPosts = async () => {
      const config = {
        url: API_URL,
        method: 'GET',
      };

      try {
        const res = await axios(config);
        const { data } = res.data;
        console.log(res);

        // --- Filtering Only 'Gadgets' category posts
        const gadgetsOnlyPosts = data.filter((p) =>
          p.attributes.categories.data.some((c) => c.attributes.NavigationItem === 'Gadgets')
        );

        // --- Sort filtered posts by updatedAt in descending order
        const sortedPosts = gadgetsOnlyPosts.sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt));
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

  // --- On Error Encounter
  if (error) {
    return (
      <div className={`bg-red-500 w-screen h-screen flex justify-center items-center`}>
        <p className={`text-white`}>
          An error has occurred <br /> {error.message}
        </p>
      </div>
    );
  }

  // --- On Loading Resources
  if (isLoading) {
    return (
      <div className={`w-screen h-screen  flex justify-center items-center`}>
        <p className={`text-white text-xl font-semibold`}>Loading....</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return <p className={`text-black`}>There are currently no posts for this dummy niche!</p>;
  }

  // --- 1. Latest 6 posts excluding featured
  /* --> (Posts that are updated latest and have 'isfeaturedpost' property set to 'false') */
  const primaryPosts = posts
    .filter((p) => !p.attributes.isfeaturedpost)
    .sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt))
    .slice(0, 6);
  const firstPrimaryPost = primaryPosts[0]; // Most Latest Post
  const fivePrimaryPost = primaryPosts.slice(1, 6); // Five Most Latest Posts

  // --- 2. Featured posts (Limit to 6 featured posts)
  /* --> (Posts with 'isfeaturedpost' property set to 'true' and sorted inorder of their updated time) */
  const featuredPosts = posts
    .filter((p) => p.attributes.isfeaturedpost) // Filter for featured posts
    .sort((a, b) => new Date(b.attributes.updatedAt) - new Date(a.attributes.updatedAt));

  // --- 3. Secondary posts (Neither Featured Post Nor Most Latest Post)
  const secondaryPosts = posts
    .filter((p) => !p.attributes.isFeatured && !primaryPosts.includes(p))
    .slice(0, visibleSecondaryCount);

  const handleSeeMore = () => {
    // --- Increase count by 8 on click
    setVisibleSecondaryCount((c) => c + 8);
  };

  console.log(`[posts]`);
  console.log(posts);

  return (
    // --- Main Gadgets Posts Wrapper
    <main className={`max-w-[1300px] mx-auto min-h-screen grid grid-cols-12 gap-[2rem]`}>
      {/* >>> Group-1 [MOBILE, TABLETS & DESKTOP SCREENS] */}
      <div className={`w-full h-full col-span-12 md:grid lg:grid grid-cols-12 pt-[5rem]`}>
        {primaryPosts.length > 0 && (
          <ul role='list' className={`${styles.topReviews} col-span-12 px-[1rem] `}>
            {primaryPosts.map((p) => (
              <li key={p.id} className={`${styles.topReviewPost}`}>
                <SecondaryPost
                  gotohref={'/'}
                  alternativeText={p?.attributes?.coverimage?.data?.attributes?.alternativeText}
                  imageURL={p?.attributes?.coverimage?.data?.attributes?.url}
                  postTag={p?.attributes?.tags}
                  postTitle={p?.attributes?.title}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* END OF GROUP-1 */}
    </main>
  );
}
