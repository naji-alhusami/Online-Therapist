import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { addContactDetails } from '../../features/contact/contactSlice';

import ContactUs from '../Images/ContactUs.png';

const Options = [
  'I have a question about the service.',
  "I'm a registered client and I need support.",
  "I'm a counselor interested in joining.",
  "I'm a registered counselor and I need support.",
  'I have a business-related inquiry.',
  "I'm interested in Healing Online for my organization.",
  'I have a billing related question.',
];

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [contactData, setContactData] = useState({
    contactType: '',
    fullName: '',
    email: '',
    details: '',
  });
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleContactTypeOption = (event) => {
    setContactData({ ...contactData, contactType: event.target.value });
  };

  const handleContactValues = (event) => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      contactData.fullName === '' ||
      contactData.email === '' ||
      contactData.details === '' ||
      contactData.contactType === ''
    ) {
      setError('This field is required');
      return;
    }

    // Email Validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(contactData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setError('');
    dispatch(
      addContactDetails({
        contactType: contactData.contactType,
        fullName: contactData.fullName,
        email: contactData.email,
        details: contactData.details,
      })
    );

    const thanksData = {
      paragraphOne:
        'Your request has been sent, a member of the support team will get in contact',
      paragraphTwo:
        'with you through the email you provided as soon as possible.',
      link: '/',
      page: 'Home',
    };

    navigate('/thanks', { state: thanksData });
  };

  return (
    <div className="m-12">
      <div style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h1 className="my-4 text-3xl"> {t('SEND US YOUR REQUEST!')}</h1>
        <p className="text-stone-500">
          {' '}
          {t(
            'Do you have a question, concern, idea, feedback, or problem?  If you need assistance, please fill out the form below and we would be happy to help!'
          )}
        </p>
      </div>
      <div className="flex flex-col lg:flex lg:flex-row my-10">
        <form className="mb-20 flex-1" onSubmit={handleSubmit}>
          <p className="font-semibold mb-4 text-2xl">
            {t('Type of Contact:')}
          </p>
          <div className="flex flex-col gap-4">
            {Options.map((option) => (
              <div className="flex flex-row" key={option}>
                <label>
                  <input
                    type="radio"
                    className="mr-2"
                    name="selectedOption"
                    value={option}
                    checked={contactData.contactType === option}
                    onChange={handleContactTypeOption}
                  />
                  {t(option)}
                </label>
              </div>
            ))}
            <div className="mt-2">
              {error && <p className="text-red-600">{error}</p>}
            </div>
          </div>

          {/* Full Name */}
          <div className="flex flex-col mt-8">
            <div className="flex flex-col">
              <p className="font-semibold mb-2 ">{t('Full Name:')}</p>
              <input
                type="text"
                name="fullName"
                onChange={handleContactValues}
                className="w-[20rem] lg:w-[30rem] h-[2.5rem] bg-white border text-gray-800 shadow-lg rounded-md p-1"
                placeholder={t('Enter Your Full Name Here...')}
              />
            </div>
            <div className="mt-2">
              {error && <p className="text-red-600">{error}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col mt-8">
            <div className="flex flex-col mr-5">
              <p className="font-semibold mb-2">{t('Email')}:</p>
              <input
                type="text"
                name="email"
                onChange={handleContactValues}
                className="w-[20rem] lg:w-[30rem] h-[2.5rem] bg-white border text-gray-800 shadow-lg rounded-md p-1"
                placeholder={t('Enter Your Email Here...')}
              />
            </div>
            <div className="mt-2">
              {error && <p className="text-red-600">{error}</p>}
            </div>
            <div className="mt-2">
              {emailError && <p className="text-red-600">{emailError}</p>}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col mt-8">
            <div className="flex flex-col mr-5">
              <p className="font-semibold mb-2">{t('Details')}:</p>
              <textarea
                name="details"
                onChange={handleContactValues}
                placeholder={t('Enter Your Details Here...')}
                className="h-[15rem] w-[20rem] lg:w-[30rem] border shadow-lg rounded-lg p-2"
              />
            </div>
            <div className="mt-2">
              {error && <p className="text-red-600">{error}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="my-8 lg:text-xl md:text-1xl rounded-md box-border p-2 transition-all duration-250 text-bold bg-cyan-400 hover:bg-cyan-500 hover:text-white"
          >
            {t('SUBMIT')}
          </button>
        </form>

        <div className="flex-1">
          <img src={ContactUs} alt="contact" className=" pl-5 lg:w-8/12" />
          <div className="bg-cyan-50 w-[20rem] rounded-3xl items-center mx-6 my-20  ">
            <div className=" text-l p-6 pb-10">
              <p className="mb-4 text-2xl">{t('Find Us At:')} </p>
              <p className="text-slate-500 text-xl">Fatih/İstanbul</p>
              <p className="text-slate-500 text-xl">Sultan Ahmet</p>
              <p className="text-slate-500 text-xl">Ayasofya Meydanı</p>
              <p className="text-slate-500 text-xl">No:1 </p>
              <p className="text-slate-500 text-xl"> 34122</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
