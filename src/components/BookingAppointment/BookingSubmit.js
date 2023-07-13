import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { subtractTicketsNumber } from '../../features/tickets/ticketsSlice';

const BookingSubmit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNextQuestion = () => {
    dispatch(subtractTicketsNumber());
    navigate('/bookingConfirm');
  };

  return (
    <div className="m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        {t('Submit Your Appointment')}
      </h1>
      <p className="w-auto">
        {t('Click Submit If You Are Sure Of All Your Choices.')}
      </p>
      <div className="flex flex-col justify-center items-center m-8">
        <div className="flex flex-col justify-center items-center space-y-8 px-10 pt-8 pb-[1rem] bg-white shadow-lg roundedflex-col lg:w-[37rem] md:w-[30rem] space-y-8 px-10 pt-8 pb-[2rem] bg-white shadow-xl rounded">
          <h1 className="text-2xl capitalize">{t('Submit Appointment?')}</h1>
          <div className="flex gap-2 flex-col">
            {t('Please Be Aware That This Action Will Cost You A Ticket!')}
          </div>
          <button
            type="button"
            className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl hover:text-white"
            onClick={handleNextQuestion}
          >
            {t('SUBMIT')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSubmit;
