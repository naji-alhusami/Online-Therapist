import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
  updateProfile,
  deleteUserAccount,
  logoutUser,
} from '../../features/users/usersSlice';
import UpdateUserPicture from './UpdateUserPicture';

const UpdateUserInfo = ({ userInfo }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    fullName: userInfo.fullName || '',
    educationLevel: userInfo.educationLevel || '',
    hobbies: userInfo.hobbies || '',
    familySize: userInfo.familySize || '',
    gender: userInfo.gender || '',
    birthDate:
      userInfo.birthdayYear && userInfo.birthdayMonth && userInfo.birthdayDay
        ? `${userInfo.birthdayYear}-${userInfo.birthdayMonth}-${userInfo.birthdayDay}`
        : userInfo.birthDate || '',
    email: userInfo.email || '',
    phoneNumber: userInfo.phoneNumber || '',
    profilePicture: userInfo.profilePicture || '',
    password: userInfo.password || '',
    confirmPassword: userInfo.confirmPassword || '',
  });

  const [passwordState, setPasswordState] = useState({
    passwordInput: '',
    passwordError: '',
    passwordConfirmInput: '',
    passwordConfirmError: '',
    passwordMatchedError: '',
    passwordDataInfoError: '',
  });

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

  const navigate = useNavigate();

  const onSubmitForm = (userData) => {
    console.log(userInfo);
    console.log(userData);

    if (userData.password !== userInfo.password) {
      setPasswordState((prevState) => ({
        ...prevState,
        passwordDataInfoError:
          'Your Entered Password Should be the Same of your Signup Password',
      }));
    }

    dispatch(
      updateProfile({
        id: userInfo.id,
        fullName: userData.fullName,
        educationLevel: userData.educationLevel,
        hobbies: userData.hobbies,
        familySize: userData.familySize,
        gender: userData.gender,
        birthDate: userData.birthDate,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        profilePicture: userData.profilePicture,
        password: userInfo.password,
      })
    );

    const thanksData = {
      paragraphOne:
        'Your Update Profile Information request has been received.',
      paragraphTwo: '',
      link: '/',
      page: 'Home',
    };

    navigate('/thanks', { state: thanksData });
  };

  const handleDelete = () => {
    if (passwordState.passwordInput.trim() === '') {
      setPasswordState((prevState) => ({
        ...prevState,
        passwordError: 'Please Enter Your Password',
      }));
      return;
    }

    if (passwordState.passwordConfirmInput.trim() === '') {
      setPasswordState((prevState) => ({
        ...prevState,
        passwordConfirmError: 'Please Enter Your Password Confirmation',
      }));
      return;
    }

    if (
      passwordState.passwordInput.trim() ===
      passwordState.passwordConfirmInput.trim()
    ) {
      dispatch(deleteUserAccount({ id: userInfo.id }));
    } else {
      setPasswordState((prevState) => ({
        ...prevState,
        passwordMatchedError: 'Passwords Do Not Match',
      }));
      return;
    }

    const thanksData = {
      paragraphOne: 'Your Profile Has Been Deleted successfully.',
      paragraphTwo: '',
      link: '/',
      page: 'Home',
    };

    navigate('/thanks', { state: thanksData });
    dispatch(logoutUser());
  };

  return (
    <div>
      <div className="flex flex-col items-center md:flex md:flex-row md:items-start ">
        <UpdateUserPicture userProfilePicture={userInfo.profilePictureURL} />

        <form onSubmit={handleSubmit(onSubmitForm)}>
          <h1 className="text-4xl ml-5">
            <b>{t('PROFILE INFO')}</b>
          </h1>
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
                {errors.fullName && (
                  <p className="text-red-600">{errors.fullName.message}</p>
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
                  {...register('educationLevel', {
                    required: 'Please Select an Education Level',
                  })}
                  aria-invalid={errors.educationLevel ? 'true' : 'false'}
                  // defaultValue=""
                  value={state.educationLevel}
                  onChange={(event) =>
                    setState({ ...state, educationLevel: event.target.value })
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
                  <option value="Secondary education">
                    {t('High school')}
                  </option>
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
                {errors.educationLevel && (
                  <p className="text-red-600 ">
                    {errors.educationLevel.message}
                  </p>
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
                  {...register('hobbies', {
                    required: 'Hobbies Field is Required',
                    maxLength: {
                      value: 10,
                      message: 'Hobbies should not exceed 10 characters',
                    },
                  })}
                  aria-invalid={errors.hobbies ? 'true' : 'false'}
                  type="text"
                  value={state.hobbies}
                  onChange={(event) =>
                    setState({ ...state, hobbies: event.target.value })
                  }
                  className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
                />
              </div>
              <div className="mt-2">
                {errors.hobbies && (
                  <p className="text-red-600">{errors.hobbies.message}</p>
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
                  {...register('familySize', {
                    required: 'Family Size Field is Required',
                    validate: validateFamilySize,
                  })}
                  aria-invalid={errors.familySize ? 'true' : 'false'}
                  type="text"
                  value={state.familySize}
                  onChange={(event) =>
                    setState({ ...state, familySize: event.target.value })
                  }
                  className="bg-white border text-gray-800 shadow-lg rounded-md p-1 w-[20%] mr-5"
                />
                <p>Member(s)</p>
              </div>
              <div className="mt-2">
                {errors.familySize && (
                  <p className="text-red-600">{errors.familySize.message}</p>
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
                  {...register('gender', {
                    required: 'Please Select Gender',
                  })}
                  aria-invalid={errors.gender ? 'true' : 'false'}
                  // defaultValue=""
                  value={state.gender}
                  onChange={(event) =>
                    setState({ ...state, gender: event.target.value })
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
                {errors.gender && (
                  <p className="text-red-600">{errors.gender.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Birth Date */}
          <div className="flex flex-row justify-start items-center ml-6 mt-8">
            <p className="mr-[6.7rem]">{t('Birth Date')}</p>
            <input
              {...register('birthDate')}
              type="date"
              value={state.birthDate}
              onChange={(event) =>
                setState({ ...state, birthDate: event.target.value })
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
                  {...register('email', {
                    required: 'Email Address is Required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Invalid Email Address',
                    },
                  })}
                  aria-invalid={errors.email ? 'true' : 'false'}
                  type="text"
                  value={state.email}
                  onChange={(event) =>
                    setState({ ...state, email: event.target.value })
                  }
                  className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
                />
              </div>
              <div className="mt-2">
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
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
                  {...register('phoneNumber', {
                    required: 'Phone Number is Required',
                    validate: validatePhoneNumber,
                  })}
                  aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                  type="tel"
                  value={state.phoneNumber}
                  onChange={(event) =>
                    setState({ ...state, phoneNumber: event.target.value })
                  }
                  className="bg-white border text-gray-800 shadow-lg rounded-md p-1 lg:w-[16rem]"
                />
              </div>
              <div className="mt-2">
                {errors.phoneNumber && (
                  <p className="text-red-600">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Upload Profile Picture */}
          <div className="flex flex-row justify-start items-center ml-6 mt-8">
            <p className="mr-[1.3rem]">{t('Upload Profile Picture')}</p>
            <input
              {...register(
                'profilePicture'
                // , {
                //   required: 'Profile Picture is Required',
                // }
              )}
              className="bg-white border text-gray-800 shadow-lg rounded-md block p-1 w-[12rem] mr-5 lg:w-[16rem]"
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={(event) => {
                setState({
                  ...state,
                  profilePicture: event.target.files[0],
                });
              }}
            />
          </div>

          <h1 className="text-4xl ml-5 my-10">
            <b>{t('Security')}</b>
          </h1>
          <p className="text-xl ml-5 my-10 w-[24rem] lg:w-[30rem]">
            Please Enter Your Password In Order to Perform Actions (Update
            Account Or Delete Account)
          </p>
          {/* Password */}
          <div className="flex flex-row justify-start items-center ml-6 mt-8">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <p className="mr-[7rem]">{t('Password')}</p>
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
                  onChange={(event) => {
                    const password = event.target.value;
                    setState({ ...state, password });
                    setPasswordState((prevState) => ({
                      ...prevState,
                      passwordInput: password,
                      passwordError: password ? '' : prevState.passwordError,
                    }));
                  }}
                  type="password"
                  className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 p-1 w-auto lg:w-[16rem]"
                />
              </div>
              <div className="mt-2 w-[85%]">
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
                {passwordState.passwordError && (
                  <p className="text-red-600">{passwordState.passwordError}</p>
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
                  {...register('confirmPassword', {
                    required: 'Password Confirmation is Required',
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  })}
                  type="password"
                  value={state.confirmPassword}
                  onChange={(event) => {
                    const confirmPassword = event.target.value;
                    setState({ ...state, confirmPassword });
                    setPasswordState((prevState) => ({
                      ...prevState,
                      passwordConfirmInput: confirmPassword,
                      passwordConfirmError: confirmPassword
                        ? ''
                        : prevState.passwordConfirmError,
                      passwordMatchedError:
                        prevState.passwordConfirmInput ===
                        prevState.passwordInput
                          ? prevState.passwordMatchedError
                          : '',
                    }));
                  }}
                  className="bg-white border text-gray-800 shadow-lg rounded-md mr-5 p-1 w-auto lg:w-[16rem]"
                />
              </div>
              <div className="mt-2">
                {errors.confirmPassword && (
                  <p className="text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                )}
                {passwordState.passwordConfirmError && (
                  <p className="text-red-600">
                    {passwordState.passwordConfirmError}
                  </p>
                )}
                {passwordState.passwordMatchedError && (
                  <p className="text-red-600">
                    {passwordState.passwordMatchedError}
                  </p>
                )}
                {passwordState.passwordDataInfoError && (
                  <p className="text-red-600">
                    {passwordState.passwordDataInfoError}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row lg:gap-2 gap-3 ml-6 mt-8 md:mr-5">
            <button
              type="submit"
              className="lg:text-xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 text-bold bg-cyan-400 hover:bg-cyan-500 hover:text-white"
            >
              {t('SAVE CHANGES')}
            </button>
            <button
              type="button"
              className="lg:text-xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
              onClick={() => handleDelete()}
            >
              {t('DELETE ACCOUNT')}
            </button>
            <button
              type="button"
              className="lg:text-xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
              onClick={() => navigate('/')}
            >
              {t('CANCEL')}
            </button>
          </div>
          <div className="flex flex-col ml-6 mt-16">
            {/* Payment Methods & Tickets */}
            <h1 className="text-4xl my-5">
              <b>{t('Payment Methods & Tickets')}</b>
            </h1>

            <div className="flex flex-rows gap-10 mt-8 mb-16">
              <div className="flex flex-col ">
                <div className="lg:text-lg text-sm mb-2">
                  {t('3 Cards Added')}
                </div>
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
        </form>
      </div>
    </div>
  );
};

export default UpdateUserInfo;
