// Scrolls horizontally, used to render top-most featured posts in [Mobile Screens] with 'isfeaturedpost' property set to true
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function TernaryPost({ gotohref, alternativeText, imageURL, postTitle }) {
  return (
    <div className={`mb-[1.5rem]`}>
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
              /*     className={`bg-[#2873ce] filter grayscale flex flex-col gap-[6px] items-start absolute h-[35%] w-full bottom-0 left-0 p-[0.5rem]`}>*/
              className={`bg-[#1e2522] flex flex-col gap-[6px] items-start absolute h-[35%] w-full bottom-0 left-0 p-[0.5rem]`}>
              <h1 className={`${styles.Title}`}>{postTitle}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
