import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookingHeader from './BookingHeader';
import Button from '../ui/Button';

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
        <Button
          handleNextQuestion={handleNextQuestion}
          button="Next"
          disabled="false"
          appointment="true"
        />
      </div>
    </div>
  );
};

export default BookingNote;
