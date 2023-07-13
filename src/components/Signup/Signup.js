import React from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  signupUser,
  loginUserWithGoogle,
} from '../../features/users/usersSlice';

import googleicon from '../Images/GoogleLogo.svg';
import signupImage from '../Images/Singup.svg';
import Line from '../Images/Line.svg';

const Singup = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitform = (userData) => {
    // check if async is required!!

    dispatch(
      signupUser({
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        birthdayDay: userData.birthdayDay,
        birthdayMonth: userData.birthdayMonth,
        birthdayYear: userData.birthdayYear,
      })
    );

    const thanksData = {
      paragraphOne:
        'Your Sign Up request has been received, you will soon receive a confirmation email.',
      paragraphTwo:
        'Please follow the steps in the email to complete and activate your account.',
      link: '/',
      page: 'Home',
    };

    navigate('/thanks', { state: thanksData });
  };

  return (
    <div className="flex flex-col m-5 lg:flex lg:flex-row lg:justify-center">
      <div className="flex justify-center">
        <img src={signupImage} alt="singupemage" />
      </div>

      <div className="lg:mx-10">
        <h2 className='flex justify-center text-3xl lg:text-5xl font-["Poppins"] font-normal lg:mb-6 mb-10 lg:mt-10 lg:ml-0 ml-4 mt-10 '>
          {t('SIGNUP NOW')}
        </h2>

        <div className="flex justify-center">
          <form
            className="shadow-2xl lg:px-10 lg:py-10 lg:w-[500px]  px-4 py-4 flex flex-col gap-4  "
            onSubmit={handleSubmit(onSubmitform)}
          >
            <div className="lg:flex lg:flex-row lg:justify-between flex flex-col gap-4">
              {/* First Name */}
              <div>
                <input
                  {...register('firstName', {
                    maxLength: {
                      value: 15,
                      message: 'First Name should not exceed 15 characters',
                    },
                  })}
                  type="text"
                  placeholder={t('First Name')}
                  className="px-3 broder-solid border-2 rounded-md  placeholder-gray-300 lg:w-48 md:w-96 h-12 "
                  aria-invalid={errors.firstName ? 'true' : 'false'}
                  required
                />
                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <input
                  {...register('lastName', {
                    maxLength: {
                      value: 15,
                      message: 'Last Name should not exceed 15 characters',
                    },
                  })}
                  type="text"
                  placeholder={t('Last Name')}
                  className="px-3 broder-solid border-2 rounded-md placeholder-gray-300 lg:w-48 md:w-96 h-12"
                  aria-invalid={errors.lastName ? 'true' : 'false'}
                  required
                />
                {errors.lastName && (
                  <p className="text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                {...register('email', {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                placeholder={t('Your Email')}
                className="px-3 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 lg:w-full md:w-96 h-12 "
                aria-invalid={errors.email ? 'true' : 'false'}
                required
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Email Confirmation */}
            <div>
              <input
                {...register('emailConfirmaion', {
                  validate: (value) =>
                    value === watch('email') || 'Emails do not match',
                })}
                type="email"
                placeholder={t('Confirm Email')}
                className="px-3 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 lg:w-full md:w-96 h-12"
                required
              />
              {errors.emailConfirmaion && (
                <p className="text-red-600">
                  {errors.emailConfirmaion.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="lg:flex lg:flex-row lg:justify-between flex flex-col gap-4">
              <div>
                <input
                  {...register('password', {
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,
                      message:
                        'Password should contain at least one uppercase letter, one lowercase letter, and one number',
                    },
                  })}
                  type="password"
                  placeholder={t('Password')}
                  className="rounded-md px-3 broder-solid border-2  placeholder-gray-300 h-12 lg:w-48 md:w-96"
                  aria-invalid={errors.password ? 'true' : 'false'}
                  required
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>

              {/* Password Confirmation */}
              <div>
                <input
                  {...register('passswordConfirmation', {
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  })}
                  type="password"
                  placeholder={t('Confirm Password')}
                  className="px-3 broder-solid border-2  placeholder-gray-300 h-12 lg:w-48 rounded-md md:w-96"
                  required
                />
                {errors.passswordConfirmation && (
                  <p className="text-red-600">
                    {errors.passswordConfirmation.message}
                  </p>
                )}
              </div>
            </div>

            {/* Day of Birthday */}
            <div className="flex flex-col md:flex md:flex-row lg:flex lg:items-center lg:justify-between">
              <p className="md:flex md:items-center md:mr-8 text-[#9DAFBD]">
                {t('Birth Date:')}
              </p>
              <div className="flex flex-row">
                <input
                  {...register('birthdayDay', {
                    pattern: {
                      value: /^\d{2}$/,
                      message: 'Please enter valid day',
                    },
                  })}
                  type="text"
                  placeholder="DD"
                  className="mr-2 px-2 h-12 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 md:mr-6"
                  aria-invalid={errors.birthdayDay ? 'true' : 'false'}
                  required
                />
                {errors.birthdayDay && (
                  <p className="text-red-600">{errors.birthdayDay.message}</p>
                )}

                {/* Month of Birthday */}
                <input
                  {...register('birthdayMonth', {
                    pattern: {
                      value: /^\d{2}$/,
                      message: 'Please enter valid month',
                    },
                  })}
                  type="text"
                  placeholder="MM"
                  className="mr-2 px-2 h-12 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300 md:mr-6"
                  aria-invalid={errors.birthdayMonth ? 'true' : 'false'}
                  required
                />
                {errors.birthdayMonth && (
                  <p className="text-red-600">{errors.birthdayMonth.message}</p>
                )}

                {/* Year of Birthday */}
                <input
                  {...register('birthdayYear', {
                    pattern: {
                      value: /^\d{4}$/,
                      message: 'Please enter valid year',
                    },
                  })}
                  type="text"
                  placeholder="YYYY"
                  className="md:w-[8.5rem] px-3 h-12 w-24 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
                  aria-invalid={errors.birthdayYear ? 'true' : 'false'}
                  required
                />
                {errors.birthdayYear && (
                  <p className="text-red-600">{errors.birthdayYear.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-around py-3 gap-8">
              <Link to="/login">
                <button
                  type="button"
                  className="bg-[#2DD3E3] hover:bg-cyan-500 font-medium lg:text-2xl lg:px-14 py-3 px-4 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)] lg:w-44"
                >
                  {t('Login')}
                </button>
              </Link>
              <button
                type="submit"
                className="border-[#2DD3E3] hover:bg-[#2DD3E3] broder-solid border-2   font-medium lg:text-2xl lg:px-14 px-4 py-3 rounded-md "
              >
                {t('Signup')}
              </button>
            </div>
          </form>
        </div>
        <div>
          <div className="flex justify-center my-6">
            <img src={Line} alt="A line" />
            <p className="mx-5">{t('OR')}</p>
            <img src={Line} alt="A line" />
          </div>
          <div className="flex justify-center my-6 gap-x-12">
            <button
              type="button"
              style={{ height: 32, width: 32 }}
              onClick={() => {
                dispatch(loginUserWithGoogle());
                navigate('/');
              }}
            >
              <img src={googleicon} alt="Google Icon" />{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Singup;
