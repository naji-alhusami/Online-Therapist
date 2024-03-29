import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BackgroundImage from '../Images/Background.svg';
import Error from '../Images/Error.png';

const ErrorPart = () => {
  const location = useLocation();
  const { paragraphOne, paragraphTwo, paragraphThree, link, page } =
    location.state;
  const { t } = useTranslation();

  return (
    <div
      className="  bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${BackgroundImage})`, top: 0 }}
    >
      <div className="flex flex-col pt-12 pb-12  items-center md:flex-col   lg:flex-row    lg:justify-evenly lg:items-center md:items-center lg:pt-30 lg:pb-20 md:pt-20">
        <div className=" flex flex-col items-center   md:flex-col md:items-center  lg:items-center ">
          <p className="text-3xl mb-5 md:text-4xl lg:text-5xl">
            {' '}
            {t(paragraphOne)}
          </p>
          <p className="text-3xl mb-5 md:text-4xl lg:text-5xl">
            {' '}
            {t(paragraphTwo)}
          </p>
          <p className="text-3xl mb-5  md:text-4xl lg:text-5xl ">
            {t(paragraphThree)}
          </p>
          <Link to={link}>
            <button
              type="button"
              className="text-md mb-8 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl"
            >
              {t(page)}
            </button>
          </Link>
        </div>
        <img
          className="h-2/3 w-2/3 md:h-1/3 md:w-1/3 lg:h-1/3 lg:w-1/3"
          src={Error}
          alt="Sofa"
        />
      </div>
    </div>
  );
};

export default ErrorPart;
