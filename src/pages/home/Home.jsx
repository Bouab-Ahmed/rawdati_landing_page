import React from 'react';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import img from '../../assets/img/bottom_white_wave_01.png';
import { useLanguage } from '../../context/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  console.log(language);
  return (
    <div>
      <div className='flex flex-col lg:flex-row mt-16'>
        <main className='w-full lg:max-w-[80%]'>
          <Posts />
        </main>
        <aside className='w-full lg:max-w-[25%] flex flex-col lg:flex-row mt-16'>
          <Sidebar />
        </aside>
      </div>
      <div className='bg-[#FAF5F2] mt-4'>
        <img src={img} alt='' />
      </div>
    </div>
  );
};

export default Home;
