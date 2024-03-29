import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { MdOutlinePayment } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

import {
  getCreditCardByUserId,
  deleteCreditCard,
} from '../../features/cards/cardsSlice';

const SavedCards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardInformation = useSelector((state) => state.cards.userCards);
  const { t } = useTranslation();

  useEffect(() => {
    const load = () => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(getCreditCardByUserId());
        } else {
          dispatch(getCreditCardByUserId(null));
        }
      });
    };

    load();
  }, [dispatch]);

  const handleDeleteCard = (id) => {
    dispatch(deleteCreditCard({ cardId: id }));

    const thanksData = {
      paragraphOne: 'Your Credit Card Has Been Deleted.',
      paragraphTwo: 'Please Check Your Saved Cards Again.',
      link: '/savedCards',
      page: 'Saved Cards',
    };

    navigate('/thanks', { state: thanksData });
  };

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
        {t('YOUR SAVED CARDS')}
      </h1>
      <p className=" w-auto">
        {t('We only support cards as a payment method at the moment!')}
      </p>
      <div className="flex flex-col items-center justify-center mt-28">
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
                  <button
                    type="button"
                    onClick={() => handleDeleteCard(card.cardId)}
                    className="m-5 bg-cyan-400 hover:bg-cyan-500 hover:text-white rounded-md box-border p-2"
                  >
                    {t('Delete Card')}
                  </button>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
      <button
        type="button"
        className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl hover:text-white"
        onClick={() => navigate('/addCards')}
      >
        {t('Add New Card')}
      </button>
    </div>
  );
};

export default SavedCards;
