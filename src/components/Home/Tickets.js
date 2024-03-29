import React from 'react';
import { useTranslation } from 'react-i18next';

import Counselor from './Counselor';
import Card from './Card';

function Tickets() {
  const { t } = useTranslation();

  return (
    <div className=" font-poppins p-12 flex flex-col justify-evenly lg:h-section py-8">
      <h1 className="pl-16 font-poppins text-3xl md:text-4xl pb-8 pt-12">
        {t('PURCHASE TICKETS')}
      </h1>
      <h4 className="pl-16 font-poppins text-xl mb-8 ">
        {t('PURCHASE TICKETS THAT CAN BE USED TO BOOK APPOINTMENTS!')}
      </h4>
      <div className=" flex flex-col md:flex-row items-center justify-around w-full lg:h-80 ">
        <Card
          ticket="5"
          price="10"
          button={t('PURCHASE')}
          buttonPreview
        />

        <Card
          ticket="25"
          price="40"
          button={t('PURCHASE')}
          buttonPreview
        />

        <Card
          ticket="50"
          price="70"
          button={t('PURCHASE')}
          buttonPreview
        />
      </div>
      <Counselor />
    </div>
  );
}

export default Tickets;
