import Image from 'next/image';
import styles from './page.module.css';

const FilteredImageLg = ({ alternativeText, imageURL, Tag, ImgCaption }) => {
  return (
    <>
      {/* Image and Tag */}
      <div className={`relative`}>
        <div className={`${styles.filter}`}></div>
        <Image
          className={`object-cover rounded-[4px] relative block m-0 p-0 lg:m-0 lg:p-0`}
          width={0}
          height={0}
          priority={true}
          alt={alternativeText}
          src={imageURL}
        />
        {Tag && (
          <span
            className={`absolute text-[0.875rem] font-semibold bottom-[10px] block left-[10px] z-30 text-light/80 border border-light py-[3px] px-[12px] rounded-[4px]`}>
            {Tag}
          </span>
        )}
        <span className={`${styles.captionText} absolute top-[0.5rem] right-[1rem] text-[#f6f3ef] text-[0.875rem]`}>
          {ImgCaption}
        </span>
      </div>
    </>
  );
};

export default FilteredImageLg;
