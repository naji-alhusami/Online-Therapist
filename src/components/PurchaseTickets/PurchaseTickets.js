import React, { useState, useRef, useEffect } from 'react';
import { MdOutlinePayment } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Cards from 'react-credit-cards';
import { useTranslation } from 'react-i18next';
import Carousel from 'react-multi-carousel';
import { useLocation } from 'react-router-dom';
import { getCreditCardByUserId } from '../../features/cards/cardsSlice';
import Button from '../ui/Button';
import RightArrow from '../Images/RightArrow.svg';
import LeftArrow from '../Images/LeftArrow.svg';

const PurchaseTickets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreditCardByUserId());
  }, [dispatch]);
  const { t } = useTranslation();
  const location = useLocation();
  console.log(location);
  const { ticket, price } = location.state;

  const cardInformation = useSelector((state) => state.cards.userCards);
  console.log(cardInformation);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1060 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1060, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  const carouselRef = useRef(null);

  const handleNextSlide = () => {
    carouselRef.current.next();
  };

  const handlePrevSlide = () => {
    carouselRef.current.previous();
  };
  const [selectedCard, setSelectedCard] = useState(null);
  const [activateButton, setActivateButton] = useState(false);
  const handleSlideClick = (card) => {
    setSelectedCard(card);
    setActivateButton(true);
  };
  const isCardSliderEmpty = Object.keys(cardInformation).length === 0;
  //   const isButtonDisabled = selectedCard === null;
  return (
    <div className="">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase m-16">
        SELECT CARD
      </h1>
      <p className=" m-16 w-auto">
        Please select the card you want to buy the tickets with
      </p>
      <div className="flex flex-col items-center justify-center mt-20">
        {isCardSliderEmpty ? (
          <>
            <MdOutlinePayment className="text-6xl text-gray mx-auto" />
            <p className="mb-10">{t('No Payment Methods Found')}</p>
          </>
        ) : (
          <div className="flex flex-row w-full">
            <button type="button" className="ml-2" onClick={handlePrevSlide}>
              <img src={LeftArrow} alt="previous" />
            </button>
            <Carousel
              infinite="true"
              containerClass="w-full mx-4"
              responsive={responsive}
              ref={carouselRef}
              showDots={false}
              arrows={false}
            >
              {cardInformation.map((card) => {
                const isSelected = card === selectedCard;
                return (
                  <div
                    key={uuidv4()}
                    className={`flex flex-col justify-center items-center relative ${
                      isSelected
                        ? 'border-dashed border-4 border-blue-500 font-semibold m-0'
                        : ''
                    }`}
                    onClick={() => handleSlideClick(card)}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        handleSlideClick(card);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    style={{ cursor: 'pointer' }}
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
            <button type="button" className="mr-2" onClick={handleNextSlide}>
              <img src={RightArrow} alt="next" />
            </button>
          </div>
        )}

        <p className="text-3xl w-auto m-10">
          Click Confirm To Use The Selected Card To Purchase {ticket} For{' '}
          {price}
        </p>
        {/* <Link to="/thanks" className="mb-16"> */}
        <Button
          button="CONFIRM PURCHASE"
          disabled={activateButton}
          ticket={ticket}
        />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default PurchaseTickets;
