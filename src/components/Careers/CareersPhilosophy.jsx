import React from 'react';
import { useTranslation } from 'react-i18next';

const CareersPhilosophy = () => {
  const { t } = useTranslation();

  return (
    <div className="text-gray-700">
      <div className="lg:text-5xl md:text-3xl text-2xl leading-6 mt-10 lg:ml-28 ml-10">
        <h1>{t('OUR HIRING PHILOSOPHY')}</h1>
      </div>
      <div className="lg:text-lg text-base leading-6 mt-6 lg:ml-28 ml-10 lg:mr-52 md:mr-20 mr-10 mb-8">
        {t(
          'To build the very best SEO tools, we need a workforce that reflects the diversity of our communities and customers. We want Online Therapy to be a place where everyone feels welcome and engaged, bar none. It is our mission and promise to interview a diverse and representative slate of candidates before making an offer for our open roles.'
        )}
      </div>
    </div>
  );
};

export default CareersPhilosophy;
