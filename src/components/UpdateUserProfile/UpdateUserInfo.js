import React from 'react';

import { useTranslation } from 'react-i18next';

const UpdateUserInfo = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-4xl ml-5">
        <b>{t('PROFILE INFO')}</b>
      </h1>

      {/* Full Name */}
      <div className="flex flex-row items-center ml-6 mt-8">
        <p>{t('Full Name')}</p>
        <div className="flex ml-auto">
          <input
            type="text"
            className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 p-1 w-auto"
            required
          />
        </div>
      </div>

      {/* Education Level */}
      <div className="flex flex-row items-center ml-6 mt-8">
        <p>{t('Education Level')}</p>
        <div className="flex ml-auto">
          <select className=" w-auto py-1 mr-5 text-gray-800 bg-white border rounded-md shadow-lg">
            <option defaultValue="selected" disabled value="">
              {t('')}
            </option>
            <option value="No formal education">
              {t('No formal education')}
            </option>
            <option value="Primary education">{t('Primary education')}</option>
            <option value="Secondary education">{t('High school')}</option>
            <option value="GED">{t('GED')}</option>
            <option value="Vocational qualification">
              {t('Vocational qualification')}
            </option>
            <option value="Bachelor's degree">{t('Bachelor degree')}</option>
            <option value="Master's degree">{t('Master degree')}</option>
            <option value="Doctorate or higher">
              {t('Doctorate or higher')}
            </option>
          </select>
        </div>
      </div>

      {/* Hobbies */}
      <div className="flex flex-row items-center ml-6 mt-8">
        <p>{t('Hobbies')}</p>
        <div className="flex ml-auto">
          <input
            type="text"
            className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 block p-1 w-auto"
            required
          />
        </div>
      </div>

      {/* Family Size */}
      <div className="flex flex-row items-center ml-6 mt-8">
        <p>{t('Family Size')}</p>
        <div className="flex justify-end mr-9">
          <input
            type="text"
            className="bg-white border text-gray-800 shadow-lg rounded-md p-1 w-[20%]"
            required
          />
          <p className="mx-5">Member(s)</p>
        </div>
      </div>

      {/* Gender */}
      <div className="flex flex-row items-center ml-6 mt-8">
        <p>{t('Gender')}</p>
        <div className="flex ml-auto">
          <select className=" w-[12rem] py-1 mr-5 text-gray-800 bg-white border rounded-md shadow-lg">
            <option defaultValue="selected" disabled>
              {t('')}
            </option>
            <option value="Male">{t('Male')}</option>
            <option value="Female">{t('Female')}</option>
          </select>
        </div>
      </div>

      {/* Birth Date */}
      <div className="flex flex-row items-center ml-6 mt-8">
        <p>{t('Birth Date')}</p>
        <div className="flex ml-auto">
          <input
            type="date"
            className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 block p-1 w-[12rem]"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-row items-center ml-6 mt-8">
        <p>{t('Email')}</p>
        <div className="flex ml-auto">
          <input
            type="text"
            className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 block p-1 w-auto"
            required
          />
        </div>
      </div>

      {/* Phone Number */}
      <div className="flex flex-row items-center ml-6 mt-8">
        <p>{t('Phone Number')}</p>
        <div className="flex ml-auto">
          <input
            type="text"
            className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 block p-1 w-auto"
            required
          />
        </div>
      </div>

      {/* Upload ID */}
      <div className="flex flex-row items-center ml-6 mt-8">
        <p>{t('Upload ID')}</p>
        <div className="relative ml-auto">
          <input
            className="bg-white border text-gray-800 shadow-lg rounded-md block p-1 w-[12rem] mr-5"
            type="file"
            id="file-upload"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateUserInfo;
