import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { MdOutlinePayment } from 'react-icons/md';
import Button from '../ui/Button';

const Cards = () => {
  const { t } = useTranslation();

  return (
    <div className=" m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        YOUR SAVED CARDS
      </h1>
      <p className=" w-auto">
        We only support cards as a payment method at the moment!
      </p>
      <div className="flex flex-col items-center justify-center mt-28">
        <MdOutlinePayment className="text-6xl text-gray mx-auto" />
        <p className="mb-10"> {t('No Payment Methods Found')}</p>
      </div>
      <Link to="/addCards">
        <Button button="Add New Card" />
      </Link>
    </div>
  );
};

export default Cards;
