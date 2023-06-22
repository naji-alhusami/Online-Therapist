import React, { useState } from 'react';
import Cards from 'react-credit-cards';

import AddCardForm from './AddCardForm';
import 'react-credit-cards/es/styles-compiled.css';

const AddCards = () => {
  const [values, setValues] = useState({
    name: '',
    number: '',
    expiration: '',
    cvc: '',
    focus: '',
  });

  return (
    <div className="m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        ADD CARD DETAILS
      </h1>
      <p className="w-auto">
        Please make sure all of the info you enter are the same as your card
        registration info.
      </p>
      <div className="flex flex-col lg:flex lg:flex-row">
        <AddCardForm values={values} setValues={setValues} />
        <div className="flex flex-col mt-16">
          {/* <div
            className="w-[22rem] h-[12rem] bg-gray-200 rounded-lg p-4"
            // style={{ perspective: '1000px' }}
          >
            <div
              className="w-full h-full bg-cyan-200 rounded-lg px-4 py-3 transform rotateY-20"
              // style={{ transformStyle: 'preserve-3d' }}
            > */}

          <Cards
            className="relative"
            name={values.name}
            number={values.number}
            expiry={values.expiration}
            cvc={values.cvc}
            focused={values.focus}
          />
        </div>
      </div>
    </div>
  );
};

export default AddCards;
