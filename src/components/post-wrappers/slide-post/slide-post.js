import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const SlidePost = ({ gotohref, alternativeText, imageURL, postTitle }) => {
  return (
    <>
      <Link href={gotohref}>
        <div className={`${styles.postWrapper}`}>
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
              className={`bg-[#333333] flex flex-col gap-[6px] items-start absolute h-[35%] w-full bottom-0 left-0 p-[0.5rem]`}>
              <h1 className={`${styles.Title}`}>{postTitle}</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SlidePost;
