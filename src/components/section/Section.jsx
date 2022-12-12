import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { images } from '../../shared/images';
import { useNavigate } from 'react-router-dom';
const Section = ({ data, imgFirst = false, sectionTitle }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  return (
    <section>
      <div className='my-10 flex flex-col justify-between md:flex-row lg:flex-row gap-10 lg:items-start'>
        {[
          <div
            key={0}
            className={`lg:w-1/2 ${
              language === 'english' ? 'mr - 4' : 'ml-4'
            }`}>
            <img
              src={
                language === 'english'
                  ? images[sectionTitle]?.en
                  : images[sectionTitle]?.ar
              }
              alt=''
              className='w-full'
            />
          </div>,
          <div
            key={1}
            className={`lg:mt-14 lg:w-1/2 w-full lg:p-0 pl-10 block ${
              language === 'english' ? 'ml-4' : 'mr-4'
            }`}>
            <span className='block text-sm my-2 text-[#37AC94] font-poppins'>
              {data?.span}
            </span>
            <h1 className='text-4xl font-paytoneOne font-semibold'>
              {data?.title}
            </h1>
            <p className='my-8 font-poppins text-[#A8A5A3]'>{data?.text}</p>
            <button
              className='bg-[#37AC94] px-4 py-2 rounded-full rounded-tl-none text-white lg:flex lg:items-center lg:gap-2 animation'
              onClick={() => navigate(`${data?.button?.url}`)}>
              {data?.button.title}
            </button>
          </div>,
        ]
          .sort((a, b) => (imgFirst ? 1 : -1))
          .map((e) => e)}
      </div>
    </section>
  );
};

export default Section;
