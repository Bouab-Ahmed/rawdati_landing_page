import React, { Fragment, useState } from 'react';
import Select from 'react-select';
import { loginModel } from '../../shared/values';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Textarea,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
} from '@material-tailwind/react';
import img from '../../assets/img/avatar.jpeg';
import { useLanguage } from '../../context/LanguageContext';

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    padding: '0',
    outerWidth: '190px',
    backgroundColor: state.isSelected ? '#37AC94' : styles.color,
    '&:hover': {
      color: '#FFF',
      backgroundColor: '#37AC94',
    },
  }),
  control: (base) => ({
    ...base,
    boxShadow: 0,
    padding: '0',
    borderColor: '#B0BEC5',
    backgroundColor: 'transparent',
    color: '#B0BEC5',
    textFillColor: '#6A8592',
    '&:hover': {
      borderColor: '#B0BEC5',
    },
  }),
};

const AddPost = () => {
  const { language } = useLanguage();
  const lang = language === 'arabic' ? loginModel.ar : loginModel.en;
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <Fragment className='mx-2'>
      <Card className='min-w-full cursor-pointer' onClick={handleOpen}>
        <CardHeader size='lg' className='mt-4 shadow-none'>
          {lang.textArea}
        </CardHeader>
        <CardBody className='relative min-w-full m-0 py-2 shadow-none flex items-center gap-2 px-4'>
          <Avatar size='lg' src={img} className='m-0 p-2' variant='circular' />
          <div className='w-full rounded-full bg-gray-300 text-gray-400 py-2 px-3'>
            {lang.textArea}
          </div>
        </CardBody>
      </Card>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div>
            <Typography variant='h5' color='gray' className='-mb-5'>
              {lang.create}
            </Typography>
          </div>
        </DialogHeader>
        <DialogBody className='flex flex-col'>
          <div className='flex items-center gap-2 w-full'>
            <Avatar src={img} alt='avatar' size='lg' />
            <div>
              <h3 className='font-poppins text-sm my-1'>{lang.username}</h3>
              <div className='w-[150px]'>
                <Select
                  menuPlacement='auto'
                  menuPosition='fixed'
                  className='basic-single '
                  classNamePrefix='select'
                  defaultValue={lang.privacy[0]}
                  isRtl={language === 'arabic' ? true : false}
                  isSearchable={true}
                  name='privacy'
                  options={lang.privacy}
                  styles={customStyles}
                />
              </div>
            </div>
          </div>
          <textarea
            className='border-b-2 border-gray-300 w-full focus:outline-none px-4 pt-1 mt-4'
            size='lg'
            variant='static'
            placeholder={lang.textArea}
          />
        </DialogBody>
        <DialogFooter>
          <Button variant='gradient' color='green' onClick={handleOpen}>
            <span>{lang.post}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default AddPost;
