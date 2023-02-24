import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AiFillCaretDown } from 'react-icons/ai';
import LanguageButton from './LanguageButton';
import Logo from '../Images/Logo.svg';

const Navbar = () => {
  const { t } = useTranslation();
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-cyan-50 shadow font-poppins">
      <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8">
        <div className="flex items-center md:block">
          <Link to="/">
            <div className="flex flex-row items-center">
              <img src={Logo} alt="logo" className=" h-9 w-9 mt-2 ml-6" />
              <h2 className="text-3xl text-bold m-4 ml-3 font-medium">
                Healing
              </h2>
            </div>
          </Link>

          <div className="ml-auto md:hidden">
            <button
              type="button"
              className="p-2 text-gray-700 rounded-md outline-none  focus:border-gray-400 focus:border"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              {showNavbar ? (
                <svg
                  className="w-6 h-6 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <Link to="/">
              <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
                <a href="Home">{t('Home')}</a>
              </li>
            </Link>
            <Link to="blog">
              <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
                <a href="Blog">{t('Blog')}</a>
              </li>
            </Link>
            <li className="hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md cursor-pointer ">
              <div className=" relative  absolute">
                <button
                  type="button"
                  className="flex peer text-black hover:text-indigo-100 p-2"
                >
                  About
                <AiFillCaretDown className=" mt-1 ml-2" />
                </button>
                <div className="hidden absolute peer-hover:flex hover:flex w-[100px] flex-col bg-white drop-shadow-lg">
                  <a className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100" href="About">
                    About Us
                  </a>
                  <a className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100" href="Team">
                    Our Team
                  </a>
                  <a className="p-2 text-black hover:bg-cyan-400 hover:text-indigo-100" href="Careers">
                    Careers
                  </a>
                </div>
              </div>
            </li>
            <Link to="contactus">
              <li className=" p-2 hover:text-indigo-100 hover:bg-cyan-400 hover:rounded-md">
                <a href="Contact">{t('Contact Us')}</a>
              </li>
            </Link>
            <Link to="login">
              <button
                type="button"
                className="flex justify-center px-4 py-2 text-center rounded-md shadowtransition-all duration-250 bg-cyan-400 hover:bg-cyan-500 text-m"
              >
                {t('Login')}
              </button>
            </Link>
            <LanguageButton />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
