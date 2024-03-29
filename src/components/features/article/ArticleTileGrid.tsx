import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { ArticleTile } from '@src/components/features/article/ArticleTile';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleTileGridProps extends HTMLProps<HTMLDivElement> {
  articles?: Array<PageBlogPostFieldsFragment | null>;
}

export const ArticleTileGrid = ({ articles, className, ...props }: ArticleTileGridProps) => {
  return articles && articles.length > 0 ? (
    <div
      className={twMerge(
        'grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-3 lg:gap-x-12 lg:gap-y-12',
        className,
      )}
      {...props}
    >
      {articles.map((article, index) => {
        return article ? (
          <motion.div whileHover={{ scale: 1.05 }}>
            <ArticleTile key={index} article={article} />
          </motion.div>
        ) : null;
      })}
    </div>
  ) : null;
};
