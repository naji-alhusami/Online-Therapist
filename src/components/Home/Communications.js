import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from './Card';

import Video from '../Images/Video.svg';
import Call from '../Images/Call.svg';
import Chat from '../Images/Chat.svg';

function Communications() {
  const { t } = useTranslation();

  return (
    <div className="font-poppins p-12 mb-16  flex flex-col justify-evenly ">
      <h1 className=" text-2xl md:text-4xl xl:text-4xl p-16 mb-2 lg:ml-0">
        {t('WE CAN COMMUNICATE THROUGH:')}
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly ">
        <Card
          image={Call}
          title={t('Voice Call')}
          content={t(
            'For better experience therapists recommend video calls, but always remember that its a choice!'
          )}
          buttonPreview={false}
          imagePreview
          contentPreview
          titlePreview
        />

        <Card
          image={Chat}
          title={t('Chat')}
          content={t(
            'Need to talk to someone? Come have a chat with your therapist!'
          )}
          buttonPreview={false}
          imagePreview
          contentPreview
          titlePreview
        />

        <Card
          image={Video}
          title={t('Video Call')}
          content={t(
            'Feeling ready to start a conversation? Give your therapist a voice call and talk your heart out!'
          )}
          buttonPreview={false}
          imagePreview
          contentPreview
          titlePreview
        />
      </div>
    </div>
  );
}

export default Communications;
