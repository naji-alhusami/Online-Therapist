import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Thanks() {
  const location = useLocation();
  const { paragraphOne, paragraphTwo, link, page } = location.state;
  const { t } = useTranslation();

  return (
    <div className="pl-[5rem] w-full min-h-screen">
      <p className=" text-4xl mt-[3rem] mb-5">{t('THANK YOU!')}</p>
      <p className="text-black text-opacity-50 ">{t(paragraphOne)}</p>
      <p className="text-black text-opacity-50 ">{t(paragraphTwo)}</p>

      <Link to={link}>
        <button
          type="button"
          className="text-md my-8 px-10 py-2 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white md:text-2xl"
        >
          {t(`Back To ${page}`)}
        </button>
      </Link>
    </div>
  );
}

export default Thanks;
