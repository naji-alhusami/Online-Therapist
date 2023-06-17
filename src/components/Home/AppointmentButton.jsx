import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AppointmentButton = () => {
  const userLogin = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleAppointmentError = () => {
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
    <button
      onClick={handleAppointmentError}
      type="button"
      className="text-md mb-8 rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl"
    >
      BOOK AN APPOINTMENT
    </button>
  );
};

export default AppointmentButton;
