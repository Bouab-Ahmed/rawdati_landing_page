import React from 'react';
import { useParams } from 'react-router-dom';
import RegisterEstablishment from '../../components/forms/RegisterEstablishment';
import RegisterUser from '../../components/forms/RegisterUser';
import RegisterVendor from '../../components/forms/RegisterVendor';
const Register = () => {
  const { name } = useParams();

  return (
    <div className='lg:w-[70%] mx-auto my-20'>
      <div className='w-full py-4 leading-snug text-center'>
        <h1 className='font-medium font-paytoneOne text-2xl'>
          welcome to <span className='text-[#E33D38]'>rawdati.dz</span>
        </h1>
        <p className='text-[#BDBCBB] text-sm py-2'>
          here you'll subscribe as a(n) {name}
        </p>
      </div>
      <div className='form_body'>
        {name === 'establishment' ? (
          <RegisterEstablishment />
        ) : name === 'vendor' ? (
          <RegisterVendor />
        ) : (
          <RegisterUser />
        )}
      </div>
    </div>
  );
};

export default Register;
