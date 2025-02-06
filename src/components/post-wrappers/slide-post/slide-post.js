import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { updatedTimeFn } from '@/utils/date/date-functions';
import { truncateDescriptionSmall, truncateTitle } from '@/utils/truncate/truncations';

const SlidePost = ({ gotohref, alternativeText, imageURL, postTitle, postId, updateTime, postDescription }) => {
  return (
    <>
      <Link href={gotohref}>
        <div className={`${styles.postWrapper} relative`}>
          <span
            className={`bg-black block text-white px-[1em] py-[1.5em] absolute top-[0.625em] z-30 left-[0.625em] ${styles.hexagon}`}>
            {/*    className={`bg-pink-400 block text-white px-[1em] py-[1.5em] absolute -top-[0.9em] z-30 -left-[0.2em] ${styles.hexagon}`}>*/}
            <p>{postId + 1}</p>
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
              className={`bg-[#001F3F] flex flex-col [6px] items-start justify-between absolute h-[47%] w-full bottom-0 left-0 p-[0.5rem]`}>
              <div>
                <h1 className={`${styles.Title}`}>{truncateTitle(postTitle)}</h1>
                <p className={`text-white`}>{truncateDescriptionSmall(postDescription)}</p>
              </div>
              <h6 className={`z-30 text-[#39FF14]`}>{updatedTimeFn(updateTime)}</h6>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SlidePost;
