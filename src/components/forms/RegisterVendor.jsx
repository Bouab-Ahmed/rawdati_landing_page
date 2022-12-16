import { Input } from '@material-tailwind/react';
import React from 'react';
import { vendor, wilaya } from '../../shared/values';
import { useLanguage } from '../../context/LanguageContext';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const RegisterVendor = () => {
  const { language } = useLanguage();
  const lang = language === 'arabic' ? vendor.ar : vendor.en;
  const wilayaLang = language === 'arabic' ? wilaya.ar : wilaya.en;
  const settings = {
    color: 'green',
    variant: 'outlined',
  };

  const customStyles = {
    option: (styles, state) => ({
      ...styles,
      color: state.isSelected ? '#FFF' : '#37AC94',
      backgroundColor: state.isSelected ? '#37AC94' : styles.color,
      '&:hover': {
        color: '#FFF',
        backgroundColor: '#37AC94',
      },
    }),
    control: (base) => ({
      ...base,
      boxShadow: 0,
      borderColor: '#B0BEC5',
      backgroundColor: 'transparent',
      color: '#B0BEC5',
      textFillColor: '#6A8592',
      '&:hover': {
        borderColor: '#B0BEC5',
      },
    }),
  };

  const [value, setValue] = React.useState();
  return (
    <div className='flex flex-col gap-4 w-3/4 mx-auto'>
      <form action=''>
        <div className='lg:flex gap-2'>
          <div className='my-2 w-full'>
            <Input {...settings} label={lang.name} />
          </div>
        </div>
        <div class='flex items-center justify-center w-full'>
          <label
            htmlFor='dropzone-file'
            className='flex flex-col items-center justify-center w-full h-48 my-2 border-2 border-[#6A8592] border-dashed rounded-lg cursor-pointer bg-transparent dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
              <svg
                aria-hidden='true'
                className='w-10 h-10 mb-3 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokelinejoin='round'
                  strokeWidth='2'
                  d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
              </svg>
              <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                <span className='font-semibold'>{lang.logo}</span>
              </p>
              <p className='text-xs text-gray-500 dark:text-gray-400'>
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id='dropzone-file' type='file' className='hidden' />
          </label>
        </div>
        <Select
          placeholder={lang.filed.title}
          closeMenuOnSelect={false}
          className='basic-single my-2'
          classNamePrefix='select'
          components={animatedComponents}
          isClearable={true}
          isMulti
          isRtl={language === 'arabic' ? true : false}
          isSearchable={true}
          name='filed'
          options={lang.filed.options}
          styles={customStyles}
          defaultValue=''
        />

        <Select
          placeholder={wilayaLang.title}
          className='basic-single'
          classNamePrefix='select'
          components={animatedComponents}
          isClearable={true}
          defaultValue=''
          isRtl={language === 'arabic' ? true : false}
          isSearchable={true}
          name='wilaya'
          options={wilayaLang.options}
          styles={customStyles}
        />
        <PhoneInput
          placeholder={lang.phone}
          value={value}
          onChange={setValue}
          className='w-full my-2 border-[#B0BEC5] border-2 bg-opacity-0 rounded-md py-1.5 px-2 text-[#] focus:!outline-none focus:ring-0 focus:border-transparent'
        />

        <div className='my-2 w-full'>
          <Input {...settings} label={lang.email} />
        </div>
        <div className='w-full flex items-center justify-center'>
          <button
            onClick={() => navigate('/verification')}
            className={`bg-[#37AC94] px-4 py-2 rounded-full ${
              language === 'english' ? 'rounded-tl-none' : 'rounded-tr-none'
            } text-white animation mt-6 text-lg font-normal w-1/3`}>
            {lang.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterVendor;
