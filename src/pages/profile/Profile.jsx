import React from 'react';
import img from '../../assets/img/couverture.jpg';
import avatar from '../../assets/img/avatar.jpeg';
import { Avatar } from '@material-tailwind/react';
import { FaCamera } from 'react-icons/fa';
const Profile = () => {
  return (
    <div className='w-[80%] mx-auto font-poppins'>
      <header className='min-w-full'>
        <div className='relative'>
          <img src={img} alt='' className='w-full lg:h-96 h-68 rounded-b-lg' />
          <div className=' flex items-center gap-2 px-4 py-1 absolute bg-white right-2 top-[89%] z-50 rounded-lg cursor-pointer'>
            <FaCamera />
            <label htmlFor='cover'>edit cover photo</label>
          </div>
          <input type='file' id='cover' className='hidden' />
        </div>
        <div className='w-[95%] mx-auto flex'>
          <Avatar
            src={avatar}
            size='xxl'
            variant='circular'
            className='border-4 border-white -mt-9 lg:w-40 lg:h-40'
          />
          <div className='m-3'>
            <h1 className='text-3xl font-normal'> user name</h1>
            <span className='text-gray-700'>234k followers</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Profile;
