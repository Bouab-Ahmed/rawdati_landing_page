import { Fragment, useState } from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  Radio,
  Button,
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
      </Dialog>
    </Fragment>
  );
};

export default Model;
