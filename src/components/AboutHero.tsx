import React from 'react';
import Image from 'next/image';
import about from '../../public/images/about_me.png';
import { useTranslation } from 'next-i18next';
export const AboutHero = () => {
  const { t } = useTranslation();
  return (
    <div
      className="
      mx-auto 
      flex 
      flex-col 
      overflow-hidden 
      rounded-2xl 
      border 
      border-gray-300 
      bg-transparent 
      md:w-4/5
      md:flex-row-reverse
      landscape:flex-row-reverse
      "
    >
      {/* text div */}
      <div
        className="
        xl:pl-12 
        relative 
        flex 
        flex-col 
        px-4 
        py-6 
        md:w-2/3 
        lg:py-12
        "
      >
        <h1 className="text-3xl">{t('landingPage.about.title')}</h1>
        <div className="flex grow flex-col justify-between">
          <p className="mt-2 text-lg md:mt-4">{t('landingPage.about.subtitle')}</p>
        </div>
      </div>
      {/* image div */}
      <div className="xl:max-w-lg flex overflow-clip bg-transparent md:w-3/6">
        <Image src={about} placeholder="blur" height={500} width={500} alt="about me" />
      </div>
    </div>
  );
};

export default AboutHero;
