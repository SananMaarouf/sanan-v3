import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Link from 'next/link';
import { getServerSideTranslations } from './utils/get-serverside-translations';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { PostEntryOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';
import { ArticleSlider } from '../components/ArticleSlider';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const page = useContentfulLiveUpdates(props.page);
  const posts = useContentfulLiveUpdates(props.posts);

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <Container className="mt-4">
        <p>hello</p>
      </Container>
      <Container className="mt-4">
        <h2 className="mb-2 md:mb-6">{t('landingPage.latestArticles')}</h2>
        <ArticleSlider articles={posts} />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale, draftMode: preview }) => {
  try {
    const gqlClient = preview ? previewClient : client;

    const landingPageData = await gqlClient.pageLanding({ locale, preview });
    const page = landingPageData.pageLandingCollection?.items[0];

    const blogPostsData = await gqlClient.postEntryCollection({
      limit: 6,
      locale,
      order: PostEntryOrder.PublishedDateDesc,
      where: {},
      preview,
    });
    const posts = blogPostsData.postEntryCollection?.items;

    return {
      revalidate: revalidateDuration,
      props: {
        previewActive: !!preview,
        ...(await getServerSideTranslations(locale)),
        page,
        posts,
      },
    };
  } catch {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }
};

export default Page;
