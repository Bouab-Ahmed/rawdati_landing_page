import React from 'react';
import { Typography } from '@material-tailwind/react';
const NavItems = ({ items }) => {
  return (
    <>
      <ul className='mb-4 mt-2 text-gray-900 flex items-center flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
        {items?.map((item, i) => (
          <Typography
            key={i}
            as='li'
            variant='small'
            color='blue-gray'
            className='p-1 font-normal font-poppins '>
            <a href={`${item.url}`} className='flex items-center'>
              {item.title}
            </a>
          </Typography>
        ))}
      </ul>
    </>
  );
};

export default NavItems;
