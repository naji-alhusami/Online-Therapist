import React from 'react';

import { useTranslation } from 'react-i18next';
import TherapistImg from '../Images/TherapistImg.svg';
import AppointmentButton from './AppointmentButton';

const TherapistPart = () => {
  const { t } = useTranslation();

  return (
    <div className="w-screen bg-amber-200 pb-3 pt-3 font-poppins">
      <div
        className=" lg:m-20 lg:mt-0  md:ml-10  flex flex-col gap-6 m-20 "
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <h1 className=" lg:text-5xl text-lg font-bold  lg:mt-12 md:mt-12 ">
          {t(
            'PROFESSIONAL, LICENSED, AND VETTED THERAPISTS THAT YOU CAN TRUST'
          )}
        </h1>

        <img
          className=" pb-8 lg:w-6/12  sm:w-min "
          src={TherapistImg}
          alt="therapists"
        />
        <p className="lg:text-2xl font-seri text-sm lg:w-11/12 lg:pb-5 sm:w-full ">
          {t(
            'Tap into the worlds largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. with our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate whenever and however you want.'
          )}
        </p>
        <AppointmentButton />
      </div>
    </div>
  );
};

export default TherapistPart;
