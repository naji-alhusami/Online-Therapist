import React from 'react';

import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { loginUserWithGoogle } from '../../features/users/usersSlice';
import Line from '../Images/Line.svg';
import GoogleLogo from '../Images/GoogleLogo.svg';

const LoginWithGoogle = () => {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleLoginGoogle = (event) => {
    event.preventDefault();
    dispatch(loginUserWithGoogle());
  };

  return (
    <>
      <div className="flex justify-around my-6">
        <img src={Line} alt="A line" className="w-32" />
        <p className="mx-5">{t('OR')}</p>
        <img src={Line} alt="A line" className="w-32" />
      </div>
      <div className="flex justify-center my-6 gap-x-20">
        <button type="button" onClick={handleLoginGoogle}>
          <img src={GoogleLogo} alt="Google logo" className="cursor-pointer" />
        </button>
      </div>
    </>
  );
};

export default LoginWithGoogle;
