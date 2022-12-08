import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { images } from '../../shared/images';
import { useNavigate } from 'react-router-dom';
const Section = ({ data, imgFirst = false, sectionTitle }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  return (
    <section>
      {imgFirst ? (
        <div className='my-10 flex flex-col justify-between md:flex-row lg:flex-row gap-10 lg:items-start'>
          <div
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
          </div>
          <div
            className={`lg:mt-14 lg:w-1/2 w-full lg:p-0 pl-10 block ${
              language === 'english' ? 'ml-4' : 'mr-4'
            }`}>
            <span className='block text-sm my-2 text-[#37AC94] font-poppins'>
              {data?.span}
            </span>
            <h1 className='text-4xl font-paytoneOne font-semibold'>
              {data?.nurseries?.title}
            </h1>
            <p className='my-8 font-poppins '>{data?.text}</p>
            <button
              className='py-3 px-5 bg-[#37AC94] text-white rounded-lg'
              onClick={() => navigate(`${data?.button?.url}`)}>
              {data?.button.title}
            </button>
          </div>
        </div>
      ) : (
        <div className='my-10 flex flex-col justify-between md:flex-row lg:flex-row gap-10 lg:items-start'>
          <div
            className={`lg:mt-14 lg:w-1/2 w-full lg:p-0 pl-10 block ${
              language === 'english' ? 'ml-4' : 'mr-4'
            }`}>
            <span className='block text-sm my-2 text-[#37AC94] font-poppins'>
              {data?.span}
            </span>
            <h1 className='text-4xl font-paytoneOne font-semibold'>
              {data?.jobs?.title}
            </h1>
            <p className='my-8 font-poppins '>{data?.text}</p>
            <button
              className='py-3 px-5 bg-[#37AC94] text-white rounded-lg'
              onClick={() => navigate(`${data?.button?.url}`)}>
              {data?.button.title}
            </button>
          </div>
          <div
            className={`lg:w-1/2 ${
              language === 'english' ? 'ml - 4' : 'mr-4'
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Section;
