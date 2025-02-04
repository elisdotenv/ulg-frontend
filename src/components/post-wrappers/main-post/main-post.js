import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import {
  truncateDescription,
  truncateDescriptionLarge,
  truncateDescriptionMedium,
  truncateTitle,
} from '@/utils/truncate/truncations';
import { lastUpdateTimeFn } from '@/utils/date/date-functions';
import { FaArrowUpRightFromSquare, FaLink, FaCopy } from 'react-icons/fa6';

const MainPost = ({
  gotohref,
  alternativeText,
  imageURL,
  postTag,
  postTitle,
  postDescription,
  updatedTime,
  author,
  authorImageURL,
}) => {
  return (
    <>
      <div>
        <Link className={`${styles.postWrapper}`} href={gotohref}>
          {/* --- 1. Image and Tag */}
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
            <span className={`${styles.Tag}`}>{postTag}</span>
          </div>

          {/* --- 2. Text Headers */}
          <div className={` ${styles.TextHeaderWrapper}`}>
            <div>
              {/* --- Post Title */}
              <h1 className={`${styles.Title}`}>{truncateTitle(postTitle)}</h1>
              {/* --- Post Description */}
              <p className={`${styles.Description} md:hidden`}>{truncateDescription(postDescription)}</p>
              <p className={`${styles.Description} hidden md:block lg:hidden`}>{truncateDescriptionMedium(postDescription)}</p>
              <p className={`${styles.Description} hidden lg:block`}>{truncateDescriptionLarge(postDescription)}</p>
            </div>

            <div className={`${styles.AuthorWrapper} flex items-center justify-start gap-6`}>
              <div>
                {/* --- Author Name */}
                <div className={`flex gap-2 items-center`}>
                  <Image className={`rounded-full m-0 p-0`} src={authorImageURL} alt={''} width={40} height={40} />
                  <h4 className={`${styles.AuthorName}`}>{author?.authorname}</h4>
                </div>

                {/* --- Last Updated Time */}
                <h4 className={`${styles.Date}`}>Updated {lastUpdateTimeFn(updatedTime)}</h4>
              </div>

              {/* View Post Button and More Actions Button */}
              <button
                className={`text-white w-fit border-[1.25px] border-[#ffffff] px-[12px] py-[6px] rounded-[8px] flex items-center gap-2`}>
                See post <FaArrowUpRightFromSquare className={`text-white`} />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MainPost;
