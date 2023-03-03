import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick';
import { useTranslation } from 'react-i18next';

import SliderSettings from './SliderSettings';

const SliderContent = () => {
  const { t } = useTranslation();

  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-screen bg-cyan-50 py-16 h-full relative overflow-hidden sm:py-8 md:py-12">
      <h1 className="lg:text-start pb-20 pl-32 font-poppins text-3xl md:text-4xl">{t('RECENT BLOGS')}</h1>
      <SliderSettings settings={settings} />
    </div>
  );
};

export default SliderContent;
