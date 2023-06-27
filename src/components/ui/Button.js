import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Button = ({ button }) => {
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
    <button
      onClick={handleError}
      type="button"
      className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl"
    >
      {button}
    </button>
  );
};

export default Button;
