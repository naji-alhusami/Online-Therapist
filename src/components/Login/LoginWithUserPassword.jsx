import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LoginWithGoogleFacebook from './LoginWithGoogleFacebook';

const LoginWithUserPassword = () => {
  const { t } = useTranslation();

  return (
    <div className='max-w-[22rem]'>
      <h2 className='m-4 mb-16 text-5xl font-["Poppins"] font-normal'>
        {t('Login')}
      </h2>
      <form
        // onSubmit={login}
        className="grid grid-rows-3 gap-6 shadow-2xl px-2 py-6 m-4"
      >
        <input
          type="text"
          placeholder={t('Enter Your Email')}
          name="userEmail"
          //   onChange={(e) => handleOnClick(e)}
          className="w-full px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
          //   value={loginData.userEmail}
        />
        <input
          type="password"
          placeholder={t('Enter Your Password')}
          name="userPassword"
          //   onChange={(e) => handleOnClick(e)}
          className="w-full px-3 broder-solid border-2 border-[#D1DBE3] rounded-md focus:outline-none focus:placeholder-white"
          //   value={loginData.userPassword}
        />
        <div className="flex justify-around py-3 gap-8">
          <button
            type="submit"
            className="w-1/2 bg-[#2DD3E3] hover:bg-cyan-500 text-center font-medium text-2xl px-7 py-1 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
          >
            {t('Login')}
          </button>
          <Link
            to="/signup"
            className="w-1/2 broder-solid border-2 border-[#2DD3E3] hover:bg-[#2DD3E3] font-medium text-2xl px-7 py-1 rounded-md"
          >
            <button type="button">{t('Signup')}</button>
          </Link>
        </div>
      </form>
      <LoginWithGoogleFacebook />
    </div>
  );
};

export default LoginWithUserPassword;
