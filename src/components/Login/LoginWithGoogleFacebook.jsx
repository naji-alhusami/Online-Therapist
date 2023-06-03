import React from 'react';
import { useTranslation } from 'react-i18next';
import Line from '../Images/Line.svg';
import FacebookLogo from '../Images/FacebookLogo.svg';
import GoogleLogo from '../Images/GoogleLogo.svg';

const LoginWithGoogleFacebook = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-around my-6">
        <img src={Line} alt="A line" className='w-32'/>
        <p className="mx-5">{t('OR')}</p>
        <img src={Line} alt="A line" className='w-32' />
      </div>
      <div className="flex justify-center my-6 gap-x-20">
        <button
          type="button"
          //   onClick={() => signInWithFacebook(() => navigate('/'))}
        >
          <img
            src={FacebookLogo}
            alt="Facebook logo"
            className="cursor-pointer"
          />
        </button>

        <button
          type="button"
          //   onClick={() => signInWithGoogle(() => navigate('/'))}
        >
          <img src={GoogleLogo} alt="Google logo" className="cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default LoginWithGoogleFacebook;
