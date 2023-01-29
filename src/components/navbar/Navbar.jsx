import { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from '@material-tailwind/react';
import logo from '../../assets/img/logos/rawdati_logo.png';
import NavItems from './NavItems';
import { useLanguage, useLanguageUpdate } from '../../context/LanguageContext';
import { BsTelephone } from 'react-icons/bs';
import Model from '../model/Model';
import { SiGoogletranslate } from 'react-icons/si';

const customStyles = {
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? '#FFF' : '#333',
    backgroundColor: state.isSelected ? '#37AC94' : styles.color,
    '&:hover': {
      color: '#FFF',
      backgroundColor: '#37AC94',
    },
  }),
  control: (base) => ({
    ...base,
    boxShadow: 0,
    borderColor: '#D3D3D3',
    '&:hover': {
      borderColor: '#D3D3D3',
    },
  }),
};

const NavBar = () => {
  const toggleLanguage = useLanguageUpdate();

  const [open, setOpen] = useState(false);
  const { language, data } = useLanguage();
  const [openNav, setOpenNav] = useState(false);

  const handleOpen = () => setOpen(!open);

  const handleLanguageChange = (e) => {
    toggleLanguage(e);
    handleOpen();
  };

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className='mx-0 navbar_container min-w-full top-0 left-0 fixed z-50 bg-[#FAF5F2] rounded-none'>
      <div className='container mx-auto flex items-center justify-between '>
        <div className='logo_container'>
          <img
            src={logo}
            alt='logo'
            className='mr-4 cursor-pointer font-normal'
          />
        </div>

        <div className='right_nav'>
          <div className='hidden lg:block'>
            <NavItems items={data?.navbar} />
          </div>

          <div className='hidden lg:flex lg:gap-8'>
            <>
              <Button
                onClick={handleOpen}
                variant='text'
                className='flex gap-2 items-center justify-center bg-transparent text-black border-collapse hover:bg-[#37AC94] hover:bg-opacity-20'>
                {language === 'english' ? 'En' : 'Ar'} | <SiGoogletranslate />
              </Button>
              <Model
                data={data?.tr}
                handleLanguageChange={handleLanguageChange}
                open={open}
                handleOpen={handleOpen}
                field='language'
              />
            </>
            <Button className='bg-[#37AC94] px-4 py-2 rounded-full rounded-tl-none text-white lg:flex lg:items-center lg:gap-2 shadow-none'>
              <BsTelephone /> | <span>+123 786 192 934</span>
            </Button>
          </div>

          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                className='h-6 w-6'
                viewBox='0 0 24 24'
                stroke='black'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                stroke='black'
                strokeWidth={2}>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        <NavItems items={data?.navbar} />
        <Model />
        <Button
          variant='gradient'
          size='sm'
          fullWidth
          className='mb-2 flex mx-auto gap-2 items-center bg-[#37AC94] px-4 py-2 rounded-full rounded-tl-none text-white w-[40%]'>
          <BsTelephone /> | <span>+123 786 192 934</span>
        </Button>
      </MobileNav>
      {/* <Model open={open} handleOpen={handleOpen} /> */}
    </Navbar>
  );
};

export default NavBar;
