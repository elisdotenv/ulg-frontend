import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { truncateDescriptionLargeSpecial, truncateTitleSpecial } from '@/utils/truncations';
import { lastUpdate } from '@/utils/date-functions';

const FirstFeaturedPost = ({ href, alt, src, title, description, time, author, authorImageURL, authorURL }) => {
  return (
    <>
      <div className={``}>
        <Link className={`${styles.postWrapper}`} href={href}>
          {/* 1. Image and Tag */}
          <div className={` ${styles.ImageWrapper}`}>
            <div className={`${styles.filter}`}></div>
            <Image className={`${styles.Image}`} width={1000} height={1000} priority={true} alt={alt} src={src} />
          </div>

          {/* 2. Text Headers */}
          <div className={` ${styles.TextHeaderWrapper}`}>
            <div>
              {/* Post Title */}
              <h1 className={`${styles.Title}`}>{truncateTitleSpecial(title)}</h1>
              {/* Post Description */}
              <p className={`${styles.Description} `}>{truncateDescriptionLargeSpecial(description)}</p>
            </div>

            <div className={`${styles.AuthorWrapper}`}>
              {/* Author Name */}
              <Image className={`rounded-full m-0 p-0`} src={authorImageURL} alt={''} width={28} height={28} objectFit='cover' />
              <h4 className={`${styles.AuthorName}`}>By {author}</h4>

              {/* Last Updated Time */}
              <h4 className={`${styles.Date}`}>Updated {lastUpdate(time)}</h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default FirstFeaturedPost;
