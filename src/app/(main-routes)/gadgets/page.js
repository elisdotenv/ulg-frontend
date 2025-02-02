'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryPost from '@/components/post-wrappers/primary-post/primary-post';
import TernaryPost from '@/components/post-wrappers/ternary-post/page';
import styles from './page.module.css';

export default function GadgetsPage() {
  // --- State variables
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleSecondaryCount, setVisibleSecondaryCount] = useState(8);

  // --- Countdown timer state
  const [countdown, setCountdown] = useState(0);

  // --- API Endpoint
  const API_URL = 'https://tranquil-morning-50f1598ff6.strapiapp.com/api/posts?populate=*';

  useEffect(() => {
    // Set the end time in local storage if it doesn't already exist
    const endTime = localStorage.getItem('countdownEndTime');
    if (!endTime) {
      const currentTime = Date.now();
      const newEndTime = currentTime + 72 * 60 * 60 * 1000; // 72 hours in milliseconds
      localStorage.setItem('countdownEndTime', newEndTime);
    }

    // Calculate the remaining time
    const calculateRemainingTime = () => {
      const endTime = Number(localStorage.getItem('countdownEndTime'));
      const timeLeft = endTime - Date.now();
      return Math.max(timeLeft, 0); // Ensure it doesn't go negative
    };

    setCountdown(calculateRemainingTime());

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        const newCountdown = prevCountdown - 1000; // Decrease by one second
        return Math.max(newCountdown, 0); // Prevent negative countdown
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <div className={`w-screen h-screen flex justify-center items-center`}>
        <p className={`text-white text-xl font-semibold`}>Loading....</p>
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

  // --- Countdown Timer Calculation
  const hours = Math.floor(countdown / 3600000);
  const minutes = Math.floor((countdown % 3600000) / 60000);
  const seconds = Math.floor((countdown % 60000) / 1000);

  return (
    <div className={`text-white w-screen h-screen flex items-center justify-center p-[2rem]`}>
      <div className='text-center'>
        <p className={`text-white font-medium text-[1.25rem]`}>Initializing...</p>
        <p className={`text-xl mt-4`}>
          {String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </p>
      </div>
    </div>
  );
}
