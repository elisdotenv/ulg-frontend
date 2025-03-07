import Image from 'next/image';
import styles from './page.module.css';
import { truncateSpecialTitleSmall } from '@/utils/truncateTitle';
import Link from 'next/link';

export default function SidewayPost({ imageURL, alternativeText, tag, title, href }) {
  return (
    /* --- Post wrapper */
    <Link
      href={href}
      className={`${styles.shadow} grid grid-cols-12 gap-[0.5rem] pb-[8px] border-b-[1.75px] border-r-[1.25px] border-neutral-600`}>
      {/* --- Image Wrapper */}
      <div
        className={`bg-[#b6c605] py-[3px] col-span-4 relative top-[10px] left-[10px] z-10 flex items-center justify-center overflow-clip`}>
        <span className={`overflow-clip text-[0.875rem] text-black font-semibold text-center`}>#{tag}</span>
      </div>
      <div className={`col-start-1 col-span-6 min-w-[124px] max-w-[254px] h-[118px] z-20`}>
        <Image className={`w-full h-full object-cover`} src={imageURL} alt={alternativeText} width={1000} height={1000} />
      </div>

      {/* --- Text Context Wrapper */}
      <div className={`col-span-6  h-[118px] pr-[5px]`}>
        <p className={`text-[1.25rem]  font-bold leading-[1.375rem]`}>{truncateSpecialTitleSmall(title)}</p>
      </div>
    </Link>
  );
}
