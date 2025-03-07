import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { truncateTitle } from '@/utils/truncations';

const MobileSecondaryPost = ({ href, alt, src, tag, title }) => {
  console.log(`Image Props`);
  console.log(src);
  return (
    <>
      <Link href={href}>
        <div className={`${styles.postWrapper}`}>
          {/* 1. Image and Tag */}
          <div className={` ${styles.ImageWrapper}`}>
            <div className={`${styles.filter}`}></div>
            <Image className={`${styles.Image}`} width={1000} height={1000} priority={true} alt={alt} src={src} />
            {/* Post Title & Tag */}
            <div className={`${styles.TitleTag}`}>
              <span className={`${styles.Tag}`}>
                <span className={`text-[#f3ff6a] text-[0.9375rem] md:hidden`}>#</span>
                {tag}
              </span>
              <h1 className={`${styles.Title}`}>{truncateTitle(title)}</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MobileSecondaryPost;
