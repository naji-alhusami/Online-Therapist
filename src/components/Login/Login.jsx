import React from 'react';

import LoginWithUserPassword from './LoginWithUserPassword';
import LoginSofa from '../Images/LoginSofa.svg';

function Login() {
  window.scrollTo(0, 0);

  return (
    <div className="mx-5 mt-10 flex flex-col items-center md:flex md:flex-row lg:flex lg:flex-row lg:justify-center">
      <img src={LoginSofa} alt="Login" className="my-20 mr-5 md:w-[30rem] md:h-[30rem] md:order-last md:ml-5 lg:mx-20" />
      <LoginWithUserPassword />
    </div>
  );
}
export default Login;
