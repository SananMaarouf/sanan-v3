import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { getServerSideTranslations } from './utils/get-serverside-translations';

import { ArticleContent, ArticleHero, ArticleTileGrid } from '@src/components/features/article';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';
import { useTranslation } from 'next-i18next';

/**
 * [slug].page.tsx is a Next.js page component responsible for rendering a specific blog post.
 * It fetches the blog post data based on the slug provided
 * in the URL and displays the post content.
 *
 * The component uses getStaticProps for
 * data fetching at build time, which makes the page static and SEO-friendly.
 * It also uses the useContentfulLiveUpdates hook to
 * enable live updates for the blog post content.
 *
 * The page layout consists of several components:
 * - SeoFields: for SEO optimization.
 * - ArticleHero: for displaying the blog post title, subtitle and featured image and date.
 * - ArticleContent: for displaying the detailed content of the blog post.
 * - ArticleTileGrid: for displaying related blog posts.
 *
 * The page is wrapped in a Container component for consistent layout and spacing.
 */
const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const blogPost = useContentfulLiveUpdates(props.blogPost);
  const relatedPosts = blogPost?.relatedBlogPostsCollection?.items;
  const technologies = blogPost?.technologiesCollection?.items?.map(item => item.name);

  if (!blogPost) return null;

  return (
    <>
      {blogPost.seoFields && <SeoFields {...blogPost.seoFields} />}
      <Container>
        <ArticleHero article={blogPost} />
      </Container>

      <Container className="mt-8 max-w-4xl">
        <ArticleContent article={blogPost} />
        <div className="mx-auto md:w-4/5">
          <h3>{t('article.createdWith')}</h3>
          {technologies && technologies.length > 0 && (
            <div className="pt-2">
              {technologies.map((item, index) => (
                <p
                  key={index}
                  className={`inline-flex rounded-md bg-gray-50 px-3 py-1 text-lg text-gray-600 ring-1 ring-inset ring-gray-500/10 ${
                    index !== 0 ? 'ml-2' : ''
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      </Container>

      {relatedPosts && relatedPosts.length > 0 && (
        <Container className="mt-8 max-w-5xl">
          <h2 className="mb-4 md:mb-6">{t('article.relatedArticles')}</h2>
          <ArticleTileGrid className="md:grid-cols-2" articles={relatedPosts} />
        </Container>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale, draftMode: preview }) => {
  if (!params?.slug || !locale) {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }

  const gqlClient = preview ? previewClient : client;

  try {
    const [blogPageData, landingPageData] = await Promise.all([
      gqlClient.postEntry({ slug: params.slug.toString(), locale, preview }),
      gqlClient.pageLanding({ locale, preview }),
    ]);

    const blogPost = blogPageData.postEntryCollection?.items[0];
    const landingPage = landingPageData.pageLandingCollection?.items[0];

    if (!blogPost) {
      return {
        notFound: true,
        revalidate: revalidateDuration,
      };
    }

    return {
      revalidate: revalidateDuration,
      props: {
        ...(await getServerSideTranslations(locale)),
        previewActive: !!preview,
        blogPost,
      },
    };
  } catch {
    return {
      notFound: true,
      revalidate: revalidateDuration,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const dataPerLocale = locales
    ? await Promise.all(locales.map(locale => client.postEntryCollection({ locale, limit: 2 })))
    : [];

  const paths = dataPerLocale
    .flatMap((data, index) =>
      data.postEntryCollection?.items.map(blogPost =>
        blogPost?.slug
          ? {
              params: {
                slug: blogPost.slug,
              },
              locale: locales?.[index],
            }
          : undefined,
      ),
    )
    .filter(Boolean);

  return {
    paths,
    fallback: 'blocking',
  };
};

export default Page;
