import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { MdOutlinePayment } from 'react-icons/md';
import Cards from 'react-credit-cards';

import 'react-credit-cards/es/styles-compiled.css';
import { useSelector } from 'react-redux';
import Button from '../ui/Button';

const SavedCards = () => {
  const cardInformation = useSelector((state) => state.cards.card);
  console.log(cardInformation);
  const { t } = useTranslation();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const isCardInformationEmpty = Object.keys(cardInformation).length === 0;

  return (
    <div className=" m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        YOUR SAVED CARDS
      </h1>
      <p className=" w-auto">
        We only support cards as a payment method at the moment!
      </p>
      <div className="flex flex-col items-center justify-center mt-28">
        {isCardInformationEmpty ? (
          <>
            <MdOutlinePayment className="text-6xl text-gray mx-auto" />
            <p className="mb-10">{t('No Payment Methods Found')}</p>
          </>
        ) : (
          <Carousel
            infinite="true"
            containerClass="w-full"
            responsive={responsive}
          >
            <Cards
              className="relative"
              name={cardInformation.name}
              number={cardInformation.number}
              expiry={cardInformation.expiration}
              cvc={cardInformation.cvc}
            />
          </Carousel>
        )}
      </div>
      <Link to="/addCards">
        <Button button="Add New Card" />
      </Link>
    </div>
  );
};

export default SavedCards;
