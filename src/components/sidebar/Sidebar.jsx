import { Avatar } from '@material-tailwind/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { posts, categories } from '../../shared/values';
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-top w-full mx-4'>
      <div className='flex min-w-full items-center justify-center mt-10 gap-2'>
        <input
          type='text'
          className='border-2 border-gray-400 w-[80%] focus:outline-none rounded-full px-4 py-1'
          placeholder='Looking for...'
        />
        <div className='flex items-center justify-center text-white bg-[#37AC94] h-8 w-8 text-lg rounded-full cursor-pointer'>
          <FaSearch />
        </div>
      </div>
      <div>
        <h1 className='font-noraml font-paytoneOne text-2xl mt-10 mb-4'>
          Recent Posts
        </h1>
        <div className='flex flex-col gap-4'>
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/post/${post.id}`)}
              className='flex flex-col justify-start gap-2 border-b-2 border-gray-200 rounded-lg py-4 cursor-pointer w-full'>
              <div className='flex gap-2'>
                <Avatar src={post.image} alt='' variant='rounded' size='lg' />
                <div className='flex items-center gap-2'>
                  <div key={post.id}>
                    <span className='text-sm text-[#37AC94] flex items-center font-poppins'>
                      {post.date}
                    </span>
                    <h1 className='font-extrabold font-poppins my-1 hover:text-[#37AC94] hover:transition-all hover:delay-75'>
                      {post.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='font-normal font-paytoneOne text-2xl mt-10 mb-4'>
            Categories
          </h1>
          {categories.en.map((ctrg, i) => (
            <div
              key={i}
              className='flex flex-col justify-start gap-2 border-b-2 border-gray-200 rounded-lg py-4 cursor-pointer w-full'>
              {ctrg.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
