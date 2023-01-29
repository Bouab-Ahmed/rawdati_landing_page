import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { about } from '../../shared/values';
import img from '../../assets/img/bottom_light_grey_wave_01.png';
import { MdOutlineDone } from 'react-icons/md';

const About = () => {
  const { language } = useLanguage();
  const lang = language === 'english' ? about.en : about.ar;
  console.log(lang);
  return (
    <div>
      <div className='about_hero'>
        <div
          className={`font-poppins ${
            language === 'english' ? 'ml-10' : 'mr-10'
          } `}>
          <span className='text-[#37AC94] font-semibold text-xl'>
            {lang.span}
          </span>
          <h1 className='text-white font-medium text-7xl mt-3 mb-6 font-paytoneOne'>
            {lang.title}
          </h1>
          <button className='bg-[#37AC94] px-6 py-3 text-lg rounded-full rounded-tl-none text-white lg:flex lg:items-center lg:gap-2 shadow-none'>
            {lang.contact}
          </button>
        </div>
        <img src={img} alt='' className='w-screen -mt-14' />
      </div>
      <div className='md:flex py-10 px-[5%] justify-between items-start bg-[#F9F4F1]'>
        <div className='md:w-[60%] mb-10 md:mb-0'>
          <span className='text-[#37AC94] font-poppins'>
            LET'S JUST HAVE FUN
          </span>
          <h1 className='my-4 mb-6 text-5xl font-normal font-paytoneOne text-[#282828]'>
            Climbing, jumping,<br></br>
            <span className='text-[#FEB240]'>sliding, crawling</span>
          </h1>
          <p className='leading-7 text-[#282828] my-4'>
            With indoor playgrounds, state-of-the-art indoor rock climbing
            arenas and fully-enclosed toddler arenas, Bambino is the place to
            come for hours of family entertainment. Parents can join in, or just
            sit back and enjoy some great quality food and specialty coffee from
            our restaurant.
          </p>
          <button className='bg-[#37AC94] px-6 py-3 text-lg rounded-full rounded-tl-none text-white lg:flex lg:items-center lg:gap-2 shadow-none'>
            {lang.contact}
          </button>
        </div>
        <div className='self-center p-4 bg-white rounded-xl shadow-md text-center md:text-left'>
          <h2 className='text-[#282828] font-paytoneOne text-2xl my-4 text-center'>
            Something for everyone
          </h2>
          <ul className='flex flex-col gap-6 text-[#535353]'>
            <li className='flex items-center gap-2'>
              <MdOutlineDone className='border rounded-full bg-[#FEB240] w-6 h-6 text-white' />
              <span>Bambino is a place for unbelievable adventures.</span>
            </li>
            <li className='flex items-center gap-2'>
              <MdOutlineDone className='border rounded-full bg-[#FEB240] w-6 h-6 text-white' />
              <span>Bambino is a place for unbelievable adventures.</span>
            </li>
            <li className='flex items-center gap-2 mb-4'>
              <MdOutlineDone className='border rounded-full bg-[#FEB240] w-6 h-6 text-white' />
              <span>Bambino is a place for unbelievable adventures.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
