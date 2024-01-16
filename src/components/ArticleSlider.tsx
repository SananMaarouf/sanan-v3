import { HTMLProps } from 'react';
import Carousel from 'react-grid-carousel';
import { useTranslation } from 'next-i18next';
import { ArticleTile } from 'src/components/features/article/ArticleTile';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';
import { CtfImage } from '@src/components/features/contentful';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface SliderProps extends HTMLProps<HTMLDivElement> {
  articles?: Array<PageBlogPostFieldsFragment | null>;
}

export const ArticleSlider = ({ articles }: SliderProps) => {
  const motionProps = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, delay: 2 },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const { t } = useTranslation();
  return articles && articles.length > 0 ? (
    <Carousel
      cols={3}
      rows={1}
      gap={10}
      loop
      responsiveLayout={[
        {
          breakpoint: 990,
          cols: 2,
        },
        {
          breakpoint: 570,
          cols: 1,
        },
      ]}
      mobileBreakpoint={300}
    >
      {articles.map(article => {
        return article ? (
          <Carousel.Item key={article.sys.id}>
            <motion.div {...motionProps}>
              <div
                className="
                flex 
                h-full 
                w-full 
                flex-col 
                border-gray-100
                bg-white 
              bg-opacity-70
                bg-clip-padding 
                p-3 
                backdrop-blur-sm 
                backdrop-filter
              dark:bg-gray-100 
                dark:bg-opacity-50 
                dark:backdrop-blur-md
                "
              >
                <Link className="flex h-full w-full flex-col" href={`/${article.slug}`}>
                  <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-gray-100 shadow-sm dark:border-white">
                    {article.coverImage && (
                      <CtfImage
                        nextImageProps={{ className: 'object-cover aspect-[16/10] w-full' }}
                        {...article.coverImage}
                      />
                    )}
                    <div className="mb-2 mt-2 flex h-20 px-4 md:h-28">
                      {article.title && (
                        <h2 className="text-gray800 text-lg md:mb-3 md:text-sm lg:text-2xl landscape:text-xl">
                          {article.title}
                        </h2>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </Carousel.Item>
        ) : null;
      })}
    </Carousel>
  ) : (
    <div
      className="
      flex 
      h-20
      h-full 
      w-full 
      flex-col 
      border-gray-100 
      bg-white
      bg-opacity-70 
    bg-clip-padding
      p-3 
      text-center 
      backdrop-blur-sm 
      backdrop-filter
    dark:bg-gray-100 
      dark:bg-opacity-50 
      dark:backdrop-blur-md
      "
    >
      <p className="my-auto text-lg">{t('landingPage.no_articles')}</p>
    </div>
  );
};
