import React, { useState } from 'react';

// import { useTranslation } from 'react-i18next';

import profilePicture from '../Images/ProfilePhoto.png';
import ProfilePhoto from '../Images/profilePhoto.svg';

// export const handleSendFile = (event) => {
//   const image = event.target.files[0];
//   return image;
// };

function UpdateUserPicture({ userProfilePicture }) {
  const [displayPicture, setDisplayPicture] = useState(userProfilePicture);
  // const [showUploadForm, setShowUploadForm] = useState(false);
  // const { t } = useTranslation();

  const handlePictureError = () => {
    setDisplayPicture(ProfilePhoto);
  };

  const handle = () => {
    return <input type="file" className="hidden" accept="image/*" />;
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
          <button
            type="button"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/3 "
            onClick={handle}
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
      </div>
    </div>
  );
}

export default UpdateUserPicture;
