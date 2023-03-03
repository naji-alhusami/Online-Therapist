import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Subscribe from '../Images/Subscribe.svg';
import FacebookLogo from '../Images/FacebookLogo.svg';
import TwitterLogo from '../Images/TwitterLogo.svg';
import GoogleLogo from '../Images/GoogleLogo.svg';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-amber-200 bottom-0 w-full p-4 md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm ">
        <div className="flex items-center flex-col  lg:items-start lg:ml-16">
          <h1 className=" text-BlackTexts text-4xl font-medium h-[44px]">
            {t('Subscribe')}
          </h1>
          <p
            className=" text-SubTexts mb-12 
              w-auto h-[22px] top-[56px] mt-2
              font-normal md:text-xl sm:text-sm leading-5"
          >
            {t('We will never spam to you or share your email')}
          </p>

          <div className=" md:flex ">
            <div className="flex flex-row mb-4 w-[300px] h-[50px] box-border rounded-lg border-2 border-[#718096]">
              <form
                // ref={form}
                className="w-full"
                // onSubmit={formik.handleSubmit}
              >
                <div>
                  <input
                    name="email"
                    id="email"
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    className=" w-full h-[46.5px] rounded-l-lg text-SubTexts text-black-800 placeholder:pl-2 placeholder:text-base"
                    type="text"
                    placeholder={t('Enter Your E-Mail')}
                  />
                </div>
              </form>
              <button
                // onClick={handleFormSubmit}
                type="button"
                className="bg-teal-500 rounded-r-lg w-[74px] h-[47.5px]"
              >
                <img
                  className="w-[24px] h-[24px] top-[18px] left-[310px] items-center mx-auto"
                  src={Subscribe}
                  alt="Arrow"
                />
              </button>
            </div>
          </div>
        </div>
      </span>
      <div
        className="flex flex-col items-center sm:mr-12
                
               text-SubTexts font-normal text-xl leading-5 tracking-[0.075px]"
      >
        <ul className="flex p-4 items-center sm:text-center mt-3 sm:mt-0 md:space-x-6">
          <Link to="/">
            <li>
              <a href="Home" className="mr-4 hover:underline md:mr-6 ">
                {t('Home')}
              </a>
            </li>
          </Link>
          <Link to="blog">
            <li>
              <a href="Blogs" className="mr-4 hover:underline md:mr-6">
                {t('Blogs')}
              </a>
            </li>
          </Link>
          <Link className="mr-4 hover:underline md:mr-6" to="/about">
            <li>{t('About')}</li>
          </Link>
          <Link to="contactus">
            <li>
              <a href="Contact" className="mr-4 hover:underline md:mr-6">
                {t('Contact')}
              </a>
            </li>
          </Link>
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
