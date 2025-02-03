'use client';
import styles from './page.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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
  if (isLoading) return <p>Fetching.....</p>;

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

  return (
    <div className={`w-screen h-screen flex flex-col items-center justify-center text-white`}>
      <p>Title - {title}</p>
      <p>Description - {description}</p>
    </div>
  );
}
