import React from 'react';
import { useTranslation } from 'react-i18next';
import CareersData from './CareersData';
import CareersCard from './CareersCard';

function ContentC() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        id="openpositions"
        className="lg:text-5xl md:text-3xl text-2xl leading-6 lg:mt-12 mt-4 lg:pt-12 pt-8 lg:ml-28 ml-10 text-gray-700"
      >
        <h1>{t('CURRENT OPEN POSITIONS')}</h1>
      </div>
      <div className="lg:text-xl text-lg leading-6 mt-4 lg:ml-28 ml-10 lg:mr-0 mr-10 text-gray-400">
        <h3>
          {t(
            'Please send us an email with the application title as the subject with an attached CV in PDF format!'
          )}
        </h3>
      </div>
      <div>
        <div className=" overflow-y-auto mb-12 lg:ml-24 ml-10 mt-6 lg:mr-20 mr-10 h-[30em] ">
          {CareersData.map((career) => {
            return (
              <CareersCard
                job={career.job}
                description={career.description}
                department={career.department}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContentC;
