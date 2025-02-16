import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { truncateTitle } from '@/utils/truncations';
import { lastUpdate } from '@/utils/date-functions';

const FirstFeaturedPostInverted = ({ href, alt, src, title, description, time, author, authorImageURL, authorURL }) => {
  return (
    <>
      <div className={`border-pink-500 border-[3px]`}>
        <Link className={`${styles.postWrapper}`} href={href}>
          {/* 1. Text Headers */}
          <div className={` ${styles.TextHeaderWrapper}`}>
            <div>
              {/* Post Title */}
              <h1 className={`${styles.Title}`}>{truncateTitle(title)}</h1>
              {/* Post Description */}
              <p className={`${styles.Description} `}>{description}</p>
              {/* <p className={`${styles.Description} hidden md:block`}>{truncateDescriptionMedium(description)}</p>*/}
            </div>

            <div className={`${styles.AuthorWrapper}`}>
              {/* Author Name */}
              <Link href={'/'} className={`flex items-center justify-between gap-[0.625rem]`}>
                <Image
                  className={`rounded-full m-0 p-0`}
                  src={authorImageURL}
                  alt={''}
                  width={28}
                  height={28}
                  objectFit='cover'
                />
                <h4 className={`${styles.AuthorName}`}>By {author}</h4>
              </Link>

              {/* Last Updated Time */}
              <h4 className={`${styles.Date}`}>Updated {lastUpdate(time)}</h4>
            </div>
          </div>

          {/* 2. Image */}
          <div className={` ${styles.ImageWrapper}`}>
            <div className={`${styles.filter}`}></div>
            <Image className={`${styles.Image}`} width={1000} height={1000} priority={true} alt={alt} src={src} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default FirstFeaturedPostInverted;
