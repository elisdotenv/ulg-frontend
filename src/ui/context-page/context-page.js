import styles from './page.module.css';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Link from 'next/link';
import { FaLightbulb } from 'react-icons/fa';
import ImageWrapper from '../image-wrapper/image-wrapper';
import QuoteWrapper from '../quote-wrapper/quote-wrapper';

const ContextPage = ({ contextOne, contextTwo, noteContext, refSource }) => {
  return (
    <>
      {/* --- Text block one Element */}
      {contextOne && (
        /* Format Wrapper */
        <div className={`prose`}>
          <BlocksRenderer
            content={contextOne}
            blocks={{
              /* Inline Lists (unordered) Element  */
              list: ({ children }) => (
                <>
                  <ul className={`${styles.unorderedList}`}>{children}</ul>
                </>
              ),

              /* Inline Paragraphs Element */
              paragraph: ({ children }) => (
                <p className={`px-[1rem] lg:px-0 text-[#fffdfa] font-normal text-[1.125rem] leading-[1.7]`}>{children}</p>
              ),

              /* Inline Links Element */
              link: ({ children }) => (
                <Link href={`/`} className={`text-[#2ABAC4] underline text-[1.125rem] leading-[28px] font-inherit font-normal`}>
                  {children}
                </Link>
              ),

              /* Inline Image(s) Element */
              image: ({ image }) => (
                <ImageWrapper
                  imageURL={image.url}
                  alternativeText={image.alternativeText}
                  caption={image.caption}
                  width={600}
                  height={600}
                />
              ),

              /* Inline Blockquote Element */
              quote: ({ children }) => <QuoteWrapper refSource={refSource}>{children}</QuoteWrapper>,

              /* Inline Headings Element */
              heading: ({ children, level }) => {
                switch (level) {
                  case 1:
                    return <h1 variant='h1 px-[1rem] lg:px-0'>{children}</h1>;
                  case 2:
                    return (
                      /* Main Headers */
                      <h2
                        className={`text-[#fcfdfd] px-[1rem] lg:px-0   text-[2rem] leading-[1.2em] mb-[0.375rem] mt-0`}
                        variant='h2'>
                        {children}
                      </h2>
                    );
                  case 3:
                    return <h3 variant='h3'>{children}</h3>;
                  case 4:
                    return (
                      /* Subheaders */
                      <h4
                        className={`text-[#fcfdfd] px-[1rem] lg:px-0   leading-[1em] text-[1.75rem] mt-0 mb-[0.5rem]`}
                        variant='h4'>
                        {children}
                      </h4>
                    );
                  case 5:
                    return <h5 variant='h5'>{children}</h5>;
                  case 6:
                    /* Minor Headers */
                    return (
                      <h6 className={`text-[#fcfdfd] px-[1rem] lg:px-0  text-[1.375rem] leading-[1.25em] mt-0`} variant='h6'>
                        {children}
                      </h6>
                    );
                  default:
                    return <h1 variant='h1'>{children}</h1>;
                }
              },

              code: ({ children }) => (
                <pre className={`bg-[#232527] border-[0.875px] border-[#dcd7cf] rounded-none overflow-scroll`}>
                  <code className={`text-[#ffffda] overflow-scroll`}>{children}</code>
                </pre>
              ),
            }}
            modifiers={{
              bold: ({ children }) => <strong className={`text-[#ffffda] inline text-[1.25rem]`}>{children}</strong>,
              italic: ({ children }) => <span className='italic text-inherit font-inherit'>{children}</span>,
              code: ({ children }) => <div>{children}</div>,
              strikethrough: ({ children }) => <strike className={``}>{children}</strike>,
            }}
          />
        </div>
      )}

      {/* --- Post Note  [NoteContent] */}
      {noteContext && (
        /* Format Wrapper */
        <div className={`prose`}>
          <span className={`text-[#fcfdfd] uppercase tracking-widest px-[1rem] text-[1.25rem] flex items-center gap-2`}>
            <FaLightbulb className={`text-[1.375rem] text-[#FFD700]`} />
            Note
          </span>
          <div
            className={`bg-gradient-to-b from-[#333333] via-[#333333] to-transparent rounded-t-2xl border-[#f0705a] border-t-[2px] relative p-0 mb-[1.75rem]`}>
            <BlocksRenderer
              content={noteContext}
              blocks={{
                /* Inline Paragraphs Element */
                paragraph: ({ children }) => (
                  <p className={`px-[1rem] lg:px-0 text-[#fffdfa] font-normal text-[1.125rem] leading-[1.7]`}>{children}</p>
                ),

                /* Inline Links Element */
                link: ({ children }) => (
                  <Link href={`/`} className={`text-[#2ABAC4] underline text-[1.125rem] leading-[28px] font-inherit font-normal`}>
                    {children}
                  </Link>
                ),

                /* Inline Headings Element */
                heading: ({ children, level }) => {
                  switch (level) {
                    case 1:
                      return <h1 variant='h1 px-[1rem] lg:px-0'>{children}</h1>;
                    case 2:
                      return (
                        /* Main Headers */
                        <h2
                          className={`text-[#fcfdfd] px-[1rem] lg:px-0   text-[2rem] leading-[1.2em] mb-[0.375rem] mt-0`}
                          variant='h2'>
                          {children}
                        </h2>
                      );
                    case 3:
                      return <h3 variant='h3'>{children}</h3>;
                    case 4:
                      return (
                        /* Subheaders */
                        <h4
                          className={`text-[#fcfdfd] px-[1rem] lg:px-0   leading-[1em] text-[1.75rem] mt-0 mb-[0.5rem]`}
                          variant='h4'>
                          {children}
                        </h4>
                      );
                    case 5:
                      return <h5 variant='h5'>{children}</h5>;
                    case 6:
                      /* Minor Headers */
                      return (
                        <h6 className={`text-[#fcfdfd] px-[1rem] lg:px-0  text-[1.375rem] leading-[1.25em] mt-0`} variant='h6'>
                          {children}
                        </h6>
                      );
                    default:
                      return <h1 variant='h1'>{children}</h1>;
                  }
                },

                code: ({ children }) => (
                  <pre className={`bg-[#232527] border-[0.875px] border-[#dcd7cf] rounded-none overflow-scroll`}>
                    <code className={`text-[#ffffda] overflow-scroll`}>{children}</code>
                  </pre>
                ),
              }}
              modifiers={{
                bold: ({ children }) => <strong className={`text-[#ffffda] text-[1.25rem]`}>{children}</strong>,
                italic: ({ children }) => <span className='italic text-inherit font-inherit'>{children}</span>,
                code: ({ children }) => <div>{children}</div>,
                strikethrough: ({ children }) => <strike className={``}>{children}</strike>,
              }}
            />
          </div>
        </div>
      )}

      {/* --- Text-block divider (only visible if note contents are available) */}
      {/* w-[calc(100%-2rem)] mx-auto  */}
      {noteContext ? <div className={`md:hidden w-full h-[3px] bg-[#333333] mb-[0.75rem]`}></div> : ''}

      {/* --- RichText(Blocks) - [text block two] */}
      {contextTwo && (
        <div className={`prose`}>
          <BlocksRenderer
            content={contextTwo}
            blocks={{
              /* Inline List Element (ordered list) */
              list: ({ children }) => (
                <>
                  <ol className={`${styles.orderedList}`}>{children}</ol>
                </>
              ),

              /* Inline Paragraphs Element */
              paragraph: ({ children }) => (
                <p className={`px-[1rem] lg:px-0 text-[#fffdfa] font-normal text-[1.125rem] leading-[1.7]`}>{children}</p>
              ),

              /* Inline Links Element */
              link: ({ children }) => (
                <Link href={`/`} className={`text-[#2ABAC4] underline text-[1.125rem] leading-[28px] font-inherit font-normal`}>
                  {children}
                </Link>
              ),

              /* Inline Image(s) Element */
              image: ({ image }) => (
                <ImageWrapper
                  imageURL={image.url}
                  alternativeText={image.alternativeText}
                  caption={image.caption}
                  width={600}
                  height={600}
                />
              ),

              /* Inline Blockquote Element */
              quote: ({ children }) => <QuoteWrapper refSource={refSource}>{children}</QuoteWrapper>,

              /* Inline Headings Element */
              heading: ({ children, level }) => {
                switch (level) {
                  case 1:
                    return <h1 variant='h1 px-[1rem] lg:px-0'>{children}</h1>;
                  case 2:
                    return (
                      /* Main Headers */
                      <h2
                        className={`text-[#fcfdfd] px-[1rem] lg:px-0  text-[2rem] leading-[1.2em] mb-[0.375rem] mt-0`}
                        variant='h2'>
                        {children}
                      </h2>
                    );
                  case 3:
                    return <h3 variant='h3'>{children}</h3>;
                  case 4:
                    return (
                      /* Subheaders */
                      <h4
                        className={`text-[#fcfdfd] px-[1rem] lg:px-0   leading-[1em] text-[1.75rem] mt-0 mb-[0.5rem]`}
                        variant='h4'>
                        {children}
                      </h4>
                    );
                  case 5:
                    return <h5 variant='h5'>{children}</h5>;
                  case 6:
                    /* Minor Headers */
                    return (
                      <h6 className={`text-[#fcfdfd] px-[1rem] lg:px-0   text-[1.375rem] leading-[1.25em] mt-0`} variant='h6'>
                        {children}
                      </h6>
                    );
                  default:
                    return <h1 variant='h1'>{children}</h1>;
                }
              },

              code: ({ children }) => (
                <pre className={`bg-[#232527] border-[0.875px] border-[#dcd7cf] rounded-none overflow-scroll`}>
                  <code className={`text-[#ffffda] overflow-scroll`}>{children}</code>
                </pre>
              ),
            }}
            modifiers={{
              bold: ({ children }) => <strong className={`text-[#eeebee]`}>{children}</strong>,
              italic: ({ children }) => <span className='italic text-inherit font-inherit'>{children}</span>,
              code: ({ children }) => <div>{children}</div>,
              strikethrough: ({ children }) => <strike className={``}>{children}</strike>,
            }}
          />
        </div>
      )}
    </>
  );
};

export default ContextPage;
