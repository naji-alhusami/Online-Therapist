import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { whyHealing, requirements } from './RequirementsData';

import requirementImage from '../Images/requirementImage.svg';

const Requirements = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row m-10">
      <div className="w-full ">
        <h1 className="font-semibold text-5xl uppercase mb-5">
          {t('WHY WORK WITH HEALING?')}
        </h1>
        {whyHealing.map((reason) => {
          return (
            <div key={reason.id}>
              <h1 className="font-semibold text-xl">{reason.title}</h1>
              <p className="mb-5">{reason.subtitle}</p>
            </div>
          );
        })}
        <h1 className="font-semibold text-5xl uppercase mt-12 mb-5">
          {t('REQUIREMENTS')}
        </h1>
        <ul>
          {requirements.map((req) => {
            return (
              <li key={req.id} className="mb-2">
                {req.requirement}
              </li>
            );
          })}
        </ul>
        <div className="my-10">
          <button
            type="button"
            className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl hover:text-white"
            onClick={() => navigate('/therapistProfile')}
          >
            {t('Get Started')}
          </button>
        </div>
      </div>
      <div className="m-20">
        <img src={requirementImage} alt="requirments" />
      </div>
    </div>
  );
};

export default Requirements;
