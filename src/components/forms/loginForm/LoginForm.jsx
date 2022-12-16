import React, { useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { loginForm } from '../../../shared/values';
import img from '../../../assets/img/shutterstock.png';
import { Input } from '@material-tailwind/react';
import Model from '../../../components/model/Model';
const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const { language, data } = useLanguage();
  const log = language === 'english' ? loginForm.en : loginForm.ar;
  const settings = {
    color: 'green',
    variant: 'outlined',
  };
  const handleOpen = () => setOpen(!open);
  return (
    <div className='lg:h-screen'>
      <div className='w-full pt-32 mb-10 leading-snug text-center'>
        <h1 className='font-medium font-paytoneOne text-2xl'>
          {log.title} <span className='text-[#E33D38]'>rawdati.dz</span>
        </h1>
      </div>
      <div className='mx-20 flex h-auto gap-4'>
        <div className='flex- w-full border-gray-900 py-4 px-10 flex-start'>
          <form action='' className='flex flex-col gap-4 mx-auto'>
            <h2 className='font-paytoneOne text-xl text-gray-800'>
              {log.header}
            </h2>

            <div className='lg:flex gap-2'>
              <div className='my-2 w-full'>
                <Input {...settings} label={log.phone.placeholder} />
              </div>
            </div>
            <div className='lg:flex gap-2'>
              <div className='my-2 w-full'>
                <Input {...settings} label={log.password.placeholder} />
              </div>
            </div>
            <span className='text-sm self-end -my-5 text-[#96A7AF] cursor-pointer hover:text-gray-900'>
              {log.forgotPassword}
            </span>
            <div className='w-full flex justify-center'>
              <button
                className={`bg-[#37AC94] px-4 py-2 rounded-full ${
                  language === 'english' ? 'rounded-tl-none' : 'rounded-tr-none'
                } text-white animation mt-6 text-lg font-normal w-1/3`}>
                {log.login}
              </button>
            </div>
          </form>
          <div>
            <h4 className='text-sm text-[#96A7AF] py-4'>
              {log.dontHaveAccount}{' '}
              <span
                className='text-[#37AC94] cursor-pointer'
                onClick={handleOpen}>
                {log.register}
              </span>
              <Model
                data={data?.users}
                handleLanguageChange={null}
                open={open}
                handleOpen={handleOpen}
                field='users'
              />
            </h4>
          </div>
        </div>
        <div className='hidden lg:block lg:w-[100vw] self-stretch pt-4'>
          <img src={img} alt='' className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
