import { Fragment, useState } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
} from '@material-tailwind/react';
import { SiGoogletranslate } from 'react-icons/si';
import { useLanguage, useLanguageUpdate } from '../../context/LanguageContext';

const Model = () => {
  const { language, data } = useLanguage();
  const toggleLanguage = useLanguageUpdate();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(data?.tr?.languages[0]);

  const handleOpen = () => setOpen(!open);

  const handleLanguageChange = (e) => {
    console.log(e);
    setSelectedValue(() => e.value);
    console.log(selectedValue);
    toggleLanguage(e);
    handleOpen();
  };

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        variant='text'
        className='flex gap-2 items-center justify-center bg-transparent text-black border-collapse hover:bg-[#37AC94] hover:bg-opacity-20'>
        {language === 'english' ? 'En' : 'Ar'} | <SiGoogletranslate />
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{data?.tr?.title}</DialogHeader>
        <DialogBody divider>
          <div className='flex gap-10'>
            {data &&
              data?.tr?.languages.map((lang) => (
                <>
                  <Radio
                    key={Math.floor(Math.random() * 100000)}
                    id={`${lang.label}`}
                    name='language'
                    label={`${lang.title}`}
                    // ripple={true}
                    onChange={() => setSelectedValue(lang.label)}
                  />
                </>
              ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={handleOpen}
            className='mr-1'>
            <span>{data?.tr?.cancel}</span>
          </Button>
          <Button
            variant='gradient'
            color='green'
            onClick={() => handleLanguageChange(selectedValue)}>
            <span>{data?.tr?.confirm}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};

export default Model;
