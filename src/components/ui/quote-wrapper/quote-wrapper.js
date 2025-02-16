import { clipSourceName } from '@/utils/truncations';
import styles from './page.module.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { MdFormatQuote } from 'react-icons/md';

const QuoteWrapper = ({ children, refsource }) => {
  const uname = refsource;

  return (
    <>
      <blockquote className={`${styles.quoteWrapper}`}>
        <div className={`${styles.customWrapper}`}>
          <MdFormatQuote className={`${styles.quoteIcon}`} />
          <p
            className={`text-[#f0705a] tracking-[0.03125em]  pb-[0.75rem] leading-[1.3] md:text-[2rem] md:leading-[1.2] lg:text-[2rem] text-[1.75rem] p-0 m-0 z-30 not-italic`}>
            {children}
          </p>
          <div className={`w-full h-[3px] md:h-[2px] bg-[#f0705a]`}></div>
          <h6 className={`italic   text-[#fcfdfd] text-[1.125rem] py-[0.375rem]`}>- {refsource}</h6>
        </div>
      </blockquote>
    </>
  );
};

export default QuoteWrapper;
