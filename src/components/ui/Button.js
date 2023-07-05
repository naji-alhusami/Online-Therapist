import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTicketsNumber } from '../../features/tickets/ticketsSlice';

const Button = ({ button, disabled, ticket }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.users);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleError = () => {
    if (userLogin.userlogin) {
      navigate('/');
    } else {
      setIsError(true);
    }

    if (ticket) {
      dispatch(getTicketsNumber({ ticket }));

      const thanksData = {
        paragraphOne: 'Your Purchase Has Been Submitted,',
        paragraphTwo: 'Your Tickets Have Been Added To Your Profile.',
        link: '/',
        page: 'Home',
      };

      navigate('/thanks', { state: thanksData });
    }
  };

  if (isError) {
    return navigate('/homeError');
  }
  return disabled ? (
    <button
      onClick={handleError}
      type="button"
      className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl"
    >
      {button}
    </button>
  ) : (
    <button
      disabled={!disabled}
      onClick={handleError}
      type="button"
      className="flex flex-col justify-start w-fit text-md rounded-md box-border py-2 px-6 transition-all duration-250 bg-gray-400 md:text-2xl"
    >
      {button}
    </button>
  );
};

export default Button;
