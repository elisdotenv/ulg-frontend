import { truncateTitle } from '@/utils/truncate/truncations';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';

const SecondaryPost = ({ gotohref, alternativeText, imageURL, postTag, postTitle }) => {
  return (
    <>
      <Link tabIndex='0' href={gotohref}>
        <div className={`${styles.postWrapper}`}>
          {/*  --- Image and Tag */}
          <div className={` ${styles.ImageWrapper}`}>
            <div className={`${styles.filter}`}></div>
            <Image
              className={`${styles.Image}`}
              width={1000}
              height={1000}
              priority={true}
              alt={alternativeText}
              src={imageURL}
            />
            {/* --- Post Title & Tag */}
            <div className={`${styles.TitleTag}`}>
              <span className={`${styles.Tag}`}>{postTag[0].tags}</span>
              <h1 className={`${styles.Title}`}>{truncateTitle(postTitle)}</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SecondaryPost;
