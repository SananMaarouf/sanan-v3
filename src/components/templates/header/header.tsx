import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';
import { motion } from 'framer-motion';

export const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const isPostsPage = router.pathname === '/posts';
  const isResumePage = router.pathname === '/resume';
  return (
    <header className="sticky top-0 z-30 rounded-md bg-white bg-opacity-70 bg-clip-padding py-5 backdrop-blur-lg backdrop-filter dark:bg-gray-800 dark:bg-opacity-70 dark:backdrop-blur-md">
      <nav>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <Container className="flex items-center justify-between">
            <Link href="/" title={t('common.homepage')}>
              <span className="text-2xl font-bold hover:underline">Sanan</span>
            </Link>

            <div className="hidden space-x-6 md:block">
              <Link
                href="/posts"
                title="Projects"
                className={`text-lg hover:underline ${
                  isPostsPage ? 'rounded-full border-2 border-gray-600 px-4 py-2' : ''
                }`}
              >
                {t('header.posts')}
              </Link>
              <Link
                href="/resume"
                title="Resume"
                className={`text-lg hover:underline ${
                  isResumePage ? 'rounded-full border-2 border-gray-600 px-4 py-2' : ''
                }`}
              >
                {t('header.resume')}
              </Link>
              <Link
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-lg hover:underline"
              >
                {t('header.contact')}
              </Link>
            </div>

            <LanguageSelector />
          </Container>
        </motion.div>
      </nav>
    </header>
  );
};
