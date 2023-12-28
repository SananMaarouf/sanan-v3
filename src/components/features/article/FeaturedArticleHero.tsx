import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { twMerge } from 'tailwind-merge';
import { FormatDate } from '@src/components/shared/format-date';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';
import { CtfImage } from '@src/components/features/contentful';
import React, { useEffect } from 'react';

/**
 * This file defines a React component named `ArticleHero2` that is used to display a hero section for an article.
 * The component takes in an `article` object, a `isFeatured` boolean, and a `isReversedLayout` boolean as props.
 * The `article` object contains information about the article such as the title, short description, and published date.
 * The `isFeatured` boolean indicates whether the article is featured or not.
 * The `isReversedLayout` boolean indicates whether the layout of the component should be reversed or not.
 *
 * The component uses a slider with various settings for displaying the article information in a visually appealing way.
 * The slider settings include the number of slides to show,
 * the speed of the autoplay, the autoplay speed, the easing function for the animation, etc.
 * The slider is also responsive and adjusts its settings based on the viewport width.
 *
 * The component also uses the `useTranslation` hook for
 * - internationalization and
 * - the `useContentfulInspectorMode` hook for inspecting the Contentful entry of the article.
 */

interface ArticleHeroProps {
  article: PageBlogPostFieldsFragment;
  isFeatured?: boolean;
}

export const FeaturedArticleHero = ({ article }: ArticleHeroProps) => {
  /* const { t } = useTranslation(); */
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });
  const { title, shortDescription, publishedDate } = article;
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-300 md:flex-row landscape:flex-row">
      {/* the title, subtitle, date */}
      <div className="lg:py-12 xl:pl-12 relative flex flex-1 basis-1/2 flex-col px-4 py-6 ">
        <h1 className="text-3xl" {...inspectorProps({ fieldId: 'title' })}>
          {title}
        </h1>
        <div className="flex grow flex-col justify-between">
          {shortDescription && (
            <p
              className="mt-2 text-lg md:mt-4"
              {...inspectorProps({ fieldId: 'shortDescription' })}
            >
              {shortDescription}
            </p>
          )}

          <div
            className={twMerge('mr-auto hidden text-lg md:block')}
            {...inspectorProps({ fieldId: 'publishedDate' })}
          >
            <FormatDate date={publishedDate} />
          </div>
        </div>
      </div>
      <div className="flex max-w-lg basis-1/2" {...inspectorProps({ fieldId: 'featuredImage' })}>
        {article.featuredImage && (
          <CtfImage
            nextImageProps={{ className: 'w-full', priority: true, sizes: undefined }}
            {...article.featuredImage}
          />
        )}
      </div>
    </div>
  );
};