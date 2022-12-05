import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Typography,
} from '@material-tailwind/react';

const SliderItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card
      className='lg:mx-auto mx-14 lg:w-96 w-full h-auto rounded-lg shadow-md py-4 px-2 mb-3'
      onClick={() => navigate(`/announcements/${item.id}`)}>
      <CardHeader color='blue' className='relative h-56'>
        <img src={item.img} alt='img-blur-shadow' className='h-full w-full' />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant='h5' className='my-2'>
          {item.title}
        </Typography>
        <Typography className='mb-4'>{item.text}</Typography>
      </CardBody>
      {/* <CardFooter divider className='flex items-center justify-between py-3'>
        <Typography variant='small'>$899/night</Typography>
        <Typography variant='small' color='gray' className='flex gap-1'>
          <i className='fas fa-map-marker-alt fa-sm mt-[3px]' />
          Barcelona, Spain
        </Typography>
      </CardFooter> */}
    </Card>
  );
};
export default SliderItem;
