import Image from 'next/image';
import styles from './page.module.css';

const FilteredImageCover = ({ alternativeText, imageURL, Tag }) => {
  return (
    <>
      {/* Image and Tag */}
      <div className={`relative`}>
        <div className={`${styles.filter}`}></div>
        <Image
          priority={true}
          className={`object-cover relative block m-0 p-0 lg:m-0 lg:p-0`}
          width={1000}
          height={1000}
          alt={alternativeText}
          src={imageURL}
        />
        {Tag && (
          <span
            className={`absolute text-[0.875rem] font-semibold  bottom-[10px] block left-[10px] z-30 text-light/80 border border-light py-[3px] px-[12px] rounded-[4px]`}>
            {Tag}
          </span>
        )}
      </div>
    </>
  );
};

export default FilteredImageCover;
