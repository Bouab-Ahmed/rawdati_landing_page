import { useState, useEffect } from 'react';
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from '@material-tailwind/react';
import Select from 'react-select';
import logo from '../../assets/img/logos/rawdati_logo.png';
import NavItems from './NavItems';
import { useLanguage, useLanguageUpdate } from '../../context/LanguageContext';
import { BsTelephone } from 'react-icons/bs';

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
  const { language, data } = useLanguage();
  const toggleLanguage = useLanguageUpdate();
  const [openNav, setOpenNav] = useState(false);
  const [selectedValue, setSelectedValue] = useState(data?.languages[0]);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLanguageChange = (e) => {
    setSelectedValue(() => e.value);
    toggleLanguage(e.value);
  };

  return (
    <Navbar className='navbar_container'>
      <div className='container mx-auto flex items-center justify-between'>
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
            <Select
              className='w-[130px] mx-auto sm:basic-single'
              classNamePrefix='select'
              defaultValue={() => selectedValue}
              onChange={handleLanguageChange}
              isRtl={language === 'arabic' ? true : false}
              isSearchable={true}
              name='language'
              options={data?.languages}
              styles={customStyles}
            />
            <Button
              variant='gradient'
              size='sm'
              className='bg-[#37AC94] px-4 py-2 rounded-full rounded-tl-none text-white lg:flex lg:items-center lg:gap-2 animation'>
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
        <Select
          className='w-3/4 my-4 mx-auto sm:basic-single'
          classNamePrefix='select'
          value={selectedValue}
          onChange={handleLanguageChange}
          isRtl={language === 'arabic' ? true : false}
          isSearchable={true}
          name='language'
          options={data?.languages}
          styles={customStyles}
        />
        <Button
          variant='gradient'
          size='sm'
          fullWidth
          className='mb-2 flex mx-auto gap-2 items-center bg-[#37AC94] px-4 py-2 rounded-full rounded-tl-none text-white'>
          <BsTelephone /> | <span>+123 786 192 934</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
};

export default NavBar;
