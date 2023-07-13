import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import TherapistImg from '../Images/TherapistImg.svg';

const TherapistPart = () => {
  const { t } = useTranslation();

  const userLogin = useSelector((state) => state.users);
  const tickets = useSelector((state) => state.tickets.ticketsNumber);
  const navigate = useNavigate();

  const handleAppointment = () => {
    if (userLogin.userlogin && tickets && tickets > 0) {
      navigate('/bookingFirst/1');
    } else if (!userLogin.userlogin) {
      const ErrorData = {
        paragraphOne: 'You Should Login',
        paragraphTwo: 'To Buy Your Tickets',
        paragraphThree: 'And Take Your Appointment',
        link: '/login',
        page: 'Login',
      };

      navigate('/homeError', { state: ErrorData });
    } else if (!tickets || tickets <= 0) {
      const ErrorData = {
        paragraphOne: 'You Do Not Have Tickets.',
        paragraphTwo: 'You Should Purchase Tickets',
        paragraphThree: 'To Take Your Appointment',
        link: '/',
        page: 'Home',
      };

      navigate('/homeError', { state: ErrorData });
    }
  };

  return (
    <div className=" bg-amber-200 pb-3 pt-3 font-poppins">
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
        <p className="lg:text-2xl font-seri text-sm  lg:pb-5 sm:w-full ">
          {t(
            'Tap into the worlds largest network of licensed, accredited, and experienced therapists who can help you with a range of issues including depression, anxiety, relationships, trauma, grief, and more. with our therapists, you get the same professionalism and quality you would expect from an in-office therapist, but with the ability to communicate whenever and however you want.'
          )}
        </p>
        <button
          type="button"
          className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl hover:text-white"
          onClick={handleAppointment}
        >
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default TherapistPart;
