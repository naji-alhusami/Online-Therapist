import React, { useState } from 'react';
import Button from '../ui/Button';

const Booking = ({ questions, answers, handleNextQuestion }) => {
  const [selected, setSelected] = useState(null);

  const handleSelectedAnswer = (index) => {
    setSelected(index);
  };

  const allAnswers = answers.map((answer, index) => {
    return (
      <button
        onClick={() => handleSelectedAnswer(index)}
        // value={obj}
        // name={obj}
        // key = {obj}
        type="submit"
        className={`pl-[1rem] text-xl p-1 text-center capitalize flex items-center lg:w-[30rem] h-[3.5rem] transition-all duration-500 hover:bg-cyan-500 bg-white border-2 rounded-md border-gray-150 hover:text-white ${
          selected === index ? 'bg-cyan-500 text-white' : ''
        }`}
      >
        {answer}
      </button>
    );
  });

  return (
    <div className=" grid justify-items-center m-8">
      <div className=" flex-col space-y-8 px-10 pt-8 pb-[1rem] bg-white shadow-lg roundedflex-col lg:w-[37rem] md:w-[30rem] space-y-8 px-10 pt-8 pb-[2rem] bg-white shadow-xl rounded">
        <h1 className="text-2xl capitalize">{questions}</h1>
        <div className=" flex gap-2 flex-col">{allAnswers}</div>
        <Button handleNextQuestion={handleNextQuestion} button="Next" disabled="false"  />
      </div>
    </div>
  );
};

export default Booking;
