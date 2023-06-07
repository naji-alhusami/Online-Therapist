import React from 'react';

import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import UpdateUserPicture from './UpdateUserPicture';
import UpdateUserInfo from './UpdateUserInfo';
import UpdateUserSecurity from './UpdateUserSecurity';

const UpdateUserProfile = () => {
  const userLoading = useSelector((state) => state.users);
  const userInfo = useSelector((state) => state.users.user);
  const { t } = useTranslation();

  if (userLoading.loading) {
    return 'loading...';
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

        {/* div for picture and the fields */}
        <div className="flex flex-col items-center md:flex md:flex-row md:items-start ">
          <UpdateUserPicture
          //   setprofilepic={setprofilepic}
          //   profilepic={userInfo.photoURL}
          />

          {/* div for all the fields */}
          <div>
            <UpdateUserInfo userInfo={userInfo} />
            <UpdateUserSecurity />

            {/* Payment Methods & Tickets */}
            <div className="flex flex-col ml-6 mt-16">
              <h1 className="text-4xl my-5">
                <b>{t('Payment Methods & Tickets')}</b>
              </h1>

              <div className="flex flex-rows gap-10 mt-8 mb-16">
                <div className="flex flex-col ">
                  <div className="lg:text-lg text-sm mb-2">
                    {t('3 Cards Added')}
                  </div>
                  <button
                    type="button"
                    className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
                  >
                    {t('SHOW CARDS')}
                  </button>
                </div>

                <div className="flex flex-col">
                  <div className="lg:text-lg text-sm mb-2 ">
                    {t('10 Tickets Remaining')}
                  </div>
                  <button
                    type="button"
                    className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white"
                  >
                    {t('BUY TICKETS')}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* finished div for all the fields */}
        </div>
        {/* finished div for picture and the fields */}
      </div>
    );
  }
  return null;
};

export default UpdateUserProfile;
