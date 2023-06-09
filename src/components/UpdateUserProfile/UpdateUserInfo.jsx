import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const UpdateUserInfo = ({ userInfo }) => {
  const [state, setState] = useState({
    fullName: userInfo.name,
    EducationLevel: userInfo.EducationLevel,
    Hobbies: userInfo.Hobbies,
    FamilySize: userInfo.FamilySize,
    Gender: userInfo.Gender,
    BirthDate: `${userInfo.birthdayYear}-${userInfo.birthdayMonth}-${userInfo.birthdayDay}`,
    Email: userInfo.email,
    PhoneNumber: userInfo.PhoneNumber,
    Password: userInfo.Password,
    ConfirmPassword: userInfo.ConfirmPassword,
  });
  // console.log(state.EducationLevel);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  const validateFamilySize = (value) => {
    const parsedValue = parseInt(value, 10);
    if (Number.isNaN(parsedValue) || parsedValue > 10) {
      return 'Please Enter a Number Less Than or Equal to 10.';
    }
    return true;
  };

  const validatePhoneNumber = (value) => {
    const regex = /^\d{10}$/;
    if (!regex.test(value)) {
      return 'Please Enter a Valid Phone Number.';
    }
    return true;
  };

  const onSubmitform = (userData) => {
    console.log(userData);
  };

  return (
    <div>
      <h1 className="text-4xl ml-5">
        <b>{t('PROFILE INFO')}</b>
      </h1>

      <form onSubmit={handleSubmit(onSubmitform)}>
        {/* Full Name */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-[6.8rem]">{t('Full Name')}</p>
              <input
                {...register('fullName', {
                  required: 'Please Enter Your Full Name',
                  maxLength: {
                    value: 25,
                    message: 'Full Name should not exceed 25 characters',
                  },
                })}
                aria-invalid={errors.fullName ? 'true' : 'false'}
                type="text"
                value={state.fullName}
                onChange={(event) =>
                  setState({ ...state, fullName: event.target.value })
                }
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.firstName && (
                <p className="text-red-600">{errors.firstName.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Education Level */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-[4.3rem]">{t('Education Level')}</p>
              <select
                {...register('EducationLevel', {
                  required: 'Please Select an Education Level',
                })}
                aria-invalid={errors.EducationLevel ? 'true' : 'false'}
                defaultValue=""
                value={state.EducationLevel}
                onChange={(event) =>
                  setState({ ...state, EducationLevel: event.target.value })
                }
                className=" w-auto py-1 mr-5 text-gray-800 bg-white border rounded-md shadow-lg lg:w-[16rem]"
              >
                <option value="" disabled>
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
                <option value="Bachelor's degree">
                  {t('Bachelor degree')}
                </option>
                <option value="Master's degree">{t('Master degree')}</option>
                <option value="Doctorate or higher">
                  {t('Doctorate or higher')}
                </option>
              </select>
            </div>
            <div className="mt-2">
              {errors.EducationLevel && (
                <p className="text-red-600 ">{errors.EducationLevel.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-[7.5rem]">{t('Hobbies')}</p>
              <input
                {...register('Hobbies', {
                  required: 'Hobbies Field is Required',
                  maxLength: {
                    value: 10,
                    message: 'Hobbies should not exceed 10 characters',
                  },
                })}
                aria-invalid={errors.Hobbies ? 'true' : 'false'}
                type="text"
                value={state.Hobbies}
                onChange={(event) =>
                  setState({ ...state, Hobbies: event.target.value })
                }
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.Hobbies && (
                <p className="text-red-600">{errors.Hobbies.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Family Size */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-[6.3rem]">{t('Family Size')}</p>
              <input
                {...register('FamilySize', {
                  required: 'Family Size Field is Required',
                  validate: validateFamilySize,
                })}
                aria-invalid={errors.FamilySize ? 'true' : 'false'}
                type="text"
                value={state.FamilySize}
                onChange={(event) =>
                  setState({ ...state, FamilySize: event.target.value })
                }
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 w-[20%] mr-5"
              />
              <p>Member(s)</p>
            </div>
            <div className="mt-2">
              {errors.FamilySize && (
                <p className="text-red-600">{errors.FamilySize.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Gender */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-[7.9rem]">{t('Gender')}</p>
              <select
                {...register('Gender', {
                  required: 'Please Select Gender',
                })}
                aria-invalid={errors.Gender ? 'true' : 'false'}
                defaultValue=""
                value={state.Gender}
                onChange={(event) =>
                  setState({ ...state, Gender: event.target.value })
                }
                className=" w-[12rem] py-1 mr-5 text-gray-800 bg-white border rounded-md shadow-lg lg:w-[16rem]"
              >
                <option value="" disabled>
                  {t('')}
                </option>
                <option value="Male">{t('Male')}</option>
                <option value="Female">{t('Female')}</option>
              </select>
            </div>
            <div className="mt-2">
              {errors.Gender && (
                <p className="text-red-600">{errors.Gender.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Birth Date */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <p className="mr-[6.7rem]">{t('Birth Date')}</p>
          <input
            {...register('BirthDate')}
            type="date"
            value={state.BirthDate}
            onChange={(event) =>
              setState({ ...state, BirthDate: event.target.value })
            }
            className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 block p-1 w-[12rem] lg:w-[16rem]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-[8.7rem]">{t('Email')}</p>
              <input
                {...register('Email', {
                  required: 'Email Address is Required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid Email Address',
                  },
                })}
                aria-invalid={errors.Email ? 'true' : 'false'}
                type="text"
                value={state.Email}
                onChange={(event) =>
                  setState({ ...state, Email: event.target.value })
                }
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.Email && (
                <p className="text-red-600">{errors.Email.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-[4.3rem]">{t('Phone Number')}</p>
              <input
                {...register('PhoneNumber', {
                  required: 'Phone Number is Required',
                  validate: validatePhoneNumber,
                })}
                aria-invalid={errors.PhoneNumber ? 'true' : 'false'}
                type="tel"
                value={state.PhoneNumber}
                onChange={(event) =>
                  setState({ ...state, PhoneNumber: event.target.value })
                }
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.PhoneNumber && (
                <p className="text-red-600">{errors.PhoneNumber.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Upload ID */}
        {/* <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <p className="mr-[6.5rem]">{t('Upload ID')}</p>
          <input
            className="bg-white border text-gray-800 shadow-lg rounded-md block p-1 w-[12rem] mr-5 lg:w-[16rem]"
            type="file"
            id="file-upload"
          />
        </div> */}

        <h1 className="text-4xl ml-5 my-10">
          <b>{t('Security')}</b>
        </h1>

        {/* Password */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-[7rem]">{t('Password')}</p>
              <input
                {...register('Password', {
                  required: 'Password is Required',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
                    message:
                      'Password should contain at least one uppercase letter, one lowercase letter, and one number',
                  },
                })}
                aria-invalid={errors.Password ? 'true' : 'false'}
                value={state.Password}
                onChange={(event) =>
                  setState({ ...state, Password: event.target.value })
                }
                type="password"
                className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 p-1 w-auto lg:w-[16rem]"
              />
            </div>
            <div className="mt-2 w-[85%]">
              {errors.Password && (
                <p className="text-red-600">{errors.Password.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="flex flex-row justify-start items-center ml-6 mt-8">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <p className="mr-[3.2rem]">{t('Confirm Password')}</p>
              <input
                {...register('ConfirmPassword', {
                  required: 'Password Confirmation is Required',
                  validate: (value) =>
                    value === watch('Password') || 'Passwords do not match',
                })}
                type="password"
                value={state.ConfirmPassword}
                onChange={(event) =>
                  setState({ ...state, ConfirmPassword: event.target.value })
                }
                className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 p-1 w-auto lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.ConfirmPassword && (
                <p className="text-red-600">{errors.ConfirmPassword.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row lg:gap-2 gap-3 ml-6 mt-8 md:mr-5">
          <button
            //   onClick={handleSubmit(onSubmit)}
            type="submit"
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
      </form>
    </div>
  );
};

export default UpdateUserInfo;
