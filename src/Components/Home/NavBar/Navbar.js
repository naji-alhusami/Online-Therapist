import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../../features/users/usersSlice';
import Image from './Logo.svg';

function Navebar() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { userlogin } = useSelector((state) => state.users);

  const [isListOpen, setIsListOpen] = useState(false);
  const [profileList, setProfileList] = useState(false);
  // const [isLogin, setIsLogin] = useState(true);

  // const switchAuthModeHandler = () => {
  //   setIsLogin((prevState) => !prevState);
  // };

  const HandleLogin = (e) => {
    e.preventDefault();
    return Navigate('/login');
  };

  const HandleProfile = (e) => {
    e.preventDefault();
    return Navigate('/UpdateUserInfo');
  };

  const logOut = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    console.log('Text');
    // return Navigate('/');
  };

  const onclicklogo = () => {
    return Navigate('/');
  };

  const aboutList = (
    <div className="text-center bg-cyan-50  mr-1 mt-2 w-16 h-5">
      <button
        type="button"
        className="hover:text-orange-300"
        onMouseEnter={() => setIsListOpen(true)}
      >
        About
      </button>
      {isListOpen && (
        <ul onMouseLeave={() => setIsListOpen(false)}>
          <li>
            <button
              type="button"
              className="hover:text-orange-300  w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
              onClick={() => Navigate('/about')}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
              onClick={() => Navigate('/team')}
            >
              Our Team{' '}
            </button>
          </li>
          <li>
            <button
              type="button"
              className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
              onClick={() => Navigate('/careers')}
            >
              Careers{' '}
            </button>
          </li>
        </ul>
      )}
    </div>
  );

  // const logOutUser = (
  //   <div className="text-center bg-cyan-50  mr-1 mt-2 w-16 h-5">

  //   </div>
  // );

  return (
    <nav
      style={{ fontFamily: 'Poppins, sans-serif' }}
      className="bg-cyan-50 px-2 sm:px-4 py-2.5 rounded   "
    >
      <button type="submit" onClick={onclicklogo}>
        {' '}
        <img src={Image} alt="logo" className=" h-9 w-9 mt-2 ml-6" />
      </button>
      <Link to="/">
        {' '}
        <h1 className="absolute top-4 left-[5.5rem]  text-3xl">Healing</h1>{' '}
      </Link>

      <div className="absolute top-3.5 right-14 ">
        <div className="    flex justify-around text-l space-x-10">
          <Link to="/" className=" hover:text-orange-300 mr-4 mt-2">
            Home
          </Link>
          <Link to="/blog/1" className=" hover:text-orange-300 mr-2  mt-2">
            Blogs
          </Link>
          {aboutList}
          <a href="#Contact Us" className=" hover:text-orange-300 ml-2 mt-2">
            Contact Us
          </a>
          {!userlogin && (
            <button
              type="submit"
              onClick={HandleLogin}
              className=" md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white "
            >
              login
            </button>
          )}
          {userlogin && (
            <div className="text-center bg-cyan-50  mr-1 mt-2 w-16 h-5">
              <button
                type="button"
                className="md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white "
                onMouseEnter={() => setProfileList(true)}
              >
                Profile
              </button>
              {profileList && (
                <ul onMouseLeave={() => setProfileList(false)}>
                  <li>
                    <button
                      type="button"
                      className="hover:text-orange-300  w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
                      onClick={HandleProfile}
                    >
                      Profile
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="hover:text-orange-300 w-[7rem] block py-2 px-4 text-black-700 hover:bg-cyan-100 dark:hover:bg-gray-600"
                      onClick={logOut}
                    >
                      Log Out{' '}
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}
          {/* <button type="submit" onClick={HandleLogin} className=" md:text-lg ml-2  lg:px-6 rounded-md box-border  transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 translate-y-1 hover:text-white ">{userlogin ? userInfo.name :"login" }</button> */}
        </div>
      </div>
    </nav>
  );
}
export default Navebar;
