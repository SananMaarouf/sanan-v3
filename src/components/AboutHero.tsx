import React from 'react';
import Image from 'next/image';
import about from '../../public/images/about_me.png';

export const AboutHero = () => {
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
      md:flex-row 
      landscape:flex-row-reverse
      "
    >
      <div className="xl:pl-12 relative flex flex-1 basis-1/2 flex-col px-4 py-6 lg:py-12 ">
        <h1 className="text-3xl">
          <span className="underline">About me</span>
        </h1>
        <div className="flex grow flex-col justify-between">
          <p className="mt-2 text-lg md:mt-4">
            I am a 26 year old full stack developer, working in Oslo, Norway I&apos;ve been
            interested in computers for as long as I can remember. I really enjoy learning new
            technologies and use them to create practical solutions.
          </p>
        </div>
      </div>
      <div className="flex bg-transparent md:max-w-lg lg:max-w-xl">
        <Image src={about} placeholder="blur" alt="about me" />
      </div>
    </div>
  );
};

export default AboutHero;
