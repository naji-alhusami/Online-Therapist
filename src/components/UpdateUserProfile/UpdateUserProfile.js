import React from 'react';
import { useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import { useTranslation } from 'react-i18next';

import UpdateUserInfo from './UpdateUserInfo';

const UpdateUserProfile = () => {
  const userLoading = useSelector((state) => state.users);
  const userInfo = useSelector((state) => state.users.user);
  const { t } = useTranslation();

  if (userLoading.loading) {
    return (
      <div
        className="flex justify-center items-center h-screen"
        style={{ minHeight: '100vh' }}
      >
        <ClipLoader
          color="#2DD3E3" // Customize the color of the spinner
          size={60} // Adjust the size of the spinner as desired
          loading={userLoading.loading}
        />
      </div>
    );
  }
  if (userLoading.userlogin) {
    return (
      <div className="flex flex-col font-poppins">
        <div className="text-center flex flex-col items-center">
          <p className=" text-sm text-[#FF0000] m-10">
            {t(
              'Please fill all the fields with correct and valid details to complete your profile.'
            )}
          </p>
        </div>
        <div>
          <UpdateUserInfo userInfo={userInfo} />
        </div>
      </div>
    );
  }
  return null;
};

export default UpdateUserProfile;
