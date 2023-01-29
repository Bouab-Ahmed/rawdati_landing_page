import { Avatar } from '@material-tailwind/react';
import React from 'react';
import {
  FaRegComment,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaReplyAll,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post, details }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/post/${post.id}`)}
      className={`w-full my-4 ${
        !details &&
        'border-transparent rounded-lg shadow-lg border-2 border-gray-200'
      }`}>
      <div className='flex flex-col items-center gap-2'>
        <div
          className={`min-w-full min-w-3/4 flex items-center justify-center ${
            details && 'order-2'
          }`}>
          <img src={post.image} alt='' className='rounded-lg' />
        </div>
        <div className={`self-start flex items-center m-2`}>
          {post?.tags?.map((tag, i) => (
            <span
              className={`text-sm text-gray-900 flex items-center ${
                details && 'order-1'
              }`}
              key={i}>
              {tag}
              {i < post.tags.length - 1 && (
                <div className='bg-[#37AC94] h-2 w-2 rounded-full mx-2'></div>
              )}
            </span>
          ))}
        </div>
        <div className='flex flex-col my-3 mx-2 self-start'>
          <h1
            className={`font-paytoneOne ${
              details
                ? 'xl:text-5xl sm:text-4xl font-normal'
                : 'text-2xl font-bold'
            } mb-4 hover:text-[#37AC94] hover:transition-all hover:delay-75  cursor-pointer`}>
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
              {post.comments?.number}
            </span>
          </div>
        </div>
        <div className={`${details && 'order-2 my-4'}`}>
          <p className='text-gray-700 text-sm'>
            {details ? post.content.fullContent : post.content?.subContent}
          </p>
          <div className='my-4 flex justify-between w-[97%]'>
            <div
              className={`flex items-center gap-2 ${
                details && 'w-full justify-end'
              }`}>
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
            {!details && (
              <button
                className={`bg-[#37AC94] px-4 py-2 rounded-full rounded-tr-lg text-white animation text-base font-normal w-[140px]`}>
                Read More
              </button>
            )}
          </div>
        </div>
        {details && (
          <>
            <div className='flex items-center justify-start order-5 w-full border-t-2 border-gray-200 py-4'>
              <h1 className='font-paytoneOne text-3xl'>
                {post.comments.number} Comments
              </h1>
            </div>
            <div className='order-5'>
              <div>
                {post.comments.content.map((comment, i) => (
                  <div key={i} className='mb-7 flex gap-3 border-t-2 py-3'>
                    <Avatar variant='circular' src={comment.profile} />
                    <div className=''>
                      <div className='flex item-center justify-between py-1'>
                        <h4 className='font-paytoneOne text-base'>
                          {comment.user}
                        </h4>
                        <span className='text-gray-500 text-sm px-4'>
                          {comment.date}
                        </span>
                      </div>
                      <div className='mb-2 text-gray-800 px-2'>
                        {comment.content}
                      </div>
                      <div className='flex items-center gap-x-1 text-[#37AC94]'>
                        <FaReplyAll className='text-[#37AC94] text-sm' />
                        reply
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;
