import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useTranslation } from 'react-i18next';

import AddCardForm from './AddCardForm';

const AddCards = () => {
  const [values, setValues] = useState({
    name: '',
    number: '',
    expiration: '',
    cvc: '',
    focus: '',
  });
  const { t } = useTranslation();

  return (
    <div className="m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        {t('ADD CARD DETAILS')}
      </h1>
      <p className="w-auto">
        {t(
          'Please make sure all of the info you enter are the same as your card registration info.'
        )}
      </p>
      <div className="flex flex-col lg:flex lg:flex-row">
        <AddCardForm values={values} setValues={setValues} />
        <div className="flex flex-col justify-center mt-10 lg:ml-10">
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
