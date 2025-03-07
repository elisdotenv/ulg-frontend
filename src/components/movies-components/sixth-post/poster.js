import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { timeAgo } from '@/utils/dateUtils';
import { truncateDescriptionSmall } from '@/utils/truncations';
import { truncateTitle } from '@/utils/truncateTitle';
import GlitchText from '@/components/ui/glitch-text/glitch-text';
import { BsStars } from 'react-icons/bs';

const TertiaryMoviesPost = ({ href, alt, src, title, postId, time, tag }) => {
  return (
    <>
      <Link href={href}>
        <div className={`${styles.postWrapper} relative`}>
          <span
            /*  className={`bg-black block text-white px-[1em] py-[1.5em] absolute top-[0.625em] z-30 left-[0.625em] ${styles.hexagon}`}>*/
            className={`block px-[1em] py-[1.5em] absolute -top-[0.5em] z-30 -left-[0.2em] ${styles.hexagon}`}>
            <GlitchText postId={postId + 1} />
          </span>

          {/* 1. Image and Tag */}
          <div className={` ${styles.ImageWrapper}`}>
            <Image className={`${styles.Image} relative`} width={1000} height={1000} priority={true} alt={alt} src={src} />
            <div
              className={`bg-[#242424] flex flex-col items-start justify-between absolute h-[53%] w-full bottom-0 left-0 px-[0.75rem] py-[0.5rem]`}>
              <div>
                <span
                  className={`relative text-black text-[0.9375rem] font-bold bg-transparent border-[2px] border-[#bbc832] px-[12px] py-[3px] mb-[6px] inline-block`}>
                  #{tag}
                  <span
                    className={`bg-[#fff] w-full h-full absolute left-[5px] bottom-[-4px] text-black text-[0.9375rem] px-[12px] py-[3px] mb-2 ${styles.tagShadow}`}>
                    #{tag}
                  </span>
                </span>
                <h1 className={`${styles.Title}`}>{truncateTitle(title)}</h1>
              </div>
              <h6 className={`z-30 text-[#fff] font-semibold flex items-center gap-2`}>
                {timeAgo(time)} <BsStars className={`text-[#f3ff6a]`} />
              </h6>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default TertiaryMoviesPost;
