import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../ui/Button';

const BookingConfirm = () => {
  const navigate = useNavigate();
  const handleNextQuestion = () => {
    navigate('/');
  };

  return (
    <div className="m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        Our Request Has Been Submitted!
      </h1>
      <p className="w-auto">
        You Will Receive An Email Guiding You To Book A Date And Time Soon.
      </p>
      <div className="flex flex-col justify-center items-center m-8">
        <div className="flex flex-col justify-center items-center space-y-8 px-10 pt-8 pb-[1rem] bg-white shadow-lg roundedflex-col lg:w-[37rem] md:w-[30rem] space-y-8 px-10 pt-8 pb-[2rem] bg-white shadow-xl rounded">
          <h1 className="text-2xl capitalize">Request Submitted</h1>
          <p className="text-center">Your Tickets Will Decrease 1</p>
          <button
            type="button"
            className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl hover:text-white"
            onClick={handleNextQuestion}
          >
            BACK TO HOME
          </button>
          {/* <Button
            handleNextQuestion={handleNextQuestion}
            button="BACK TO HOME"
            appointmentConfirm="true"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BookingConfirm;
