import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/floating_pink_shape_01.png';
import img2 from '../../assets/floating_pink_shape_02.png';
import Model from '../model/Model';
const Login = ({ data, usersData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <section className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-paytoneOne font-semibold my-4 flex gap-4 items-end'>
        <img src={img} className='self-start' />
        {data?.header}
        <img src={img2} className='self-start' />
      </h1>
      <p className='text-sm font-poppins my-4 text-[#A8A5A3] text-center'>
        {data?.text1}
        <br />
        {data?.text2}
      </p>
      <button
        onClick={handleOpen}
        className='bg-[#37AC94] px-4 py-2 rounded-full rounded-tl-none text-white lg:flex lg:items-center lg:gap-2 animation my-2 text-lg mb-10'>
        {data?.button?.title}
      </button>
      <Model
        data={usersData}
        handleLanguageChange={null}
        open={open}
        handleOpen={handleOpen}
        field='users'
      />
    </section>
  );
};

export default Login;
