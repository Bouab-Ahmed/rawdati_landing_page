import { Input } from '@material-tailwind/react';
import React from 'react';
import { user, wilaya, country } from '../../shared/values';
import { useLanguage } from '../../context/LanguageContext';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const RegisterUser = () => {
  const { language } = useLanguage();
  const lang = language === 'arabic' ? user.ar : user.en;
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
            <Input {...settings} label={lang.firstName} />
          </div>
          <div className='my-2 w-full'>
            <Input {...settings} label={lang.lastName} />
          </div>
        </div>

        <Select
          placeholder={
            language === 'english' ? wilaya.en.title : wilaya.ar.title
          }
          closeMenuOnSelect={false}
          className='basic-single my-2'
          classNamePrefix='select'
          components={animatedComponents}
          isClearable={true}
          isMulti
          isRtl={language === 'arabic' ? true : false}
          isSearchable={true}
          name='filed'
          options={
            language === 'english' ? wilaya.en.options : wilaya.ar.options
          }
          styles={customStyles}
          defaultValue=''
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
        <div className='my-2 w-full'>
          <Input {...settings} label={lang.facebook} />
        </div>
        <div className='w-full flex items-center justify-center'>
          <button
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

export default RegisterUser;
