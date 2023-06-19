import React from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

const AddCards = () => {
  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const supportedCardClass =
    'w-full border border-cyan-400 px-5 text-center';
  const supportedCardTextClass =
    'mt-1 mb-2 whitespace-wrap md:text-base lg:text-lg text-cyan-500';

  return (
    <div className=" m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        ADD CARD DETAILS
      </h1>
      <p className=" w-auto">
        Please make sure all of the info you enter are the same as your card
        registration info.
      </p>
      <div className="flex flex-col mt-28 ">
        <form>
          {/* Supported Card Types */}
          <div className="flex flex-col mb-5">
            <label className=" text-gray-400 text-xl">
              Supported Card Types
            </label>
            <div className="flex mt-1">
              <div
                className={clsx(
                  `${supportedCardClass} rounded-e-none`
                    // cardTypeClass === 'visa' && 'bg-cyan'
                )}
              >
                <span
                  className={clsx(
                    `${supportedCardTextClass}`
                    // cardTypeClass === 'visa' && 'text-white'
                  )}
                >
                  Visa
                </span>
              </div>
              <div
                className={clsx(
                  `${supportedCardClass} rounded-s-none`
                  //   cardTypeClass === 'mastercard' && 'bg-cyan'
                )}
              >
                <span
                  className={clsx(
                    `${supportedCardTextClass}`
                    // cardTypeClass === 'mastercard' && 'text-white'
                  )}
                >
                  Mastercard
                </span>
              </div>
            </div>
          </div>

          {/* Name On Card */}
          <div className="flex flex-col mb-5">
            <label className="mr-[6.8rem] text-gray-400 text-xl">
              Name On Card
            </label>
            <input
              placeholder="Irene Ramos"
              {...register('fullName', {
                required: 'Please Enter Your Full Name',
                maxLength: {
                  value: 25,
                  message: 'Full Name should not exceed 25 characters',
                },
              })}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              type="text"
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1 lg:w-[16rem]"
            />
            <div className="mt-2">
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          {/* ZIP Code */}
          <div className="flex flex-col mb-5">
            <label className="mr-[6.8rem] text-gray-400 text-xl">
              ZIP Code
            </label>
            <input
              placeholder="17121-1300"
              {...register('fullName', {
                required: 'Please Enter Your Full Name',
                maxLength: {
                  value: 25,
                  message: 'Full Name should not exceed 25 characters',
                },
              })}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              type="text"
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1 lg:w-[16rem]"
            />
            <div className="mt-2">
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col mb-5">
            <label className="mr-[6.8rem] text-gray-400 text-xl">Address</label>
            <input
              placeholder="509 Adele Mills Suite 833"
              {...register('fullName', {
                required: 'Please Enter Your Full Name',
                maxLength: {
                  value: 25,
                  message: 'Full Name should not exceed 25 characters',
                },
              })}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              type="text"
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1 lg:w-[16rem]"
            />
            <div className="mt-2">
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName.message}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCards;
