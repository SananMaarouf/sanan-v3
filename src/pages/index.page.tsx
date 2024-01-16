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
import { delay, motion } from 'framer-motion';
import { AboutHero } from '../components/AboutHero';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from '@src/components/threejs/Scene';

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { t } = useTranslation();
  const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 980) {
      setIsDesktopOrLaptop(true);
    }
  }, []);

  const page = useContentfulLiveUpdates(props.page);
  const posts = useContentfulLiveUpdates(props.posts);
  const [isHovered, setIsHovered] = useState(false);

  const motionProps = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, delay: 2 },
  };
  const motionProps2 = {
    initial: { opacity: 0, y: +100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 },
    transition: { duration: 1.2, delay: 3 },
  };

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <div>
        {isDesktopOrLaptop && (
          <Canvas
            style={{ position: 'fixed', zIndex: -1, height: '100%', width: '100%' }}
            camera={{ fov: 100, near: 0.1, far: 200 }}
          >
            <Scene />
          </Canvas>
        )}
      </div>

      <motion.div {...motionProps}>
        <Container>
          <LandingHero />
        </Container>
      </motion.div>
      {/* <motion.div {...motionProps}>
        <Container className="mt-4">
          <AboutHero />
        </Container>
      </motion.div> */}
      <motion.div {...motionProps2}>
        <Container className="mt-6 md:mt-20">
          <div className="flex flex-row justify-between">
            <h2 className="mb-2 text-center text-3xl md:ml-8 md:text-left">
              {t('landingPage.latestArticles')}
            </h2>
            {/* see all button and animation for that */}
            <motion.div
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <Link href={'/posts'}>
                <div className="flex flex-row rounded-md border-2 border-white hover:ml-2 hover:border-2 hover:border-gray-100 hover:underline dark:border-gray-100 dark:hover:border-white">
                  <h3 className="w-20 py-1 text-center text-xl">{t('landingPage.seeAll')}</h3>
                  <motion.div animate={{ x: isHovered ? 5 : 0 }}>
                    <span className="mr-2 flex w-6 py-1 ">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
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
