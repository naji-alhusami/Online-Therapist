import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function CareersIntro() {
  const [showContent, setShowContent] = useState(false);
  const { t } = useTranslation();

  return (
    <div>
      <div className="lg:text-5xl md:text-3xl text-2xl leading-6 mt-10 lg:ml-28 ml-10 text-gray-700">
        <h1>{t('CAREERS AT HEALING')}</h1>
      </div>
      <div className="lg:text-xl text-lg leading-6 mt-4 lg:ml-28 ml-10 text-gray-400">
        <h3>{t('Be a part of making people feel better.')}</h3>
      </div>
      <div className="lg:text-lg text-base leading-6 lg:mt-24 mt-16 lg:ml-28 ml-10 lg:mr-52 md:mr-20 mr-10 text-gray-700">
        {t(
          'Our SEO software cuts through mountains of data to surface critical insights. We build and maintain systems that process massive amounts of data (we are talking 36 trillion records per day and multiple petabytes of storage.) We model transparent and empathetic marketing for the world. We educate our community, making every effort to help them improve their skill. And we do it all by fostering a culture that encourages accountability, empathy, and transparency.'
        )}
      </div>
      <div className="lg:text-2xl text-lg leading-6 mt-20 lg:ml-28 ml-10 text-gray-700">
        <h3>{t('What role will you play?')}</h3>
      </div>
      <div className="text-xl leading-6 mt-4 lg:ml-12 mb-8">
        <button
          type="button"
          onClick={() => setShowContent(!showContent)}
          className="lg:text-xl md:text-base text-sm lg:ml-16 ml-10 lg:px-6 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 cursor-pointer "
        >
          {t('SEE OUR OPEN LIST')}
        </button>
      </div>
    </div>
  );
}

export default CareersIntro;
