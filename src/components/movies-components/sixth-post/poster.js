import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { AiFillTag } from 'react-icons/ai';

const TertiaryMoviesPost = ({ href, alt, src, title }) => {
  return (
    <>
      <Link href={href}>
        <div className={`${styles.postWrapper}`}>
          {/*  --- Image and Tag */}
          <div className={` ${styles.ImageWrapper}`}>
            <Image className={`${styles.Image} relative`} width={1000} height={1000} priority={true} alt={alt} src={src} />
            <div
              className={`bg-[#333333] filter grayscale flex flex-col gap-[6px] items-start absolute h-[35%] w-full bottom-0 left-0 p-[0.5rem]`}>
              <h1 className={`${styles.Title}`}>{title}</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TertiaryMoviesPost;
