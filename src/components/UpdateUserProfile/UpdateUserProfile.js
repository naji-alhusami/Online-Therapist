import React from 'react';

import { useTranslation } from 'react-i18next';

const UpdateUserProfile = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center text-center h-screen">
      <div className="flex items-center">
        <p className="text-sm text-[#FF0000] m-10">
          {t(
            'Please fill all the fields with correct and valid details to complete your profile.'
          )}
        </p>
      </div>
    </div>
  );
};

export default UpdateUserProfile;
