import React from 'react';
import { useTranslation } from 'react-i18next';

import TeamCard from './TeamCard';
import TeamData from './TeamData';

function Team() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-[#424A4F] mb-56">
      <div className=" font-poppins lg:text-5xl text-3xl leading-10">
        <h1 className="lg:ml-44 lg:mt-20 ml-10 sm:mr-10 md:mr-10 mt-10 text-black">
          {t('WE ARE HEALING, NICE TO MEET YOU!')}
        </h1>
      </div>
      <div className="text-3xl leading-10">
        <h3 className="lg:ml-44 lg:mt-28 ml-10 mt-8">{t('Meet the Team!')}</h3>
      </div>
      <div className=" ml-36 mt-[4em] mr-36">
        <div className="font-poppins flex flex-rows justify-items-center justify-evenly flex-wrap -m-6">
          {TeamData.map((member) => {
            return <TeamCard  key={member.id} name={member.name} job={member.job} photo={member.image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
