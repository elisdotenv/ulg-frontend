import { capitalizeTitle } from '@/utils/capitalizeFirstLetter';
import styles from './page.module.css';
import Image from 'next/image';

const SpecialCoverImage = ({ alternativeText, imageURL, Title }) => {
  return (
    <>
      {/* Image and Title */}
      <div className={`relative`}>
        <div className={`${styles.filter}`}></div>
        <Image
          className={`object-cover relative block m-0 p-0 lg:m-0 lg:p-0`}
          width={0}
          height={0}
          layout='responsive'
          priority={true}
          alt={alternativeText}
          src={imageURL}
        />
        {Title && (
          <h2 className={`absolute text-[3.125rem] leading-[1.1] font-bold   bottom-[15px]  left-[15px] z-30 text-light/80`}>
            {capitalizeTitle(Title)}
          </h2>
        )}
      </div>
    </>
  );
};

export default SpecialCoverImage;
