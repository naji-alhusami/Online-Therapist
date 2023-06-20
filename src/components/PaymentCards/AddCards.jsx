import React from 'react';
import AddCardForm from './AddCardForm';

import visaCard from '../Images/visaCard.svg';
import masterCard from '../Images/masterCard.svg';

const AddCards = () => {
  return (
    <div className=" m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        ADD CARD DETAILS
      </h1>
      <p className=" w-auto">
        Please make sure all of the info you enter are the same as your card
        registration info.
      </p>
      <AddCardForm />
      <img src={masterCard} alt="Master Card" />
      <img src={visaCard} alt="Visa Card" />
    </div>
  );
};

export default AddCards;
