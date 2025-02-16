import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { truncateDescriptionSM, truncateTitle } from '@/utils/truncations';
import { lastUpdate } from '@/utils/date-functions';

const QuadraPost = ({ href, alt, src, tagOne, tagTwo, title, description, time }) => {
  return (
    <>
      <Link href={href}>
        <div className={`${styles.postWrapper}`}>
          {/*1. Post Title */}
          <h1 className={`${styles.Title}`}>{truncateTitle(title)}</h1>

          {/*2. Post Description & Image */}
          <div className={`${styles.DescriptionWrapper}`}>
            <p className={`${styles.Description}`}>{truncateDescriptionSM(description)}</p>
            <div className={`${styles.ImageWrapper}`}>
              <Image className={`${styles.Image}`} width={1000} height={1000} priority={true} alt={alt} src={src} />
            </div>
          </div>

          {/* 3. Tags & Time */}
          <div className={`${styles.TagWrapper}`}>
            <div className={`flex gap-[0.375rem]`}>
              <span className={`${styles.Tag}`}>{tagOne}</span>
              {tagTwo && <span className={`${styles.Tag}`}>{tagTwo}</span>}
            </div>
            <h4 className={`${styles.Date}`}>{lastUpdate(time)}</h4>
          </div>
        </div>
      </Link>
    </>
  );
};

export default QuadraPost;

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
      className={`text-[#dbd5ce] transition-all rounded text-[1.125rem]  font-medium hidden lg:col-start-4 lg:col-span-3 border-[2px] border-[#232527] py-[0.725rem] lg:flex gap-2 items-center justify-center`}
      onClick={handleSeeMore}>
      SEE MORE
    </button>
  )}
</div>;
