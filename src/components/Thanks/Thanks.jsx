import React from 'react';
import { Link } from "react-router-dom";

// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

function Thanks() {
  // const { t } = useTranslation();

  return (
    <div className="pl-[5rem] mt-[3rem] mb-5 ">
      <h1 className="pl-15 xl:w-72 text-5xl  md:w-50 md:text-4xl sm:w-30 sm:text-2xl uppercase">
        THANK YOU!
      </h1>
      <p className="xl:text-2xl xl:w-[50rem] md:w-[30rem]  sm:w-[20rem] p-[3rem] text-black text-opacity-50 ">
        Your Sign Up request has been received, you will soon receive a
        confirmation email.
      </p>
      <p className="xl:text-2xl xl:w-[50rem] md:w-[30rem]  sm:w-[20rem] p-[3rem] text-black text-opacity-50 ">
        Please follow the steps in the email to complete and activate your
        account.
      </p>

      <div className="lg:w-72 lg:h-14 md:w-45 md:h-10 sm:w-40 sm:h-7 mr-20  ">
        <div className="flex items-center justify-center flex-1 py-3  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white rounded-md">
          <Link to="/">
            <button
              type="button"
              className="text-md mb-8 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white md:text-2xl"
            >
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Thanks;
