import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import img from '../../assets/img/bottom_white_wave_01.png';
import img2 from '../../assets/img/bottom_white_wave_03.png';
import { useLanguage } from '../../context/LanguageContext';
import { useParams } from 'react-router-dom';
import { posts } from '../../shared/values';
import PostCard from '../../components/postCard/PostCard';

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.filter((post) => post.id === parseInt(id));
  console.log(post);
  return (
    <div>
      <header className='bg-[#FAF5F2] pt-[110px]'>
        <img src={img2} alt='' />
      </header>
      <div className='flex flex-col lg:flex-row my-5 mx-4'>
        <main className='w-full lg:max-w-[80%] mx-6'>
          <PostCard post={post[0]} details={true} />
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

export default PostDetails;
