import Image from 'next/image';
import styles from './page.module.css';
import { capitalizeFirstLetter } from '@/utils/truncate/capitalizations';

const ImageWrapper = ({ imageURL, alternativeText, width, height, caption }) => {
  return (
    <>
      <div className={`flex flex-col gap-[6px] relative px-[1rem] lg:px-0`}>
        <Image src={imageURL} alt={alternativeText} width={width} height={height} className={`m-0 rounded`} />
        <p className={`font-secondary italic  text-[.875rem] text-center leading-[22px] m-0 text-grayed text-lightGray`}>
          {capitalizeFirstLetter(alternativeText)}
        </p>
        <div className={`${styles.alt} text-[#f6f3ef] text-[.75rem] p-[0.375rem] z-30 font-normal absolute right-[0.5rem] top-0`}>
          {caption}
        </div>
      </div>
    </>
  );
};

export default ImageWrapper;
