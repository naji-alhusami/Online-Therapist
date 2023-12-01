import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SubscribeForm from '../Subscribe/SubscribeForm';

import FacebookLogo from '../Images/FacebookLogo.svg';
import TwitterLogo from '../Images/TwitterLogo.svg';
import GoogleLogo from '../Images/GoogleLogo.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-amber-200 bottom-0 pt-4 md:flex md:items-center md:justify-between md:p-5 ">
      <span className="text-sm ">
        <div className="flex items-center flex-col  lg:items-start lg:ml-16">
          <h1 className=" text-BlackTexts text-4xl font-medium h-[44px]">
            {t('Subscribe')}
          </h1>
          <p
            className=" text-SubTexts 
              w-auto h-[22px] top-[56px] mt-2
              font-normal md:text-xl sm:text-sm leading-5"
          >
            {t('We will never spam to you or share your email')}
          </p>

          <SubscribeForm />
        </div>
      </span>
      <div className="flex flex-col items-center sm:mr-12 text-SubTexts font-normal text-xl leading-5 tracking-[0.075px]">
        <ul className="flex p-4 items-center sm:text-center mt-3 sm:mt-0 md:space-x-6">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6 ">
              {t('Home')}
            </Link>
          </li>
          <li>
            <Link to="/blog/1" className="mr-4 hover:underline md:mr-6">
              {t('Blogs')}
            </Link>
          </li>
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6">
              {t('About')}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mr-4 hover:underline md:mr-6">
              {t('Contact')}
            </Link>
          </li>
        </ul>
        <div
          className="flex flex-row w-[200px] h-[78px] 
            justify-center items-center mx-auto space-x-4"
        >
          <img
            className="cursor-pointer box-content px-2 py-2 rounded-lg hover:shadow-inner"
            src={TwitterLogo}
            alt="Twitter"
          />
          <img
            className="cursor-pointer box-content px-2 py-2 rounded-lg hover:shadow-inner"
            src={FacebookLogo}
            alt="Facebook"
          />
          <img
            className="cursor-pointer box-content px-2 py-2 rounded-lg hover:shadow-inner"
            src={GoogleLogo}
            alt="Google"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
