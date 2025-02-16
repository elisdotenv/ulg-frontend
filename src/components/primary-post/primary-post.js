import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { truncateDescription, truncateDescriptionLarge, truncateDescriptionMedium, truncateTitle } from '@/utils/truncations';
import { lastUpdate } from '@/utils/date-functions';

const PrimaryPost = ({ href, alt, src, tag, title, description, time, author, authorImageURL }) => {
  const baseURL = 'http://localhost:4000';

  return (
    <>
      <div>
        <Link className={`${styles.postWrapper}`} href={href}>
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
              <h1 className={`${styles.Title}`}>{truncateTitle(title)}</h1>
              {/* Post Description */}
              <p className={`${styles.Description} md:hidden`}>{truncateDescription(description)}</p>
              <p className={`${styles.Description} hidden md:block lg:hidden`}>{truncateDescriptionMedium(description)}</p>
              <p className={`${styles.Description} hidden lg:block`}>{truncateDescriptionLarge(description)}</p>
            </div>

            <div className={`${styles.AuthorWrapper}`}>
              {/* Author Name */}
              <div className={`flex gap-2 items-center`}>
                <Image
                  className={`rounded-full m-0 p-0`}
                  src={baseURL + authorImageURL}
                  alt={''}
                  width={30}
                  height={30}
                  objectFit='cover'
                />
                <h4 className={`${styles.AuthorName}`}>{author}</h4>
              </div>
              {/* Last Updated Time */}
              <h4 className={`${styles.Date}`}>Updated {lastUpdate(time)}</h4>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PrimaryPost;
