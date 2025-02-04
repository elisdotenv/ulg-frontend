import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { updatedTimeFn } from '@/utils/date/date-functions';
import { truncateDescriptionSmall, truncateTitle } from '@/utils/truncate/truncations';

const SlidePost = ({ gotohref, alternativeText, imageURL, postTitle, postId, updateTime, postDescription }) => {
  return (
    <>
      <Link href={gotohref}>
        <div className={`${styles.postWrapper}`}>
          <span className={`bg-pink-500 text-white rotate-45 px-[1em] py-[0.5em] absolute top-[1.25em] z-20 left-[1.25em]`}>
            <p className={`-rotate-45`}> {postId + 1}</p>
          </span>

          {/* 1. Image and Tag */}
          <div className={` ${styles.ImageWrapper}`}>
            <Image
              className={`${styles.Image} relative`}
              width={1000}
              height={1000}
              priority={true}
              alt={alternativeText}
              src={imageURL}
            />
            <div
              className={`bg-[#dfdfdf] flex flex-col gap-  [6px] items-start justify-between absolute h-[45%] w-full bottom-0 left-0 p-[0.5rem]`}>
              <div>
                <h1 className={`${styles.Title}`}>{truncateTitle(postTitle)}</h1>
                <p>{truncateDescriptionSmall(postDescription)}</p>
              </div>
              <h6 className={`z-30 text-red-600`}>{updatedTimeFn(updateTime)}</h6>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SlidePost;
