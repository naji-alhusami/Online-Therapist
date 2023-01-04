import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupUser } from '../features/users/usersSlice';
import LoginwithGoogle from "./login/LoginwithGoogle";


const SignupForm = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  return (
    <div className="h-screen flex justify-center content-center md:flex-wrap max-[767px]:flex-wrap gap-x-20">
      <h2 className='text-5xl font-["Poppins"] font-normal mb-32 max-[767px]:mt-20 md:mt-20 max-[767px]:mb-10 md:mb-10'>
        SIGNUP NOW
      </h2>
      <form
        className="grid grid-rows-3 gap-4 shadow-2xl px-10 py-10 w-[555px] h-[493]"
        onSubmit={handleSubmit((userData) => {
          console.log(userData);
          // if (userData.password !== userData.passwordConfirmation) {
          //   return;
          // }
          dispatch(signupUser({password: userData.password, email: userData.email}));
        })}
      >
        <div className="flex gap-x-7">
          <input
            {...register('firstName')}
            type="text"
            placeholder="First Name"
            className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            {...register('lastName')}
            type="text"
            placeholder="Last Name"
            className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
        </div>
        <input
          {...register('email')}
          type="text"
          placeholder="Your Email"
          className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
        />
        <input
          {...register('emailConfirmation')}
          type="text"
          placeholder="Confirm email"
          className="h-14 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
        />
        <div>
          <input
            {...register('password')}
            type="password"
            placeholder="Password"
            className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            {...register('passwordConfirmation')}
            type="password"
            placeholder="Confirm password"
            className="h-14 w-56 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="mr-7 ml-7 font-light text-[#9DAFBD]">Birth Date</p>
          <input
            {...register('birthdayDay')}
            type="text"
            placeholder="DD"
            className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            {...register('birthdayMonth')}
            type="text"
            placeholder="MM "
            className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md placeholder-gray-300"
          />
          <input
            {...register('birthdayYear')}
            type="text"
            placeholder="YYYY"
            className="h-14 w-12 broder-solid border-2 border-[#D1DBE3] rounded-md w-36 placeholder-gray-300"
          />
        </div>
        <div className="flex justify-around py-3 gap-8">
          <Link to="/login">
            <button
              type="submit"
              className="broder-solid border-2 border-[#2DD3E3] font-medium text-2xl px-14 rounded-md"
            >
              Login
            </button>
          </Link>
          <button
            type="submit"
            className="bg-[#2DD3E3] font-medium text-2xl px-14 py-3 rounded-md shadow-[0px_7px_20px_rgba(0,0,0,0.2)]"
          >
            Signup
          </button>

        </div>
      <LoginwithGoogle />
      </form>
    </div>
  );
};

export default SignupForm;
