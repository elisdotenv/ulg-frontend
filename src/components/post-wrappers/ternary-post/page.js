// Scrolls horizontally, used to render top-most featured posts in [Mobile Screens] with 'isfeaturedpost' property set to true
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function TernaryPost({ gotohref, alternativeText, imageURL, postTitle }) {
  console.log(`Debugging props, checking if props are passed to the component successfully`);
  console.log(alternativeText);
  /*  console.log(gotohref);
  console.log(imageURL);
  console.log(postTitle);*/

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
              className={`bg-[#24292f] filter grayscale flex flex-col gap-[6px] items-start absolute h-[35%] w-full bottom-0 left-0 p-[0.5rem]`}>
              <h1 className={`${styles.Title}`}>{postTitle}</h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
