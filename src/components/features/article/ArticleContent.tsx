import { useContentfulInspectorMode } from '@contentful/live-preview/react';

import { CtfRichText } from '@src/components/features/contentful';
import { PageBlogPostFieldsFragment } from '@src/lib/__generated/sdk';

interface ArticleContentProps {
  article: PageBlogPostFieldsFragment;
}
export const ArticleContent = ({ article }: ArticleContentProps) => {
  const { description } = article;
  const inspectorProps = useContentfulInspectorMode({ entryId: article.sys.id });

  return (
    <div {...inspectorProps({ fieldId: 'content' })}>
      <CtfRichText json={description?.json} links={description?.links} />
    </div>
  );
};
