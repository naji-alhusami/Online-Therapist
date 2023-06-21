import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';

import getCitiesOfCountry from './City';
import {
  getAllCountries,
  // getCountryByCode
} from './Country';
import Button from '../ui/Button';

const AddCardForm = ({ cardValues, setCardValues }) => {
  console.log(cardValues);
  //   const [cardNumber, setCardNumber] = useState('');
  //   const [expiryDate, setExpiryDate] = useState('');
  const [cities, setCities] = useState([]);
  const [cardType, setCardType] = useState(null);
  const [cardTypeClass, setCardTypeClass] = useState('');
  //   const [cvvCode, setCVVCode] = useState('');
  const [zipCode, setZIPCode] = useState('');
  const [isCardNumberValid, setCardNumberValid] = useState(false);

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
    watch,
    formState: { errors },
  } = useForm();

  const cardNumberData = watch('cardNumber');

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
    setCardValues((prevCardValues) => ({
      ...prevCardValues,
      cvc: inputNumbersOnly,
    }));
  };

  const handleCardNameChange = (event) => {
    const inputVal = event.target.value;
    setCardValues((prevCardValues) => ({
      ...prevCardValues,
      cardName: inputVal,
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

    setCardValues((prevCardValues) => ({
      ...prevCardValues,
      cardNumber: spacedNumber,
    }));
    // setCardNumber(spacedNumber); // Set the new CC number
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

    setCardValues((prevCardValues) => ({
      ...prevCardValues,
      expiryDate: spacedNumber,
    }));
    // setExpiryDate(spacedNumber); // Set the new expiry date
  };

  const supportedCardClass = 'w-full border border-cyan-400 px-5 text-center';
  const supportedCardTextClass =
    'mt-1 mb-2 whitespace-wrap md:text-base lg:text-lg text-cyan-500';

  return (
    <form>
      <div className="flex flex-col mt-16 lg:flex lg:flex-row lg:mr-12  ">
        {/* Start first div from Supported Card Types to Name On Card */}
        {/* Supported Card Types */}
        <div className="flex flex-col lg:mr-12">
          <div className="flex flex-col mb-5">
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
          <div className="relative flex flex-col mb-5">
            <label className="mr-[6.8rem] text-gray-400 text-xl">
              Card Number
            </label>
            <div className="relative">
              <input
                {...register('cardNumber', {
                  onChange: (event) => {
                    formatAndSetCardNumber(event);
                    setCardNumberValid(event.target.validity.valid);
                  },
                  validate: (value) => {
                    if (!value.startsWith('4') && !value.startsWith('5')) {
                      return 'cardNumberNotSupported';
                    }
                    if (value.length < 19) {
                      return 'cardNumberNotValid';
                    }
                    return null;
                  },
                })}
                aria-invalid={
                  errors.cardNumber || !isCardNumberValid ? 'true' : 'false'
                }
                type="text"
                placeholder="4287 8874 9511 3263"
                value={cardValues.cardNumber}
                className={`w-full bg-white border ${
                  errors.cardNumber || !isCardNumberValid
                    ? 'border-grayish-cyan'
                    : 'border-red-500'
                } h-10 shadow-lg rounded-md p-1`}
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {cardType}
              </span>
            </div>
            <div className="mt-2 ">
              {errors.cardNumber && (
                <p className="text-red-600">{errors.cardNumber.message}</p>
              )}
            </div>
          </div>

          {/* Expiry Date */}
          <div className="flex flex-row w-full">
            <div className="w-full flex flex-col mb-5 mr-5">
              <label className=" text-gray-400 text-xl">Expiry Date</label>
              <input
                {...register('expiryDate', {
                  required: 'Please Enter Your CVV Code',
                })}
                aria-invalid={errors.expiryDate ? 'true' : 'false'}
                type="text"
                placeholder="MM / YY"
                value={cardValues.expiryDate}
                onChange={formatAndSetExpiryDate}
                className="w-full bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
              />

              <div className="mt-2 ">
                {errors.expiryDate && (
                  <p className="text-red-600">{errors.expiryDate.message}</p>
                )}
              </div>
            </div>

            {/* CVV Code */}
            <div className="relative w-full flex flex-col mb-5">
              <label className=" text-gray-400 text-xl">CVV Code</label>
              <input
                {...register('CVVCode', {
                  required: 'Please Enter Your CVV Code',
                })}
                aria-invalid={errors.CVVCode ? 'true' : 'false'}
                placeholder="***"
                type="text"
                maxLength="3"
                value={cardValues.cvvCode}
                onChange={cvvCodeFormat}
                className="w-full bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
              />
              <div className="mt-2 ">
                {errors.CVVCode && (
                  <p className="text-red-600">{errors.CVVCode.message}</p>
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
              {...register('fullName', {
                required: 'Please Enter Your Full Name',
                maxLength: {
                  value: 25,
                  message: 'Full Name Should Not Exceed 25 Characters',
                },
              })}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              placeholder="Irene Ramos"
              onChange={handleCardNameChange}
              value={cardValues.cardName}
              type="text"
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1 "
            />
            <div className="mt-2">
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName.message}</p>
              )}
            </div>
          </div>
        </div>
        {/* finish first div from Supported Card Types to Name On Card */}

        <div className="flex flex-col">
          {/* Country */}
          <div className="flex flex-col mb-2">
            <label className="mr-[6.8rem] text-gray-400 text-xl">Country</label>
            <select
              {...register('country', {
                onChange: (e) => {
                  handleCountryChange(e);
                },
                required: 'Please Select Your Country',
              })}
              aria-invalid={errors.country ? 'true' : 'false'}
              placeholder="United States"
              type="text"
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1 "
            >
              {countries.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
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
          <div className="flex flex-col mb-5">
            <label className="mr-[6.8rem] text-gray-400 text-xl">
              ZIP Code
            </label>
            <input
              {...register('zipCode', {
                required: 'Please Enter Your Full Name',
              })}
              aria-invalid={errors.zipCode ? 'true' : 'false'}
              placeholder="17121-1300"
              type="text"
              value={zipCode}
              onChange={zipCodeFormat}
              maxLength="10"
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
            />
            <div className="mt-2">
              {errors.zipCode && (
                <p className="text-red-600">{errors.zipCode.message}</p>
              )}
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col mb-5">
            <label className="mr-[6.8rem] text-gray-400 text-xl">City</label>
            <select
              {...register('city', {
                required: 'Please Select Your City',
              })}
              aria-invalid={errors.city ? 'true' : 'false'}
              type="text"
              placeholder="California"
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1 "
            >
              {cities.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.label}
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
          <div className="flex flex-col mb-5">
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
              className="bg-white border text-grayish-cyan h-10 shadow-lg rounded-md p-1"
            />
            <div className="mt-2">
              {errors.address && (
                <p className="text-red-600">{errors.address.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Button button="Add Card" />
    </form>
  );
};

export default AddCardForm;
