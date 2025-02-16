import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import { GoRocket } from 'react-icons/go';
const JoinWhatsappCTA = () => {
  return (
    <>
      <div className={`bg-[#222527] px-[1.5em] pb-[1.5em] rounded-lg border border-[#a8b3cf] flex flex-col items-center`}>
        <h2 className={`text-[1.5em] leading-[1.3em] font-bold text-light flex items-center gap-2`}>Into the bugverse</h2>
        <h4 className={`text-[1.25em] leading-[1.3em] font-semibold text-light text-center`}>
          Join Our WhatsApp Group, Stay Informed
        </h4>
        <p className={`text-light text-center`}>
          Join our exclusive WhatsApp group for the latest <span className={`text-grayedText font-semibold`}>updates</span>,
          <span className={`text-grayedText font-semibold`}> tips</span>, and
          <span className={`text-grayedText font-semibold`}> community support</span>. Stay informed.
        </p>

        <Link
          className={`no-underline flex self-stretch lg:self-center md:self-center items-center justify-center gap-2 bg-[#181818] font-medium text-[0.875em]  text-light py-[0.75em] px-[1.5em] text-center rounded-[8px]`}
          href={`https://chat.whatsapp.com/IULSUOku2zQ2ZcgnK2oiDr`}>
          Get started
          <GoArrowRight className={`text-[1.25em] text-light`} />
        </Link>
      </div>
    </>
  );
};

export default JoinWhatsappCTA;
