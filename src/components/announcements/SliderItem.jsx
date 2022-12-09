import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';

const SliderItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card
      className='lg:mx-auto mx-14 lg:w-[90%] h-auto rounded-lg shadow-md py-4 px-2 mb-3 cursor-pointer w-[80]'
      onClick={() => navigate(`/announcements/${item.id}`)}>
      <CardHeader color='blue' className='relative h-56'>
        <img src={item.img} alt='img-blur-shadow' className='h-full w-full' />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant='h5' className='my-2'>
          {item.title}
        </Typography>
        <Typography className='mb-4 text-[#8a8786]'>{item.text}</Typography>
      </CardBody>
      <CardFooter
        divider
        className='flex justify-center items-center w-full gap-7 py-1'>
        <Typography
          variant='small'
          className='bg-[#37AC94] py-2 px-4 text-white rounded-full animation'>
          {item.button}
        </Typography>
      </CardFooter>
    </Card>
  );
};
export default SliderItem;
