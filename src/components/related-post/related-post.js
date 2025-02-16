import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { truncateSliderTitle } from '@/utils/truncations';
import { lastUpdate } from '@/utils/date-functions';

const RelatedPost = ({ href, alt, src, tag, title, description, time, author }) => {
  return (
    <>
      <Link href={href}>
        <div className={`${styles.postWrapper}`}>
          {/* 1. Image and Tag */}
          <div className={` ${styles.ImageWrapper}`}>
            <div className={`${styles.filter}`}></div>
            <Image className={`${styles.Image}`} width={1000} height={1000} priority={true} alt={alt} src={src} />
            <span className={`${styles.Tag}`}>{tag}</span>
          </div>

          {/* 2. Text Headers */}
          <div className={` ${styles.TextHeaderWrapper}`}>
            <div>
              {/* Post Title */}
              <h1 className={`${styles.Title}`}>{truncateSliderTitle(title)}</h1>
            </div>

            <div className={`${styles.AuthorWrapper}`}>
              {/* Author Name */}
              <h4 className={`${styles.AuthorName}`}>By {author}</h4>
              {/* Last Updated Time */}
              <h4 className={`${styles.Date}`}>Updated {lastUpdate(time)}</h4>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RelatedPost;
