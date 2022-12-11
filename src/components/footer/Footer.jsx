import React from 'react';
import logo from '../../assets/img/logos/rawdati_logo.png';
import footerImg from '../../assets/img/bottom_white_wave_01.png';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = ({ data, language }) => {
  return (
    <>
      <footer className='bg-[#FAF5F2] pt-14 py-4'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap justify-between'>
            <div className='w-full md:w-5/12 px-4'>
              <img
                src={logo}
                alt='logo'
                className='w-40 md:justify-start justify-center'
              />
              <div className='w-full md:w-8/12 py-4'>
                <ul className='flex flex-wrap list-none md:justify-start justify-center mt-1'>
                  <li>
                    <a
                      href='https://www.facebook.com/creativetim'
                      className='text-white animation bg-[#37AC94] p-3 rounded-full font-semibold block'>
                      <FaFacebookF className='text-lg' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.twitter.com/creativetim'
                      className='text-white animation bg-[#37AC94] p-3 rounded-full font-semibold block mx-3'>
                      <FaTwitter className='text-lg' />
                    </a>
                  </li>
                  <li>
                    <a
                      href='https://www.instagram.com/creativetimofficial'
                      className='text-white animation bg-[#37AC94] p-3 rounded-full font-semibold block'>
                      <FaInstagram className='text-lg' />
                    </a>
                  </li>
                </ul>
              </div>
              <p className='mt-2 text-base text-gray-500 w-full'>
                {data?.newsletter?.text}
              </p>
            </div>
            <div className='w-full md:w-6/12 px-4'>
              <div className='w-full md:w-11/12'>
                <h3 className='text-sm px-2 text-[#37AC94]'>
                  {data?.newsletter?.title}
                </h3>
                <input
                  type='text'
                  className={`w-9/12 h-10 mt-2 mb-4 focus:outline-none border-2 rounded-full ${
                    language === 'english'
                      ? 'rounded-tr-none rounded-br-none'
                      : 'rounded-tl-none rounded-bl-none'
                  } px-4`}
                />
                <button
                  className={`w-3/12 h-10 my-2 bg-[#37AC94] rounded-full ${
                    language === 'english'
                      ? 'rounded-tr-none -ml-4'
                      : 'rounded-tl-none -mr-4'
                  } text-white`}>
                  {data?.newsletter?.button}
                </button>
              </div>
              <div className='flex flex-wrap items-top mb-6 gap-4'>
                <div className='w-full md:w-4/12 px-4'>
                  <span className='block uppercase text-[#37AC94] text-sm font-semibold mb-2'>
                    {data?.quickLinks?.title}
                  </span>
                  {/* quickLinks */}
                  <ul className='list-unstyled'>
                    {data?.quickLinks?.details?.map((link, index) => (
                      <li key={index}>
                        <a
                          className='text-gray-500 hover:text-gray-900 font-semibold block pb-2 text-sm'
                          href={link.url}>
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='w-full md:w-6/12 px-4'>
                  <span className='block uppercase text-[#37AC94] text-sm font-semibold mb-2'>
                    {data?.contact?.title}
                  </span>
                  <ul className='list-unstyled'>
                    {data?.contact?.details?.map((link, index) => (
                      <li key={index}>
                        <a className='text-gray-500 hover:text-gray-900 font-semibold block pb-2 text-sm'>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-400' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-gray-600 font-semibold py-1'>
                © {new Date().getFullYear()}
                <a
                  href='https://www.creative-tim.com?ref=mtk-footer'
                  className='text-gray-600 hover:text-gray-900'>
                  Rawdati
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
