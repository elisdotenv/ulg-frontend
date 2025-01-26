'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryPost from '@/components/post-wrappers/primary-post/primary-post';

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
        <p className={`text-black text-xl font-semibold`}>Loading....</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return <p className={`text-black`}>There are currently no posts for this dummy niche!</p>;
  }

  // --- 1. Latest 6 posts excluding featured
  const primaryPosts = posts.filter((p) => !p.attributes.isfeaturedpost).slice(0, 6);
  const firstPrimaryPost = primaryPosts[0]; // Most Latest Post
  const fivePrimaryPost = primaryPosts.slice(1, 6); // Five Most Latest Posts

  // --- 2. Featured posts (Limit to 8 featured posts)
  const featuredPosts = posts.filter((p) => p.attributes.isfeaturedpost).slice(0, 8);

  // --- 3. Secondary posts (Neither Featured Post Nor Most Latest Post)
  const secondaryPosts = posts
    .filter((p) => !p.attributes.isFeatured && !primaryPosts.includes(p))
    .slice(0, visibleSecondaryCount);

  const handleSeeMore = () => {
    // --- Increase count by 8 on click
    setVisibleSecondaryCount((c) => c + 8);
  };

  console.log(`Posts: `);
  console.log(posts);

  return (
    <div className={`w-screen h-screen bg-purple-500 flex flex-col items-center justify-center`}>
      <p className={`text-white`}>This is the gadgets page</p>
      {posts.map((p) => (
        <PrimaryPost
          gotohref={`/gadgets/${p.attributes.slug}`}
          alternativeText={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
          imageURL={p?.attributes?.coverimage?.data?.attributes?.url}
          postTitle={p?.attributes?.title}
          postDescription={p?.attributes?.description}
          authorname={p?.attributes?.author?.authorname}
          authorImageURL={p?.attributes?.authorimage?.data?.attributes?.url}
          updatedTime={p?.attributes?.updatedAt}
          authorLink={''}
        />
      ))}
    </div>
  );
}
