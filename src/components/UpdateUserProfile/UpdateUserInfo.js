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
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        {/* <div className="flex items-center"> */}
        <p className="mr-[6.8rem]">{t('Full Name')}</p>
        <input
          type="text"
          className="bg-white border text-gray-800 shadow-lg rounded-md p-1"
          required
        />
        {/* </div> */}
      </div>

      {/* Education Level */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className='mr-[4.3rem]'>{t('Education Level')}</p>
        {/* <div className="flex ml-auto"> */}
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
        {/* </div> */}
      </div>

      {/* Hobbies */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <div className="flex items-center">
          <p className="mr-[7.5rem]">{t('Hobbies')}</p>
          <input
            type="text"
            className="bg-white border text-gray-800 shadow-lg rounded-md p-1"
            required
          />
        </div>
      </div>

      {/* Family Size */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[6.3rem]">{t('Family Size')}</p>
        {/* <div className="flex justify-end mr-9"> */}
        <input
          type="text"
          className="bg-white border text-gray-800 shadow-lg rounded-md p-1 w-[20%] mr-5"
          required
        />
        <p>Member(s)</p>
        {/* </div> */}
      </div>

      {/* Gender */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[7.9rem]">{t('Gender')}</p>
        {/* <div className="flex ml-auto"> */}
        <select className=" w-[12rem] py-1 mr-5 text-gray-800 bg-white border rounded-md shadow-lg">
          <option defaultValue="selected" disabled>
            {t('')}
          </option>
          <option value="Male">{t('Male')}</option>
          <option value="Female">{t('Female')}</option>
        </select>
        {/* </div> */}
      </div>

      {/* Birth Date */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[6.7rem]">{t('Birth Date')}</p>
        {/* <div className="flex ml-auto"> */}
        <input
          type="date"
          className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 block p-1 w-[12rem]"
          required
        />
        {/* </div> */}
      </div>

      {/* Email */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        {/* <div className="flex items-center"> */}
        <p className="mr-[8.7rem]">{t('Email')}</p>
        <input
          type="text"
          className="bg-white border text-gray-800 shadow-lg rounded-md p-1"
          required
        />
        {/* </div> */}
      </div>

      {/* Phone Number */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        {/* <div className="flex items-center"> */}
        <p className="mr-[4.3rem]">{t('Phone Number')}</p>
        <input
          type="text"
          className="bg-white border text-gray-800 shadow-lg rounded-md p-1"
          required
        />
        {/* </div> */}
      </div>

      {/* Upload ID */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className='mr-[6.5rem]'>{t('Upload ID')}</p>
        {/* <div className="relative ml-auto"> */}
          <input
            className="bg-white border text-gray-800 shadow-lg rounded-md block p-1 w-[12rem] mr-5"
            type="file"
            id="file-upload"
          />
        </div>
      {/* </div> */}
    </div>
  );
};

export default UpdateUserInfo;
