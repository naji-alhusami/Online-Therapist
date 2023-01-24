import React from "react";

import profile from './Images/ProfilePhoto.svg';

const ProfilePic = ({userInfo}) => {
    console.log(userInfo);
return (
    {userInfo.publicImageUrl ? (
        <img
          src={userInfo.publicImageUrl}
          alt="profile"
          className="self-center ml-28 w-42 h-42 rounded-full"
        />
      ) : (
        <img src={profile} alt="profile" className="self-center ml-28" />
      )}
)
}

export default ProfilePic;