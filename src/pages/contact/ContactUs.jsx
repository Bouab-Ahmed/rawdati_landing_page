import { Input, Textarea } from '@material-tailwind/react';
import { useLanguage } from '../../context/LanguageContext';
import { contact } from '../../shared/values';
import img from '../../assets/img/bottom_light_grey_wave_01.png';

const ContactUs = () => {
  const { language } = useLanguage();
  const lang = language === 'english' ? contact.en : contact.ar;

  const settings = {
    color: 'green',
    variant: 'outlined',
  };

  return (
    <div>
      <div className='contact_hero'>
        <div
          className={`font-poppins ${
            language === 'english' ? 'ml-10' : 'mr-10'
          } `}>
          <span className='text-[#37AC94] font-semibold text-xl'>
            {lang.span}
          </span>
          <h1 className='text-white font-medium text-7xl mt-3 mb-6 font-paytoneOne'>
            {lang.title}
          </h1>
        </div>
        <img src={img} alt='' className='w-screen -mt-14' />
      </div>
      <div className='md:flex py-10 px-[5%] justify-between items-start bg-[#F9F4F1]'>
        <div className='md:w-[50%] mb-10 md:mb-0'>
          <h1 className='my-4 mb-6 text-5xl font-normal font-paytoneOne text-[#FEB240]'>
            Have you got<br></br>
            <span className='text-[#282828]'>a question for us?</span>
          </h1>
          <p className='leading-7 text-[#282828] my-4 text-lg'>
            Questions or special inquiries? Fill out a form and we’ll be in
            touch as soon as possible.
          </p>
          <button className='bg-[#37AC94] px-6 py-3 text-lg rounded-full rounded-tl-none text-white lg:flex lg:items-center lg:gap-2 shadow-none'>
            {lang.contact}
          </button>
        </div>
        <div className='self-center p-4 bg-white rounded-xl shadow-md w-full lg:w-[45%]'>
          <h2 className='text-[#282828] font-paytoneOne text-3xl my-4'>
            Get in touch
          </h2>
          <form className='flex flex-col gap-4'>
            <Input
              {...settings}
              type='text'
              color='green'
              outline={true}
              label={'your name'}
            />
            <Input
              {...settings}
              type='text'
              color='green'
              outline={true}
              label={'email'}
            />
            <Input
              {...settings}
              type='number'
              color='green'
              outline={true}
              label={'phone Number'}
            />
            <Textarea
              {...settings}
              color='green'
              outline={true}
              label={'message'}
            />
            <div className='lg:w-1/3 flex items-center'>
              <button className='bg-[#37AC94] px-6 py-3 text-lg rounded-full rounded-tr-none text-white lg:flex lg:items-center lg:gap-2 shadow-none'>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
