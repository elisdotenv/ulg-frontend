import styles from './page.module.css';
import Image from 'next/image';

const FilteredCoverImage = ({ alternativetext, imageURL }) => {
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
          alt={alternativetext}
          src={imageURL}
        />
      </div>
    </>
  );
};

export default FilteredCoverImage;
