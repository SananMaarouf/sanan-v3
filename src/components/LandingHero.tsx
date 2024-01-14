import React from 'react';
import Image from 'next/image';
import portrait from '../../public/images/portrett_1_t.png';
import { useTranslation } from 'next-i18next';

export const LandingHero = () => {
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
      md:flex-row
      landscape:flex-row
      "
    >
      <div className="xl:pl-12 relative my-auto flex flex-1 basis-1/2 flex-col px-4 py-6 lg:py-12 ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          <span className="underline">Sanan Maarouf</span>
        </h1>
        <div className="flex grow flex-col justify-between">
          <h2 className="mt-2 text-lg md:mt-4 md:text-2xl lg:text-3xl">
            {t('landingPage.jobtitle')}
          </h2>
        </div>
      </div>
      <div className="flex justify-center bg-transparent md:max-w-lg lg:max-w-xl">
        <Image src={portrait} placeholder="blur" alt="Sanan Maarouf" />
      </div>
    </div>
  );
};

export default LandingHero;
