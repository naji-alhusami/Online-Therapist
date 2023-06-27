import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function Thanks() {
  const { t } = useTranslation();

  return (
    <div className="pl-[5rem] w-full min-h-screen">
      <p className=" text-4xl mt-[3rem] mb-5">{t('THANK YOU!')}</p>
      <p className="text-black text-opacity-50 ">
        {t(
          'Your Sign Up request has been received, you will soon receive a confirmation email.'
        )}
      </p>
      <p className="text-black text-opacity-50 ">
        {t(
          'Please follow the steps in the email to complete and activate your account.'
        )}
      </p>

      <Link to="/">
        <button
          type="button"
          className="text-md my-8 px-10 py-2 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white md:text-2xl"
        >
          {t('Back To Home')}
        </button>
      </Link>
    </div>
  );
}

export default Thanks;
