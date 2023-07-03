import React from 'react';
import Button from '../ui/Button';
import { whyHealing, requirements } from './RequirementsData';
import requirementImage from '../Images/requirementImage.svg';

const Requirements = () => {
  return (
    <div className="flex flex-col md:flex-row m-10">
      <div className="w-full ">
        <h1 className="font-semibold text-5xl uppercase mb-5">
          WHY WORK WITH HEALING?
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
          REQUIREMENTS
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
          <Button button="Get Started" disabled="false" />
        </div>
      </div>
      <div className="m-20">
        <img src={requirementImage} alt="requirments" />
      </div>
    </div>
  );
};

export default Requirements;
