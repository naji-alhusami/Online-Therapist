import React from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const UpdateUserInfo = ({ userInfo }) => {
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  // console.log(userInfo);

  const validateFamilySize = (value) => {
    const parsedValue = parseInt(value, 10);
    if (Number.isNaN(parsedValue) || parsedValue > 10) {
      return 'Please enter a number less than or equal to 10.';
    }
    return true;
  };

  return (
    <div>
      <h1 className="text-4xl ml-5">
        <b>{t('PROFILE INFO')}</b>
      </h1>

      {/* Full Name */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[6.8rem]">{t('Full Name')}</p>
        <input
          {...register('fullName', {
            maxLength: {
              value: 25,
              message: 'Full Name should not exceed 25 characters',
            },
          })}
          aria-invalid={errors.fullName ? 'true' : 'false'}
          type="text"
          value={userInfo.name}
          className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
          readOnly
          required
        />
        {errors.firstName && (
          <p className="text-red-600">{errors.firstName.message}</p>
        )}
      </div>

      {/* Education Level */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[4.3rem]">{t('Education Level')}</p>
        <select
          {...register('EducationLevel', {
            required: 'Please Select an Education Level',
          })}
          aria-invalid={errors.EducationLevel ? 'true' : 'false'}
          defaultValue=""
          className=" w-auto py-1 mr-5 text-gray-800 bg-white border rounded-md shadow-lg lg:w-[16rem]"
        >
          <option value="" disabled>
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
        {errors.EducationLevel && (
          <p className="text-red-600">{errors.EducationLevel.message}</p>
        )}
      </div>

      {/* Hobbies */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[7.5rem]">{t('Hobbies')}</p>
        <input
          {...register('Hobbies', {
            maxLength: {
              value: 15,
              message: 'Hobbies should not exceed 15 characters',
            },
          })}
          aria-invalid={errors.Hobbies ? 'true' : 'false'}
          type="text"
          className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
          required
        />
        {errors.Hobbies && (
          <p className="text-red-600">{errors.Hobbies.message}</p>
        )}
      </div>

      {/* Family Size */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[6.3rem]">{t('Family Size')}</p>
        <input
          {...register('FamilySize', { validate: validateFamilySize })}
          type="text"
          className="bg-white border text-gray-800 shadow-lg rounded-md p-1 w-[20%] mr-5"
          required
        />
        <p>Member(s)</p>
        {errors.FamilySize && <p>{errors.FamilySize.message}</p>}
      </div>

      {/* Gender */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[7.9rem]">{t('Gender')}</p>
        <select
          {...register('Gender', {
            required: 'Please Select Gender',
          })}
          aria-invalid={errors.Gender ? 'true' : 'false'}
          defaultValue=""
          className=" w-[12rem] py-1 mr-5 text-gray-800 bg-white border rounded-md shadow-lg lg:w-[16rem]"
        >
          <option value="" disabled>
            {t('')}
          </option>
          <option value="Male">{t('Male')}</option>
          <option value="Female">{t('Female')}</option>
        </select>
        {errors.Gender && (
          <p className="text-red-600">{errors.Gender.message}</p>
        )}
      </div>

      {/* Birth Date */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[6.7rem]">{t('Birth Date')}</p>
        <input
          {...register('BirthDate')}
          type="date"
          value={`${userInfo.birthdayYear}-${userInfo.birthdayMonth}-${userInfo.birthdayDay}`}
          className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 block p-1 w-[12rem] lg:w-[16rem]"
          readOnly
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[8.7rem]">{t('Email')}</p>
        <input
          {...register('Email', {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid Email Address',
            },
          })}
          aria-invalid={errors.Email ? 'true' : 'false'}
          type="text"
          value={userInfo.email}
          className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
          readOnly
          required
        />
        {errors.Email && <p className="text-red-600">{errors.Email.message}</p>}
      </div>

      {/* Phone Number */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[4.3rem]">{t('Phone Number')}</p>
        <input
          {...register('PhoneNumber')}
          type="tel"
          className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
          required
        />
      </div>

      {/* Upload ID */}
      <div className="flex flex-row justify-start items-center ml-6 mt-8">
        <p className="mr-[6.5rem]">{t('Upload ID')}</p>
        <input
          className="bg-white border text-gray-800 shadow-lg rounded-md block p-1 w-[12rem] mr-5 lg:w-[16rem]"
          type="file"
          id="file-upload"
        />
      </div>
    </div>
  );
};

export default UpdateUserInfo;
