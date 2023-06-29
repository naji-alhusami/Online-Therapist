import React, { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';

import { useDispatch } from 'react-redux';
import getCitiesOfCountry from './City';
import {
  getAllCountries,
  // getCountryByCode
} from './Country';
// import Button from '../ui/Button';
import { addCreditCard } from '../../features/cards/cardsSlice';

const AddCardForm = ({ values, setValues }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [cardType, setCardType] = useState(null);
  const [cardTypeClass, setCardTypeClass] = useState('');
  const [zipCode, setZIPCode] = useState('');
  const [isCardNumberValid, setCardNumberValid] = useState(false);

  const countries = getAllCountries().map((country) => ({
    id: uuidv4(),
    value: country.isoCode,
    label: country.name,
  }));

  const handleCountryChange = (event) => {
    const countryName = event.target.value;
    setSelectedCountry(countryName);
    const citiesOfCountry = getCitiesOfCountry(countryName).map((city) => ({
      id: uuidv4(),
      value: city.name,
      label: city.name,
    }));
    setCities(citiesOfCountry);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const cardNumberData = watch('number');

  useEffect(() => {
    if (!cardNumberData) {
      setCardType(<BsFillCreditCardFill />);
      setCardTypeClass('');
      return;
    }
    if (cardNumberData.startsWith('4')) {
      setCardType(<FaCcVisa />);
      setCardTypeClass('visa');
    } else if (cardNumberData.startsWith('5')) {
      setCardType(<FaCcMastercard />);
      setCardTypeClass('mastercard');
    } else {
      setCardType(<BsFillCreditCardFill />);
      setCardTypeClass('');
    }
  }, [cardNumberData]);

  const cvvCodeFormat = (event) => {
    const inputVal = event.target.value.replace(/ /g, ''); // remove all the empty spaces in the input
    const inputNumbersOnly = inputVal.replace(/\D/g, ''); // Get only digits
    setValues((prevCardValues) => ({
      ...prevCardValues,
      cvc: inputNumbersOnly,
    }));
  };

  const handleFocus = (event) => {
    setValues((prevCardValues) => ({
      ...prevCardValues,
      focus: event.target.name,
    }));
  };

  const handleCardNameChange = (event) => {
    const inputVal = event.target.value;
    setValues((prevCardValues) => ({
      ...prevCardValues,
      name: inputVal,
    }));
  };

  const zipCodeFormat = (event) => {
    const inputVal = event.target.value.replace(/ /g, ''); // remove all the empty spaces in the input
    const inputNumbersOnly = inputVal.replace(/\D/g, ''); // Get only digits
    setZIPCode(inputNumbersOnly);
  };

  const formatAndSetCardNumber = (event) => {
    const inputVal = event.target.value.replace(/ /g, ''); // remove all the empty spaces in the input
    let inputNumbersOnly = inputVal.replace(/\D/g, ''); // Get only digits

    if (inputNumbersOnly.length > 16) {
      // If entered value has a length greater than 16 then take only the first 16 digits
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    // Get nd array of 4 digits per an element
    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = '';
    if (splits) {
      spacedNumber = splits.join(' '); // Join all the splits with an empty space
    }

    setValues((prevCardValues) => ({
      ...prevCardValues,
      number: spacedNumber,
    }));
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
      spacedNumber = inputNumbersOnly.replace(
        /(\d{2})(\d{2})$/,
        (match, beforeSlash, afterSlash) => {
          const currentMonth = new Date().getMonth() + 1;
          const currentYear = new Date().getFullYear();
          const beforeSlashNumber = Math.max(
            parseInt(beforeSlash, 10),
            currentMonth
          );
          const afterSlashNumber = Math.min(
            parseInt(afterSlash, 10),
            currentYear
          );
          return `${beforeSlashNumber
            .toString()
            .padStart(2, '0')}/${afterSlashNumber.toString().padStart(2, '0')}`;
        }
      );
    } else {
      spacedNumber = inputNumbersOnly;
    }

    setValues((prevCardValues) => ({
      ...prevCardValues,
      expiration: spacedNumber,
    }));
  };

  const dispatch = useDispatch();
  const onSubmitForm = (cardData) => {
    console.log(cardData);
    console.log('clicked');

    dispatch(
      addCreditCard({
        name: cardData.name,
        number: cardData.number,
        expiration: cardData.expiration,
        cvc: cardData.cvc,
      })
    );
  };

  const supportedCardClass = 'w-full border border-cyan-400 px-5 text-center';
  const supportedCardTextClass =
    'mt-1 mb-2 whitespace-wrap md:text-base lg:text-lg text-cyan-500';

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div className="flex flex-col mt-16 lg:flex lg:flex-row   ">
        {/* Start first div from Supported Card Types to Name On Card */}
        {/* Supported Card Types */}
        <div className="flex flex-col lg:mr-2 xl:mr-10">
          <div className="flex flex-col mb-10">
            <label className=" text-gray-400 text-xl">
              Supported Card Types
            </label>
            <div className="flex mt-1">
              <div
                className={clsx(
                  `${supportedCardClass} rounded-e-none`,
                  cardTypeClass === 'visa' && 'bg-cyan-400'
                )}
              >
                <span
                  className={clsx(
                    `${supportedCardTextClass}`,
                    cardTypeClass === 'visa' && 'text-white'
                  )}
                >
                  Visa
                </span>
              </div>
              <div
                className={clsx(
                  `${supportedCardClass} rounded-s-none`,
                  cardTypeClass === 'mastercard' && 'bg-cyan-400'
                )}
              >
                <span
                  className={clsx(
                    `${supportedCardTextClass}`,
                    cardTypeClass === 'mastercard' && 'text-white'
                  )}
                >
                  Mastercard
                </span>
              </div>
            </div>
          </div>

          {/* Card Number */}
          <div className="relative flex flex-col mb-10">
            <label className=" text-gray-400 text-xl">Card Number</label>
            <div className="relative">
              <input
                {...register('number', {
                  onChange: (event) => {
                    formatAndSetCardNumber(event);
                    setCardNumberValid(event.target.validity.valid);
                  },
                  validate: (value) => {
                    if (!value.startsWith('4') && !value.startsWith('5')) {
                      return 'Card Number Is Not Supported';
                    }
                    if (value.length < 19) {
                      return 'Card Number Is Not Valid';
                    }
                    return null;
                  },
                })}
                aria-invalid={
                  errors.number || !isCardNumberValid ? 'true' : 'false'
                }
                type="text"
                placeholder="4287 8874 9511 3263"
                value={values.number}
                onFocus={handleFocus}
                className={`w-full bg-white border ${
                  errors.number ? 'border-red-500' : 'border-grayish-cyan'
                } h-10 shadow-lg rounded-md p-1`}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {cardType}
              </span>
            </div>
            <div className="mt-2 ">
              {errors.number && (
                <p className="text-red-600">{errors.number.message}</p>
              )}
            </div>
          </div>

          {/* Expiry Date */}
          <div className="flex flex-row w-full ">
            <div className="w-full flex flex-col mb-10 mr-5">
              <label className=" text-gray-400 text-xl">Expiry Date</label>
              <input
                {...register('expiration', {
                  required: 'Please Enter Expiration',
                })}
                aria-invalid={errors.expiration ? 'true' : 'false'}
                type="text"
                placeholder="MM/YYYY"
                value={values.expiration}
                onChange={formatAndSetExpiryDate}
                onFocus={handleFocus}
                className={`w-full bg-white border ${
                  errors.expiration ? 'border-red-500' : 'border-grayish-cyan'
                } text-grayish-cyan h-10 shadow-lg rounded-md p-1`}
              />

              <div className="mt-2 ">
                {errors.expiration && (
                  <p className="text-red-600">{errors.expiration.message}</p>
                )}
              </div>
            </div>

            {/* CVC Code */}
            <div className="relative w-full flex flex-col mb-10">
              <label className="text-gray-400 text-xl">CVC Code</label>
              <input
                {...register('cvc', {
                  required: 'Please Enter CVC Code',
                })}
                aria-invalid={errors.cvc ? 'true' : 'false'}
                placeholder="***"
                type="tel"
                maxLength="3"
                value={values.cvc}
                onChange={cvvCodeFormat}
                onFocus={handleFocus}
                className={`w-full bg-white border ${
                  errors.cvc ? 'border-red-500' : 'border-grayish-cyan'
                } text-grayish-cyan h-10 shadow-lg rounded-md p-1`}
              />
              <div className="mt-2 ">
                {errors.cvc && (
                  <p className="text-red-600">{errors.cvc.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Name On Card */}
          <div className="flex flex-col mb-10">
            <label className=" text-gray-400 text-xl">Name On Card</label>
            <input
              {...register('name', {
                required: 'Please Enter Your Full Name',
                maxLength: {
                  value: 25,
                  message: 'Full Name Should Not Exceed 25 Characters',
                },
              })}
              aria-invalid={errors.name ? 'true' : 'false'}
              placeholder="Irene Ramos"
              onChange={handleCardNameChange}
              value={values.name}
              onFocus={handleFocus}
              type="text"
              className={`bg-white border ${
                errors.name ? 'border-red-500' : 'border-grayish-cyan'
              } text-grayish-cyan h-10 shadow-lg rounded-md p-1 `}
            />
            <div className="mt-2">
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* finish first div from Supported Card Types to Name On Card */}

        <div className="flex flex-col">
          {/* Country */}
          <div className="flex flex-col mb-[1.6rem]">
            <label className="mr-[6.8rem] text-gray-400 text-xl">Country</label>
            <select
              {...register('country', {
                required: 'Please Select Your Country',
              })}
              value={selectedCountry}
              onChange={(e) => {
                handleCountryChange(e);
              }}
              aria-invalid={errors.country ? 'true' : 'false'}
              type="text"
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
            >
              {countries.map((item) => {
                return (
                  <option key={item.id} value={item.value}>
                    {item.label}
                  </option>
                );
              })}
            </select>
            <div className="mt-2">
              {errors.country && (
                <p className="text-red-600">{errors.country.message}</p>
              )}
            </div>
          </div>

          {/* ZIP Code */}
          <div className="flex flex-col mb-10">
            <label className="mr-[6.8rem] text-gray-400 text-xl">
              ZIP Code
            </label>
            <input
              {...register('zipCode', {
                required: 'Please Enter Your ZIP Code',
              })}
              aria-invalid={errors.zipCode ? 'true' : 'false'}
              placeholder="17121-1300"
              type="text"
              value={zipCode}
              onChange={zipCodeFormat}
              maxLength="10"
              className={`bg-white border ${
                errors.zipCode ? 'border-red-500' : 'border-grayish-cyan'
              } text-grayish-cyan h-10 shadow-lg rounded-md p-1`}
            />
            <div className="mt-2">
              {errors.zipCode && (
                <p className="text-red-600">{errors.zipCode.message}</p>
              )}
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col mb-10">
            <label className="mr-[6.8rem] text-gray-400 text-xl">City</label>
            <select
              {...register('city', {
                required: 'Please Select Your City',
              })}
              aria-invalid={errors.city ? 'true' : 'false'}
              type="text"
              className={`bg-white border ${
                errors.city ? 'border-red-500' : 'border-grayish-cyan'
              } text-grayish-cyan h-10 shadow-lg rounded-md p-1 `}
            >
              {cities.map((item) => {
                return (
                  <option key={item.id} value={item.value}>
                    {item.value}
                  </option>
                );
              })}
            </select>
            <div className="mt-2">
              {errors.city && (
                <p className="text-red-600">{errors.city.message}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col mb-10">
            <label className="mr-[6.8rem] text-gray-400 text-xl">Address</label>
            <input
              {...register('address', {
                required: 'Please Enter Your Address',
                maxLength: {
                  value: 30,
                  message: 'Address should not exceed 30 characters',
                },
              })}
              aria-invalid={errors.address ? 'true' : 'false'}
              type="text"
              placeholder="509 Adele Mills Suite 833"
              maxLength="30"
              className={`bg-white border ${
                errors.address ? 'border-red-500' : 'border-grayish-cyan'
              } text-grayish-cyan h-10 shadow-lg rounded-md p-1`}
            />
            <div className="mt-2">
              {errors.address && (
                <p className="text-red-600">{errors.address.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Button button="Add Card" /> */}
      <button
        type="submit"
        className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl"
      >
        Add Card
      </button>
    </form>
  );
};

export default AddCardForm;
