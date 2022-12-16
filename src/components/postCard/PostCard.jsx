import React from 'react';
import {
  FaRegComment,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/post/${post.id}`)}
      className='w-full my-4 border-transparent rounded-lg shadow-lg border-2 border-gray-200'
      key={post.id}>
      <div className='flex flex-col items-center gap-2'>
        <div className='min-w-full min-w-3/4 flex items-center justify-center'>
          <img src={post.image} alt='' className='rounded-lg' />
        </div>
        <div className='self-start flex items-center m-2'>
          {post.tags.map((tag, i) => (
            <span className='text-sm text-gray-900 flex items-center' key={tag}>
              {tag}
              {i < post.tags.length - 1 && (
                <div className='bg-[#37AC94] h-2 w-2 rounded-full mx-2'></div>
              )}
            </span>
          ))}
        </div>
        <div className='flex flex-col my-3 mx-2'>
          <h1 className='font-bold font-paytoneOne text-2xl mb-4 hover:text-[#37AC94] hover:transition-all hover:delay-75 max-w-fit cursor-pointer'>
            {post.title}
          </h1>
          <div className='flex flex-row items-center gap-1 mb-4'>
            <span>{post.date}</span> / by
            <span className='hover:text-[#37AC94] hover:transition-all hover:delay-75 cursor-pointer'>
              {post.user}
            </span>{' '}
            /
            <span className='flex item-center'>
              <FaRegComment className='mt-[1.3px] mx-1' />
              {post.comments}
            </span>
          </div>
          <p className='text-gray-700 text-sm'>{post.content.subContent}</p>
          <div className='my-4 flex justify-between w-[97%]'>
            <div className='flex items-center gap-2'>
              <div className='share_icon animation bg-[#3B5998]'>
                <FaFacebookF className='text-sm' />
              </div>
              <div className='share_icon animation bg-[#1EA1F2]'>
                <FaTwitter className='text-sm' />
              </div>
              <div className='share_icon animation bg-[#59D467]'>
                <FaWhatsapp className='text-sm' />
              </div>
              <div className='share_icon animation bg-[#027BB5]'>
                <FaLinkedinIn className='text-sm' />
              </div>
            </div>
            <button
              className={`bg-[#37AC94] px-4 py-2 rounded-full rounded-tr-lg text-white animation text-base font-normal w-[140px]`}>
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
