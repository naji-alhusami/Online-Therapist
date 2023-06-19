import React, { useState } from 'react';

import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { BsFillCreditCardFill } from 'react-icons/bs';
// import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

import getCitiesOfCountry from './City';
import { getAllCountries, 
  // getCountryByCode 
} from './Country';

const AddCards = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cities, setCities] = useState([]);
  const countries = getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const handleCountryChange = (e) => {
    const countryName = e.target.value;
    const citiesOfCountry = getCitiesOfCountry(countryName).map((city) => ({
        value: city.name,
        label: city.name,
    }));
    setCities(citiesOfCountry);
};

  const {
    register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const formatAndSetCardNumber = (e) => {
    const inputVal = e.target.value.replace(/ /g, ''); // remove all the empty spaces in the input
    let inputNumbersOnly = inputVal.replace(/\D/g, ''); // Get only digits

    if (inputNumbersOnly.length > 16) {
      // If entered value has a length greater than 16 then take only the first 16 digits
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = '';
    if (splits) {
      spacedNumber = splits.join(' '); // Join all the splits with an empty space
    }

    setCardNumber(spacedNumber); // Set the new CC number
  };

  const formatAndSetExpiryDate = (e) => {
    const inputVal = e.target.value.replace(/ /g, ''); // remove all the empty spaces in the input
    let inputNumbersOnly = inputVal.replace(/\D/g, ''); // Get only digits

    // If entered value has a length greater than 4, take only the first 4 digits
    if (inputNumbersOnly.length > 4) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 4);
    }

    let spacedNumber = '';
    if (inputNumbersOnly.length > 2) {
      // Insert a slash (/) between each pair of numbers
      spacedNumber = inputNumbersOnly.replace(/(\d{2})(\d{2})$/, '$1 / $2');
    } else {
      spacedNumber = inputNumbersOnly;
    }

    setExpiryDate(spacedNumber); // Set the new expiry date
  };

  const supportedCardClass = 'w-full border border-cyan-400 px-5 text-center';
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

          {/* Card Number */}
          <div className="relative flex flex-col mb-5">
            <label className="mr-[6.8rem] text-gray-400 text-xl">
              Card Number
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="4287 8874 9511 3263"
                value={cardNumber}
                onChange={formatAndSetCardNumber}
                className="w-full bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <BsFillCreditCardFill className="text-gray-400 text-sm md:text-base lg:text-lg" />
              </span>
            </div>
            <div className="mt-2 ">
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          {/* Expiry Date */}
          <div className="flex flex-row w-full">
            <div className="w-full flex flex-col mb-5 mr-5">
              <label className=" text-gray-400 text-xl">Expiry Date</label>
              <input
                type="text"
                placeholder="MM / YY"
                value={expiryDate}
                onChange={formatAndSetExpiryDate}
                className="w-full bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
              />

              <div className="mt-2 ">
                {errors.fullName && (
                  <p className="text-red-600">{errors.fullName.message}</p>
                )}
              </div>
            </div>

            {/* CVV Code */}
            <div className="relative w-full flex flex-col mb-5">
              <label className=" text-gray-400 text-xl">CVV Code</label>
              <input
                type="text"
                placeholder="***"
                maxLength="3"
                className="w-full bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
              />
              <div className="mt-2 ">
                {errors.fullName && (
                  <p className="text-red-600">{errors.fullName.message}</p>
                )}
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
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1 "
            />
            <div className="mt-2">
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          {/* Country */}
          <div className="flex flex-col mb-5">
            <label className="mr-[6.8rem] text-gray-400 text-xl">Country</label>
            <select
              placeholder="United States"
              {...register('country', {
                onChange: (e) => {
                  handleCountryChange(e);
              },
                required: 'Please Enter Your Full Name',
                maxLength: {
                  value: 25,
                  message: 'Full Name should not exceed 25 characters',
                },
              })}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              type="text"
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1 "
            >
              {countries.map((item, key) => {
                return (
                  <option key={key.id} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
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
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
            />
            <div className="mt-2">
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col mb-5">
            <label className="mr-[6.8rem] text-gray-400 text-xl">City</label>
            <select
              placeholder="California"
              
              {...register('fullName', {
                required: 'Please Enter Your Full Name',
                maxLength: {
                  value: 25,
                  message: 'Full Name should not exceed 25 characters',
                },
              })}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              type="text"
              
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1 "
            >
              {cities.map((item, key) => {
                return (
                  <option key={key.id} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
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
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
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
