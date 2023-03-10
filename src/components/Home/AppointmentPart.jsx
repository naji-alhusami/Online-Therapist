import React from 'react';

import { useTranslation } from 'react-i18next';
import BackgroundImage from '../Images/Background.svg';
import Sofa from '../Images/Sofa.svg';

const AppointmentPart = () => {
  const { t } = useTranslation();

  return (
    <div
      className=" w-screen bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})`, top: 0 }}
    >
      <div className="flex flex-col pt-12 pb-12  items-center md:flex-col   lg:flex-row    lg:justify-evenly lg:items-center md:items-center lg:pt-30 lg:pb-20 md:pt-20">
        <div className=" flex flex-col items-center   md:flex-col md:items-center  lg:items-center ">
          <p className="text-3xl mb-5 md:text-4xl lg:text-5xl">
            {' '}
            {t('WE ARE HERE TO')}
          </p>
          <p className="text-5xl mb-5  md:text-7xl lg:text-9xl ">{t('HELP')}</p>
          <button
            onClick={() => '/'}
            type="button"
            className="text-md mb-8 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl"
          >
            {t('BOOK AN APPOINTMENT')}
          </button>
        </div>
        <img
          className="h-2/3 w-2/3 md:h-1/3 md:w-1/3 lg:h-1/3 lg:w-1/3"
          src={Sofa}
          alt="Sofa"
        />
      </div>
    </div>
  );
};

export default AppointmentPart;
