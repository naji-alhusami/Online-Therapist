import React, { useState, useRef } from 'react';

import profilePicture from '../Images/ProfilePhoto.png';
import ProfilePhoto from '../Images/profilePhoto.svg';

function UpdateUserPicture({ userProfilePicture }) {
  const [displayPicture, setDisplayPicture] = useState(userProfilePicture);
  const fileInputRef = useRef(null);
  const targetInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      targetInputRef.current.value = file.name;
    }
  };

  const handlePictureError = () => {
    setDisplayPicture(ProfilePhoto);
  };

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
          <div>
            <button
              type="button"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/3"
              onClick={handleButtonClick}
            >
              <div className="rounded-full overflow-hidden border border-black bg-white p-1">
                <img
                  src={profilePicture}
                  alt="UploadPicture"
                  className="w-10 h-10"
                />
              </div>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileInputChange}
            />
            <input ref={targetInputRef} type="text" />
          </div>
        )}
      </div>
    </div>
  );
}

export default UpdateUserPicture;
