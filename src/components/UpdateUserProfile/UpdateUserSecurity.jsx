import React from 'react';

import { useTranslation } from 'react-i18next';

const UpdateUSerSecurity = () => {

  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-4xl ml-5 my-10">
        <b>{t('Security')}</b>
      </h1>

      {/* Password */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[7rem]">{t('Password')}</p>
        <input
          type="password"
          className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 p-1 w-auto lg:w-[16rem]"
          required
        />
      </div>

      {/* Confirm Password */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[3.2rem]">{t('Confirm Password')}</p>
        <input
          type="password"
          className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 p-1 w-auto lg:w-[16rem]"
          required
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row lg:gap-2 gap-3 ml-6 mt-8 md:mr-5">
        <button
          //   onClick={handleSubmit(onSubmit)}
          type="button"
          className="lg:text-xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 text-bold bg-cyan-400 hover:bg-cyan-500 hover:text-white"
        >
          {t('SAVE CHANGES')}
        </button>
        <button
          type="button"
          className="lg:text-xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
          //   onClick={() => HandelDelete()}
        >
          {t('DELETE ACCOUNT')}
        </button>
        <button
          type="button"
          className="lg:text-xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
          //   onClick={() => handleCancel}
        >
          {t('CANCEL')}
        </button>
      </div>
    </div>
  );
};

export default UpdateUSerSecurity;
