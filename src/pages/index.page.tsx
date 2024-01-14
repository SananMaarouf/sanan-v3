import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { getServerSideTranslations } from './utils/get-serverside-translations';
import { SeoFields } from '@src/components/features/seo';
import { Container } from '@src/components/shared/container';
import { PostEntryOrder } from '@src/lib/__generated/sdk';
import { client, previewClient } from '@src/lib/client';
import { revalidateDuration } from '@src/pages/utils/constants';
import { ArticleSlider } from '../components/ArticleSlider';
import { LandingHero } from '../components/LandingHero';
import { motion } from 'framer-motion';
import { AboutHero } from '../components/AboutHero';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();

  const page = useContentfulLiveUpdates(props.page);
  const posts = useContentfulLiveUpdates(props.posts);

  const motionProps = {
    initial: { opacity: 0, y: +100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
  };
  const transitionCircOut = { ease: 'circOut', duration: 0.3 };
  const transitionEaseOut = { ease: 'easeOut', duration: 0.3 };

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <motion.div {...motionProps} transition={transitionCircOut}>
        <Container>
          <LandingHero />
        </Container>
      </motion.div>
      <motion.div {...motionProps} transition={transitionCircOut}>
        <Container className="mt-4">
          <AboutHero />
        </Container>
      </motion.div>
      <motion.div {...motionProps} transition={transitionEaseOut}>
        <Container className="mt-6 md:mt-20">
          <div className="flex flex-row justify-between">
            <h2 className="mb-2 text-center text-3xl md:ml-8 md:text-left">
              {t('landingPage.latestArticles')}
            </h2>
            <Link href={'/posts'}>
              <div className="flex flex-row rounded-md border-2 border-white hover:ml-2 hover:border-2 hover:border-slate-700 hover:underline">
                <h3 className="w-20 py-1 text-center text-xl">{t('landingPage.seeAll')}</h3>
                <span className="mr-1 flex w-6">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </Link>
          </div>
          <ArticleSlider articles={posts} />
        </Container>
      </motion.div>
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
