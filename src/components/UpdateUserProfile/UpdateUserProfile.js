import React from 'react';

import { useTranslation } from 'react-i18next';

import UpdatePicture from './UpdatePicture';

const UpdateUserProfile = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col font-poppins">
      <div className="text-center flex items-center">
        <p className=" text-sm text-[#FF0000] m-10">
          {t(
            'Please fill all the fields with correct and valid details to complete your profile.'
          )}
        </p>
      </div>
      <div className="m-5 ">
        <UpdatePicture
        //   setprofilepic={setprofilepic}
        //   profilepic={userInfo.photoURL}
        />
      </div>
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
              <option value="Primary education">
                {t('Primary education')}
              </option>
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
      <div>
        <h1 className="text-4xl ml-5 my-10">
          <b>{t('Security')}</b>
        </h1>

        {/* Password */}
        <div className="flex flex-row items-center ml-6 mt-8">
          <p>{t('Password')}</p>
          <div className="flex ml-auto">
            <input
              type="password"
              className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 p-1 w-auto"
              required
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-row items-center ml-6 mt-8">
          <p>{t('Confirm Password')}</p>
          <div className="flex ml-auto">
            <input
              type="password"
              className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 p-1 w-auto"
              required
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row lg:gap-8 gap-3 ml-6 mt-8 ">
        <button
          //   onClick={handleSubmit(onSubmit)}
          type="button"
          className="lg:text-2xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 text-bold bg-cyan-400 hover:bg-cyan-500 hover:text-white"
        >
          {t('SAVE CHANGES')}
        </button>
        <button
          type="button"
          className="lg:text-2xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
          //   onClick={() => HandelDelete()}
        >
          {t('DELETE ACCOUNT')}
        </button>
        <button
          type="button"
          className="lg:text-2xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
          //   onClick={() => handleCancel}
        >
          {t('CANCEL')}
        </button>
      </div>

      {/* Payment Methods & Tickets */}
      <div className="flex flex-col ml-6 mt-16">
        <div className="lg:text-5xl text-2xl">
          <b>{t('Payment Methods & Tickets')}</b>
        </div>
        <div className="flex flex-rows gap-10 mt-8 mb-16">
          <div className="flex flex-col ">
            <div className="lg:text-lg text-sm mb-2">{t('3 Cards Added')}</div>
            <button
              type="button"
              className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              {t('SHOW CARDS')}
            </button>
          </div>
          <div className="flex flex-col">
            <div className="lg:text-lg text-sm mb-2 ">
              {t('10 Tickets Remaining')}
            </div>
            <button
              type="button"
              className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              {t('BUY TICKETS')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
