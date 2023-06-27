import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import LoginWithUserPassword from './LoginWithUserPassword';
import LoginSofa from '../Images/LoginSofa.svg';

function Login() {
  window.scrollTo(0, 0);

  const userLogin = useSelector((state) => state.users);
  const location = useLocation();
  const stateLogin = location.state;

  if (userLogin.userlogin)
    return <Navigate to={{ pathname: stateLogin?.from?.pathname || '/' }} />;

  return (
    <div className="mx-5 mt-10 flex flex-col items-center md:flex md:flex-row lg:flex lg:flex-row lg:justify-center">
      <img
        src={LoginSofa}
        alt="Login"
        className="my-20 mr-5 md:w-[30rem] md:h-[30rem] md:order-last md:ml-5 lg:mx-20"
      />
      <LoginWithUserPassword />
    </div>
  );
}
export default Login;
