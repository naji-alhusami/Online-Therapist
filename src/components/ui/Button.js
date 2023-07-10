import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTicketsNumber } from '../../features/tickets/ticketsSlice';

const Button = ({
  button,
  disabled,
  ticket,
  // handleNextQuestion,
  // appointment,
  // appointmentConfirm,
}) => {
  const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.users);
  const tickets = useSelector((state) => state.tickets.ticketsNumber);
  console.log(tickets);
  const navigate = useNavigate();
  // const [isError, setIsError] = useState(false);

  const handlePurchase = () => {
    // if (userLogin.userlogin) {
    //   navigate('/');
    // } else {
    //   setIsError(true);
    // }

    if (ticket) {
      dispatch(addTicketsNumber({ ticket }));

      const thanksData = {
        paragraphOne: 'Your Purchase Has Been Submitted,',
        paragraphTwo: 'Your Tickets Have Been Added To Your Profile.',
        link: '/',
        page: 'Home',
      };

      navigate('/thanks', { state: thanksData });
    }
  };

  // if (isError) {
  //   return navigate('/homeError');
  // }

  // const handleClick = () => {
  //   handleError();
  //   if (tickets && tickets > 0) {
  //     navigate('/bookingFirst/1');
  //   }
  //   if (appointment || appointmentConfirm) {
  //     handleNextQuestion();
  //   }
  // };

  return disabled ? (
    <button
      onClick={handlePurchase}
      type="button"
      className="flex flex-col justify-start w-fit text-md  rounded-md box-border py-2 px-6 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 md:text-2xl hover:text-white"
    >
      {button}
    </button>
  ) : (
    <button
      disabled={!disabled}
      onClick={handlePurchase}
      type="button"
      className="flex flex-col justify-start w-fit text-md rounded-md box-border py-2 px-6 transition-all duration-250 bg-gray-400 md:text-2xl"
    >
      {button}
    </button>
  );
};

export default Button;
