import React from 'react';
import Image from 'next/image';
import portrait from '../../public/images/portrett_1_t.png';

export const LandingHero = () => {
  return (
    <div
      className="
      mx-auto
      my-10 
      flex 
      flex-col 
      overflow-hidden 
      rounded-2xl 
      border 
      border-gray-300 
      bg-transparent 
      md:flex-row 
      landscape:flex-row
      
      "
    >
      <div className="xl:pl-12 relative flex flex-1 basis-1/2 flex-col px-4 py-6 lg:py-12 ">
        <h1 className="text-3xl">
          <span className="underline">Sanan Maarouf</span>
        </h1>
        <div className="flex grow flex-col justify-between">
          <p className="mt-2 text-lg md:mt-4">Fullstack Developer</p>
        </div>
      </div>
      <div className="flex bg-transparent md:max-w-lg lg:max-w-xl">
        <Image src={portrait} placeholder="blur" alt="Sanan Maarouf" />
      </div>
    </div>
  );
};

export default LandingHero;
