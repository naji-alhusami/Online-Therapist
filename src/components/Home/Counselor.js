import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Counselor = () => {
  const { t } = useTranslation();
  
  return (
    <div className=" flex flex-col shadow-lg shadow-zinc-300 p-10 mt-20 text-center rounded-lg  lg:mx-16 md:ml-20 mb-20  ">
      <h1 className=" lg:text-5xl  md:text-2xl	sm:text-sm  lg:pt-8 md:pt:6 sm:pt:4 ">
        {t('Are you a counselor?')}
      </h1>
      <p className="lg:text-1xl md:text-xl	sm:text-sm text-stone-700 lg:pt-8 md:pt:6 sm:pt:4   lg:pb-6 md:pb:4 sm:pb:2 ">
        {t(
          'Interested in joining our mental health platform? You decide your schedule and how much you want to work, we’ll take care of the client referrals and billing details!'
        )}
      </p>
      <Link
        to="/requirements"
        className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border py-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white w-2/6 m-auto "
      >
        {t('LEARN MORE')}
      </Link>
    </div>
  );
};

export default Counselor;
