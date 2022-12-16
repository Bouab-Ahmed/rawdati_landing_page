import React from 'react';
import { verification } from '../../shared/values';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import img from '../../assets/img/footer.png';

const Verify = () => {
  const navigate = useNavigate()
  const { language } = useLanguage();
  const lang = language === 'arabic' ? verification.ar : verification.en;
  return (
    <div className='pt-24 px-3 flex flex-col'>
      <div className='container mx-auto'>
        <div className='max-w-sm mx-auto md:max-w-lg'>
          <div className='w-full'>
            <div className='flex items-center hover:bg-[#37AC94] text-[#37AC94] w-fit py-2 px-3 hover:rounded-lg hover:bg-opacity-20' onClick={()=>navigate('/')}>
              <FaArrowLeft />
              <button className='unset text-[#37AC94] px-2'>{lang.back}</button>
            </div>
            <div className='bg-white h-64 py-3 rounded text-center'>
              <h1 className='text-2xl font-normal font-paytoneOne'>
                {lang.verify}
              </h1>

              <div
                id='otp'
                className='flex flex-row justify-center text-center px-2 mt-5'>
                <input
                  className='m-2 border border-gray-600 focus:ring-0 focus-within:border-[#37AC94] focus:outline-2 h-10 w-10 text-center form-control rounded'
                  type='text'
                  id='first'
                  maxlength='1'
                />
                <input
                  className='m-2 border border-gray-600 focus:ring-0 focus-within:border-[#37AC94] focus:outline-2 h-10 w-10 text-center form-control rounded'
                  type='text'
                  id='second'
                  maxlength='1'
                />
                <input
                  className='m-2 border border-gray-600 focus:ring-0 focus-within:border-[#37AC94] focus:outline-2 h-10 w-10 text-center form-control rounded'
                  type='text'
                  id='third'
                  maxlength='1'
                />
                <input
                  className='m-2 border border-gray-600 focus:ring-0 focus-within:border-[#37AC94] focus:outline-2 h-10 w-10 text-center form-control rounded'
                  type='text'
                  id='fourth'
                  maxlength='1'
                />
                <input
                  className='m-2 border border-gray-600 focus:ring-0 focus-within:border-[#37AC94] focus:outline-2 h-10 w-10 text-center form-control rounded'
                  type='text'
                  id='fifth'
                  maxlength='1'
                />
                <input
                  className='m-2 border border-gray-600 focus:ring-0 focus-within:border-[#37AC94] focus:outline-2 h-10 w-10 text-center form-control rounded'
                  type='text'
                  id='sixth'
                  maxlength='1'
                />
              </div>
              <button className='my-4 bg-[#37AC94] text-white rounded-full rounded-tl-none w-fit py-2 px-10 hover:bg-[#287c6b] animation'>
                {lang.verifyButton}
              </button>
              <div className='flex justify-center items-center gap-2 text-center mt-5'>
                <p className='text-sm text-gray-500'>{lang.haventcode}</p>
                <a className='flex items-center text-[#37AC94] hover:text-[#287c6b] cursor-pointer'>
                  <span className='font-bold'>{lang.resend}</span>
                  <i className='bx bx-caret-right ml-1'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='min-w-full bg-[#FAF5F2] mt-24'>
        <img src={img} alt='' className='w-full' />
      </div>
    </div>
  );
};

export default Verify;
