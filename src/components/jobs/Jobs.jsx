import React from 'react';
import img from '../../assets/img/jobs_en.png';
import img2 from '../../assets/img/jobs_ar.webp';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
const Nursersies = () => {
  const navigate = useNavigate();
  const { language, data } = useLanguage();
  return (
    <div className='my-10 flex flex-col justify-between md:flex-row lg:flex-row gap-10 lg:items-start'>
      <div
        className={`lg:mt-14 lg:w-1/2 w-full lg:p-0 pl-10 block ${
          language === 'english' ? 'ml-4' : 'mr-4'
        }`}>
        <span className='block text-sm my-2 text-[#37AC94] font-poppins'>
          {data?.jobs?.span}
        </span>
        <h1 className='text-4xl font-paytoneOne font-semibold'>
          {data?.jobs?.title}
        </h1>
        <p className='my-8 font-poppins '>{data?.jobs?.text}</p>
        <button
          className='py-3 px-5 bg-[#37AC94] text-white rounded-lg'
          onClick={() => navigate(`${data?.jobs?.button?.url}`)}>
          {data?.jobs?.button.title}
        </button>
      </div>
      <div className={`lg:w-1/2 ${language === 'english' ? 'ml - 4' : 'mr-4'}`}>
        <img
          src={language === 'english' ? img : img2}
          alt=''
          className='w-full'
        />
      </div>
    </div>
  );
};

export default Nursersies;
