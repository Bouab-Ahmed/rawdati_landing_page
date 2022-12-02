import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import img from '../../assets/img/hero_image_01.png';
import img2 from '../../assets/img/hero_rotated_image_01.png';
import location from '../../assets/img/location.png';
import location2 from '../../assets/img/location2.png';

const Hero = () => {
  const { language, data } = useLanguage();
  console.log(data?.hero);
  return (
    <div className={`hero ${language === 'english' ? 'pl-10' : 'pr-10'}`}>
      <div className='left_hero'>
        <h1>
          <span>{data?.hero.title1}</span> <br /> {data?.hero.title2}
        </h1>
        <div className='flex items-center'>
          <img
            src={language === 'english' ? location : location2}
            alt=''
            className='w-[100px]'
          />
          <div className='hero_location'>
            <h4>{data?.hero.location}</h4>
            <span>{data?.hero.adress}</span>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={language === 'english' ? img : img2} alt='hero imgae' />
      </div>
    </div>
  );
};

export default Hero;
