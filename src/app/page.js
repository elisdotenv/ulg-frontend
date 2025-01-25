'use client';
import styles from './page.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import colors from 'colors';
import PrimaryPost from '@/components/primary-post/primary-post';

export default function Home() {
  const [pinnedPosts, setPinnedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching posts data from external api
  useEffect(() => {
    const fetchPosts = async () => {
      // Axios-Configuration Object
      const config = {
        url: 'https://tranquil-morning-50f1598ff6.strapiapp.com/api/posts?populate=*',
        method: 'GET',
      };
      try {
        const res = await axios(config);
        const { data } = res.data;
        setPinnedPosts(data);

        // ### Debugging
        console.log(`Returned Data Object 👽`);
        console.log(data);
      } catch (error) {
        console.log(`An error has occured: ${error.message}`.red.bold);
      } finally {
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <div className={`flex flex-col py-[1rem]`}>
        <ul className={`${styles.secondaryPostsGrid} md:hidden px-0 md:px-[1rem] flex flex-col gap-[0.75rem]`}>
          {pinnedPosts.map((p) => (
            <li className={`${styles.secondaryPost} md:hidden`} key={p.id}>
              <PrimaryPost
                gotohref={`/gadgets/${p.attributes.slug}`}
                alternativeText={p?.attributes?.coverimage?.data?.attributes?.alternativeText || ''}
                imageURL={p?.attributes?.coverimage?.data?.attributes?.url}
                postTitle={p?.attributes?.title}
                postDescription={p?.attributes?.description}
                authorname={p?.attributes?.author?.authorname}
                authorImageURL={p?.attributes?.authorimage?.data?.attributes?.url}
                tag={p?.attributes?.tags}
                updatedTime={p?.attributes?.updatedAt}
                authorLink
              />
            </li>
          ))}
        </ul>
        <p className={`text-white font-semibold text-[1rem] text-center`}>In development..... Hang on!</p>
      </div>
    </>
  );
}
