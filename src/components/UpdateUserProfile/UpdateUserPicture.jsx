import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import profilePicture from '../Images/ProfilePhoto.png';
import ProfilePhoto from '../Images/profilePhoto.svg';


function UpdateUserPicture({ userProfilePicture }) {
  const [displayPicture, setDisplayPicture] = useState(userProfilePicture);
  const [showUploadForm, setShowUploadForm] = useState(false);
  const { t } = useTranslation();

  const handlePictureError = () => {
    setDisplayPicture(ProfilePhoto);
  };

  const handlesendfile = (e) => {
    // setprofilepic(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  //   const handlesendfile = (e) => {
  //     setprofilepic(e.target.files[0]);
  //     console.log(e.target.files[0]);
  //   };

  return (
    <div className="m-5 md:mr-20 lg:mx-40">
      <div className="relative ">
        <img
          src={displayPicture}
          alt="ProfilePicture"
          onError={handlePictureError}
          className="w-[20rem] h-[23rem] rounded-full overflow-hidden"
        />
        {displayPicture === ProfilePhoto && (
          <button
            type="button"
            onClick={() => setShowUploadForm(true)}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/3 "
          >
            <div className="rounded-full overflow-hidden border border-black bg-white p-1">
              <img
                src={profilePicture}
                alt="UploadPicture"
                className="w-10 h-10"
              />
            </div>
          </button>
        )}
        {showUploadForm && (
          <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black opacity-80 "
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <div className="bg-white rounded-lg p-6 w-[50%] flex flex-col">
              <h1 className="lg:text-4xl md:text-lg  ms:text-ms mb-4">
                {' '}
                {t('Upload Your Picture')}
              </h1>
              <hr />
              <input
                type="file"
                className="mt-4"
                accept="image/*"
                onChange={handlesendfile}
              />
              <button
                type="button"
                onClick={() => setShowUploadForm(false)}
                className="lg:text-2xl md:text-1xl sm:text-sm rounded-md box-border p-2 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500 hover:text-white  self-end"
              >
                {' '}
                {t('Close')}{' '}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateUserPicture;
