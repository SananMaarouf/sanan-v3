import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { twMerge } from 'tailwind-merge';
import { Portal } from '@src/components/shared/portal';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faXmark } from '@fortawesome/free-solid-svg-icons';

export const LanguageSelectorMobile = ({ localeName, displayName }) => {
  const { locale, locales } = useRouter();
  const router = useRouter();
  const { t } = useTranslation();
  const [showDrawer, setShowDrawer] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  useEffect(() => {
    const close = e => {
      if (e.key === 'Escape') {
        setShowDrawer(false);
      }
    };

    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  });

  return (
    <>
      <button
        onClick={() => setShowDrawer(currentState => !currentState)}
        aria-expanded={showDrawer}
        aria-controls="locale-drawer"
        className="w-6"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      <Portal>
        <FocusLock disabled={!showDrawer} returnFocus={true}>
          <div
            role="presentation"
            tabIndex={-1}
            className={twMerge(
              'bg-colorBlack/[0.4] fixed left-0 top-0 h-full w-full transition-opacity duration-150',
              showDrawer ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
            )}
            onClick={() => setShowDrawer(false)}
          />
          <div
            id="locale-drawer"
            aria-modal="true"
            aria-hidden={!showDrawer}
            className={twMerge(
              `fixed right-0 top-0 z-40 h-full w-[80vw] bg-white px-5 py-8 duration-300 ease-in-out `,
              showDrawer ? 'translate-x-0' : 'translate-x-full',
              currentTheme == 'dark' ? 'dark:bg-gray-100' : 'bg-white',
            )}
          >
            <div className="flex items-center">
              <button className="ml-auto pl-2" onClick={() => setShowDrawer(false)}>
                <FontAwesomeIcon width={'3rem'} height={'3rem'} icon={faXmark} />
              </button>
            </div>
            <div className="mt-10 flex flex-col space-y-6 ">
              <Link
                href="/posts"
                title="Projects"
                className="text-lg hover:underline"
                onClick={() => setShowDrawer(false)}
              >
                {t('header.posts')}
              </Link>
              <Link href="/resume" title="Resume" className="text-lg hover:underline">
                {t('header.resume')}
              </Link>
              <Link
                href="#contact"
                onClick={e => {
                  e.preventDefault();
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setShowDrawer(false);
                }}
                className="text-lg hover:underline"
              >
                {t('header.contact')}
              </Link>
            </div>
            <p className="text-colorBlack mt-8 text-lg font-semibold"> {t('common.language')}</p>
            <select
              className="border-gray300 mt-2 block w-full rounded-md border px-2 py-2 text-sm"
              defaultValue={locale}
              onChange={event => {
                router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
                  locale: String(event.target.value),
                });
                setShowDrawer(!showDrawer);
              }}
            >
              {locales?.map(availableLocale => (
                <option key={availableLocale} value={availableLocale}>
                  {displayName(availableLocale).of(localeName(availableLocale))}
                </option>
              ))}
            </select>
            <button
              onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
              className="
          my-4 rounded-md bg-gray-800 px-2 
          py-1 text-lg text-white transition-all hover:bg-gray-600 
          dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300 "
            >
              <FontAwesomeIcon
                width={'2rem'}
                height={'2rem'}
                icon={theme == 'dark' ? faMoon : faSun}
              />
            </button>
          </div>
        </FocusLock>
      </Portal>
    </>
  );
};
