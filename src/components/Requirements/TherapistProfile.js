import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { addTherapistsData } from '../../features/therapists/therapistsSlice';

const TherapistProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  const onSubmitForm = (therapistData) => {
    dispatch(
      addTherapistsData({
        userName: therapistData.userName,
        email: therapistData.email,
        city: therapistData.city,
        licenseNumber: therapistData.licenseNumber,
        password: therapistData.password,
      })
    );

    const thanksData = {
      paragraphOne:
        'Thank you for your interest in working with Healing, we have recieved your application.',
      paragraphTwo:
        'If your Profile is accepted, you will receive an email guiding you for the next steps.',
      link: '/',
      page: 'Home',
    };

    navigate('/thanks', { state: thanksData });
  };

  return (
    <div>
      <div className="flex flex-col items-center m-8 md:flex md:flex-row md:items-start ">
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <h1 className="text-4xl ml-5">
            <b>{t('CREATE AN ACCOUNT')}</b>
          </h1>
          {/* User Name */}
          <div className="flex flex-row justify-start items-center ml-6 mt-8">
            <div className="flex flex-col mr-5">
              <p className="mr-[6.8rem]">{t('User Name')}</p>
              <input
                {...register('userName', {
                  required: 'Please Enter Your User Name',
                  maxLength: {
                    value: 25,
                    message: 'User Name should not exceed 25 characters',
                  },
                })}
                aria-invalid={errors.fullName ? 'true' : 'false'}
                type="text"
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.userName && (
                <p className="text-red-600">{errors.userName.message}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-row justify-start items-center ml-6 mt-8">
            <div className="flex flex-col mr-5">
              <p className="mr-[8.7rem]">{t('Email')}</p>
              <input
                {...register('email', {
                  required: 'Email Address is Required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid Email Address',
                  },
                })}
                aria-invalid={errors.email ? 'true' : 'false'}
                type="text"
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* City */}
          <div className="flex flex-row justify-start items-center ml-6 mt-8">
            <div className="flex flex-col mr-5">
              <p className="mr-[7.5rem]">{t('City')}</p>
              <input
                {...register('city', {
                  required: 'City Field is Required',
                  maxLength: {
                    value: 10,
                    message: 'city should not exceed 10 characters',
                  },
                })}
                aria-invalid={errors.hobbies ? 'true' : 'false'}
                type="text"
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.city && (
                <p className="text-red-600">{errors.city.message}</p>
              )}
            </div>
          </div>

          {/* License Number */}
          <div className="flex flex-row justify-start items-center ml-6 mt-8">
            <div className="flex flex-col mr-5">
              <p className="mr-[4.3rem]">{t('License Number')}</p>
              <input
                {...register('licenseNumber', {
                  required: 'License Number is Required',
                })}
                aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                type="number"
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.licenseNumber && (
                <p className="text-red-600">{errors.licenseNumber.message}</p>
              )}
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-row justify-start items-center ml-6 mt-8">
            <div className="flex flex-col mr-5">
              <p>{t('Create Password')}</p>
              <input
                {...register('password', {
                  required: 'Password is Required',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
                    message:
                      'Password should contain at least one uppercase letter, one lowercase letter, and one number',
                  },
                })}
                aria-invalid={errors.password ? 'true' : 'false'}
                defaultValue=""
                type="password"
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 w-auto lg:w-[16rem]"
              />
            </div>
            <div className="mt-2 w-[85%]">
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-row justify-start items-center ml-6 mt-8">
            <div className="flex flex-col mr-5">
              <p className="mr-[3.2rem]">{t('Confirm Password')}</p>
              <input
                {...register('confirmPassword', {
                  required: 'Password Confirmation is Required',
                  validate: (value) =>
                    value === watch('password') || 'Passwords do not match',
                })}
                type="password"
                className="bg-white border text-gray-800 shadow-lg rounded-md p-1 w-auto lg:w-[16rem]"
              />
            </div>
            <div className="mt-2">
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row lg:gap-2 gap-3 ml-6 mt-8 md:mr-5">
            <button
              type="submit"
              className="lg:text-xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 text-bold bg-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              {t('CREATE')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TherapistProfile;
