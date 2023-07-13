import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';
import { db } from '../../firebase-config';

import SubscribeIconSend from '../Images/Subscribe.svg';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address!');
      return;
    }

    const subscribeId = uuidv4();

    const docRef = doc(db, 'subscribe', subscribeId);
    await setDoc(docRef, {
      userEmail: email,
    });

    const thanksData = {
      paragraphOne:
        'Your email has been added to the mailing list successfully!',
      paragraphTwo: '',
      link: '/',
      page: 'Home',
    };

    navigate('/thanks', { state: thanksData });
  };

  return (
    <div className="mt-8">
      <form>
        <div className="mt-2">
          {error && <p className="text-lg text-red-600">{error}</p>}
        </div>
        <div className="flex flex-row">
          <input
            className=" w-[15rem] h-[2.5rem] text-xl text-gray-500 bg-white border-2 text-left border-gray-500 "
            type="emailSubscribe"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t('Enter Your Email')}
          />
          <button
            className="  w-[3rem] h-[2.5rem] bg-[#2DD3E3] border-2  rounded-br-md border-gray-500 hover:bg-cyan-500 "
            type="submit"
            onClick={handleSubmit}
          >
            <img
              src={SubscribeIconSend}
              alt="sendicon"
              className="hover:img-white mx-auto w-[1.5rem]"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
