import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import img from '../../assets/img/hero_image_01.png';
import img2 from '../../assets/img/hero_rotated_image_01.png';
import Model from '../model/Model';

const Hero = () => {
  const [open, setOpen] = useState(false);
  const { language, data } = useLanguage();

  const handleOpen = () => setOpen(!open);

  return (
    <div className={`hero ${language === 'english' ? 'pl-10' : 'pr-10'}`}>
      <div className='left_hero'>
        <h1>
          <span>{data?.hero.title1}</span> <br /> {data?.hero.title2}
        </h1>
        <button
          onClick={handleOpen}
          className='bg-[#37AC94] px-4 py-2 rounded-full rounded-tl-none text-white lg:flex lg:items-center lg:gap-2 animation mt-6 text-lg font-normal mb-10'>
          {data?.login?.button?.title}
        </button>
        <Model
          data={data?.users}
          handleLanguageChange={null}
          open={open}
          handleOpen={handleOpen}
          field='users'
        />
      </div>
      <div className=''>
        <img src={language === 'english' ? img : img2} alt='hero imgae' />
      </div>
    </div>
  );
};

export default Hero;
