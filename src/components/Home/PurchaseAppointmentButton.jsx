import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PurchaseAppointmentButton = ({ button }) => {
  console.log(button);
  const userLogin = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (userLogin.userlogin) {
      navigate('/');
    } else {
      setIsError(true);
    }
  };

  if (isError) {
    return navigate('/homeError');
  }
  return (
    <div>
      {button === 'PURCHASE' ? (
        <button
          type="button"
          className="font-poppins rounded-md box-border p-2 mb-4 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500"
        >
          {button}
        </button>
      ) : (
        <button
          onClick={handleError}
          type="button"
          className="flex flex-col justify-start w-fit text-md mb-8 rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl"
        >
          BOOK AN APPOINTMENT
        </button>
      )}
    </div>
  );
};

export default PurchaseAppointmentButton;
