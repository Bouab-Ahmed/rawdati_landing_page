import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Radio,
  Button,
  DialogFooter,
  Typography,
} from '@material-tailwind/react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Model = ({ data, handleLanguageChange, open, handleOpen, field }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  return (
    <Fragment>
      <Dialog
        open={open}
        handler={handleOpen}
        dir={language === 'english' ? 'ltr' : 'rtl'}
        className='w-1/4'>
        <DialogHeader>{data?.title}</DialogHeader>
        <DialogBody divider>
          <div className='flex flex-col gap-2'>
            {data?.items.map((item, i) => (
              <div key={i}>
                <Radio
                  type='radio'
                  id={item.label}
                  name={field}
                  label={item.title}
                  onChange={() =>
                    field === 'language'
                      ? handleLanguageChange(item.label)
                      : navigate(`/register${item.label}`)
                  }
                  checked={language === item.label ? true : false}
                />
              </div>
            ))}
          </div>
        </DialogBody>
        {field === 'users' && (
          <DialogFooter>
            <button
              className='underline cursor-pointer ml-0'
              onClick={() => navigate('/login')}>
              {data?.haveAccount}
            </button>
          </DialogFooter>
        )}
      </Dialog>
    </Fragment>
  );
};

export default Model;
