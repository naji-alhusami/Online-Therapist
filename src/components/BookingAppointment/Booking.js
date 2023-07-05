import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../ui/Button';
// import { RadioQuestions } from './BookingQuestionsData';

const Booking = ({
  questionsButton,
  answersButton,
  questionsRadio,
  answersRadio,
  handleNextQuestion,
}) => {
  const [selected, setSelected] = useState(null);

  const handleSelectedAnswer = (index) => {
    setSelected(index);
  };

  const allAnswersButton = answersButton
    ? answersButton.map((answer, index) => (
        <button
          key={uuidv4()}
          onClick={() => handleSelectedAnswer(index)}
          type="submit"
          className={`pl-[1rem] text-xl p-1 text-center capitalize flex items-center lg:w-[30rem] h-[3.5rem] transition-all duration-500 hover:bg-cyan-500 bg-white border-2 rounded-md border-gray-150 hover:text-white ${
            selected === index ? 'bg-cyan-500 text-white' : ''
          }`}
        >
          {answer}
        </button>
      ))
    : null;

  const allAnswersRadio = answersRadio
    ? answersRadio.map((answer, index) => (
        <div key={uuidv4()}>
          <input
            type="radio"
            onClick={() => handleSelectedAnswer(index)}
            className='mr-5'
            // className={`pl-[1rem] text-xl p-1 text-center capitalize flex items-center lg:w-[30rem] h-[3.5rem] transition-all duration-500 hover:bg-cyan-500 bg-white border-2 rounded-md border-gray-150 hover:text-white ${
            //   selected === index ? 'bg-cyan-500 text-white' : ''
            // }`}
          />
          {answer}
        </div>
      ))
    : null;

  return (
    <div className="grid justify-items-center m-8">
      <div className="flex-col space-y-8 px-10 pt-8 pb-[1rem] bg-white shadow-lg roundedflex-col lg:w-[37rem] md:w-[30rem] space-y-8 px-10 pt-8 pb-[2rem] bg-white shadow-xl rounded">
        <h1 className="text-2xl capitalize">{questionsButton || questionsRadio}</h1>
        <div className="flex gap-2 flex-col">
          {answersButton ? allAnswersButton : allAnswersRadio}
        </div>
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

export default Booking;