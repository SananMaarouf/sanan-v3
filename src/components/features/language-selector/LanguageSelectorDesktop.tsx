import { LanguageIcon, ChevronDownTrimmedIcon, ChevronUpTrimmedIcon } from '@contentful/f36-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { twMerge } from 'tailwind-merge';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faEarthEurope,
  faMoon,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
const useClickOutside = (ref, setIsOpen) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setIsOpen]);
};

export const LanguageSelectorDesktop = ({ localeName, displayName }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const router = useRouter();
  const menuRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const localesToShow = router.locales?.filter(locale => locale !== router.locale);

  const [isOpen, setIsOpen] = useState(false);

  useClickOutside(containerRef, setIsOpen);

  const handleMenuKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();

        setIsOpen(currentState => !currentState);
        break;
      case 'Escape':
        e.preventDefault();

        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleMenuItemKeydown = (e: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.stopPropagation();
        e.preventDefault();

        e.currentTarget?.click();

        break;
      case 'ArrowUp':
      case 'ArrowDown':
        e.stopPropagation();
        e.preventDefault();

        const items = [...(menuRef.current?.children || [])];

        if (e.key === 'ArrowUp') {
          (items?.[index - 1] || items?.[items.length - 1])?.querySelector('a')?.focus();
        }

        if (e.key === 'ArrowDown') {
          (items?.[index + 1] || items?.[0])?.querySelector('a')?.focus();
        }

        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-row">
      <button
        onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
        className="
      mr-2 rounded-md bg-gray-800 px-2 
      py-1 text-lg text-white transition-all hover:bg-gray-600 
      dark:bg-gray-50 dark:text-gray-800 dark:hover:bg-gray-300 "
      >
        <FontAwesomeIcon width={'18px'} height={'18px'} icon={theme == 'dark' ? faMoon : faSun} />
      </button>
      <div className="pointer-events-auto relative block rounded-md" ref={containerRef}>
        <button
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-controls="menu-locale"
          className={twMerge(
            'flex items-center rounded-md border-2 border-white px-2 font-normal uppercase hover:border-gray-100 dark:border-gray-100 dark:hover:border-white',
            isOpen ? 'border-slate-700 dark:border-white' : '',
          )}
          onClick={() => setIsOpen(currentState => !currentState)}
        >
          <FontAwesomeIcon icon={faEarthEurope} width={'1rem'} height={'1rem'} className="mr-1" />
          {localeName(router.locale)}
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} width={'1rem'} height={'1rem'} className="mr-1" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} width={'1rem'} height={'1rem'} className="mr-1" />
          )}
        </button>
        <FocusLock disabled={!isOpen} returnFocus={true}>
          <ul
            ref={menuRef}
            className={twMerge(
              'top-100 absolute right-0 z-10 w-32 translate-y-3 cursor-pointer rounded-md bg-white text-center text-base shadow dark:bg-gray-100',
              isOpen ? 'block' : 'hidden',
            )}
            id="menu-locale"
            role="menu"
            onKeyDown={handleMenuKeyDown}
          >
            {localesToShow?.map((availableLocale, index) => (
              <li key={availableLocale} role="none">
                <Link
                  onKeyDown={e => handleMenuItemKeydown(e, index)}
                  role="menuitem"
                  className="block rounded-md border-2 bg-white p-2 capitalize hover:border-gray-700 dark:border-gray-700 dark:bg-gray-100 dark:hover:border-white"
                  href={{
                    pathname: router.pathname,
                    query: router.query,
                  }}
                  as={router.asPath}
                  locale={availableLocale}
                  onClick={() => setIsOpen(false)}
                >
                  {displayName(availableLocale).of(localeName(availableLocale))}
                </Link>
              </li>
            ))}
          </ul>
        </FocusLock>
      </div>
    </div>
  );
};
