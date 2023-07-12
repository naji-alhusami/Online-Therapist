import React from 'react';
import { useTranslation } from 'react-i18next';

const BookingHeader = ({ note }) => {
  const { t } = useTranslation();

  return note ? (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="m-10">
      <h1 className="tracking-wider uppercase text-4xl mb-10">
        {t('What Brings You Here?')}
      </h1>
      <p className="text-stone-500 tracking-wider lg:mr-[14rem]">
        {t("Please specify (in a few sentences) why you'd like counselling.")}
      </p>
      <p className="text-stone-500 tracking-wider lg:mr-[14rem]">
        {t(
          'This will give your counselor a good understanding os where to start.'
        )}
      </p>
    </div>
  ) : (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="m-10">
      <h1 className="tracking-wider uppercase text-4xl mb-10">
        {t("let's match you with the right therapist")}
      </h1>
      <p className="text-stone-500 tracking-wider lg:mr-[14rem]">
        {t(
          "Please fill out this short questionnaire to provide some general and anonymous background about you and the issues you'd like to deal with in online therapy. It would help us match you with the most suitable therapist for you."
        )}
      </p>
    </div>
  );
};

export default BookingHeader;
