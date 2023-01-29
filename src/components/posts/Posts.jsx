import React from 'react';
import AddPost from '../addPost/AddPost';
import { posts } from '../../shared/values';
import PostCard from '../postCard/PostCard';
const Posts = () => {
  return (
    <div className='flex flex-col font-poppins'>
      <div className='flex flex-col items-center justify-center w-full pt-10 px-4 '>
        <AddPost />
        {posts.map((post, i) => {
          return (
            i > 0 && (
              <div key={i} className='w-full mt-8'>
                <PostCard post={post} />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
