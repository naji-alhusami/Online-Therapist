import React from 'react';

import LoginWithUserPassword from './LoginWithUserPassword';
import LoginSofa from '../Images/LoginSofa.svg';

function Login() {
  window.scrollTo(0, 0);

  return (
    <div className="h-full flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20">
    <LoginWithUserPassword />
    <img src={LoginSofa} alt="Login" className="max-[767px]:my-10 md:my-10 w-5/12" />
  </div>

  );
}
export default Login;
