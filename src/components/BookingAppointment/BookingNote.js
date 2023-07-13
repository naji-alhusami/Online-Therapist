import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BookingHeader from './BookingHeader';

const BookingNote = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNextQuestion = () => {
    navigate('/bookingSubmit');
  };

  return (
    <div className="w-full">
      <BookingHeader note="true" />
      <textarea
        className="ml-10 mb-5 w-[20rem] md:w-[50rem] h-48 p-3 rounded border border-gray-300 shadow"
        placeholder="Write Something Here..."
      />
      <div className="m-10">
        <button
          type="button"
          className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl hover:text-white"
          onClick={handleNextQuestion}
        >
          {t('NEXT')}
        </button>
      </div>
    </div>
  );
};

export default BookingNote;
