import React from 'react';
import AddPost from '../addPost/AddPost';
import { posts } from '../../shared/values';
import PostCard from '../postCard/PostCard';
const Posts = () => {
  return (
    <div className='flex flex-col font-poppins'>
      <div className='flex flex-col items-center justify-center w-full pt-10 px-4 '>
        <AddPost />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
