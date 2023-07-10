import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingHeader from './BookingHeader';
// import Button from '../ui/Button';

const BookingNote = () => {
  const navigate = useNavigate();
  const handleNextQuestion = () => {
    navigate('/bookingSubmit');
  };

  return (
    <div className="w-full">
      <BookingHeader />
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
          NEXT
        </button>
        {/* <Button
          handleNextQuestion={handleNextQuestion}
          button="Next"
          disabled="false"
          appointment="true"
        /> */}
      </div>
    </div>
  );
};

export default BookingNote;
