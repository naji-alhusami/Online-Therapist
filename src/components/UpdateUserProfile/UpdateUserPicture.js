// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import profilePicture from '../Images/ProfilePhoto.png';
import ProfilePhoto from '../Images/profilePhoto.svg';

function UpdateUserPicture() {
  //   const { t } = useTranslation();
  //   const [showbox, setshowbox] = useState(false);

  //   const handlesendfile = (e) => {
  //     setprofilepic(e.target.files[0]);
  //     console.log(e.target.files[0]);
  //   };

  return (
    <div className="m-5 md:mr-20 lg:mx-40">
      <div className="relative ">
        <img src={ProfilePhoto} alt="ProfilePicture" />
        <button
          type="button"
          // onClick={() => setshowbox(true)}
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
      </div>
    </div>
  );
}

export default UpdateUserPicture;
