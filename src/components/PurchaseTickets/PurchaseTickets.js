import React from 'react';
import { MdOutlinePayment } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Cards from 'react-credit-cards';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const PurchaseTickets = () => {
  const { t } = useTranslation();
  const cardInformation = useSelector((state) => state.cards.userCards);
  console.log(cardInformation);

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

  const isCardSliderEmpty = Object.keys(cardInformation).length === 0;
  return (
    <div className=" m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        SELECT CARD
      </h1>
      <p className=" w-auto">
        Please select the card you want to buy the tickets with
      </p>
      <div className="flex flex-col items-center justify-center mt-20">
        {isCardSliderEmpty ? (
          <>
            <MdOutlinePayment className="text-6xl text-gray mx-auto" />
            <p className="mb-10">{t('No Payment Methods Found')}</p>
          </>
        ) : (
          <Carousel
            infinite="true"
            containerClass="w-full m-10"
            responsive={responsive}
          >
            {cardInformation.map((card) => {
              return (
                <div
                  key={uuidv4()}
                  className="flex flex-col justify-center items-center relative"
                >
                  <Cards
                    name={card.name}
                    number={card.number}
                    expiry={card.expiration}
                    cvc={card.cvc}
                  />
                </div>
              );
            })}
          </Carousel>
        )}
        <p className="text-3xl w-auto my-12">
          Click Confirm To Use The Selected Card To Purchase 5 Tickets For 10$
        </p>
        <Link to="/thanks">
          <Button button="CONFIRM PURCHASE" />
        </Link>
      </div>
    </div>
  );
};

export default PurchaseTickets;
