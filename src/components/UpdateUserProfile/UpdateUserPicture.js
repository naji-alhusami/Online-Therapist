import React, { useState } from 'react';

import profilePhoto from '../Images/profilePhoto.svg';

function UpdateUserPicture({ userProfilePicture }) {
  const [displayPicture, setDisplayPicture] = useState(
    userProfilePicture || profilePhoto
  );

  const handlePictureError = () => {
    setDisplayPicture(profilePhoto);
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
      </div>
    </div>
  );
}

export default UpdateUserPicture;
