import React from 'react';
import Slider from './Slider';
import { useLanguage } from '../../context/LanguageContext';

const Announcements = () => {
  const { data } = useLanguage();
  return (
    <div>
      <h1 className='text-4xl text-center my-14  leading-snug font-medium font-paytoneOne'>
        {data?.announcements?.title}
      </h1>
      <Slider />
    </div>
  );
};

export default Announcements;
