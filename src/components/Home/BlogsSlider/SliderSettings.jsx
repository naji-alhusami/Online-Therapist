import React, { useEffect, useRef } from 'react';

import $ from 'jquery';
import Blogs from './BlogData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick';

import RightArrow from '../../Images/RightArrow.svg';
import LeftArrow from '../../Images/LeftArrow.svg';
// import classes from './slider.module.css';

const SliderSettings = ({ settings }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    $(sliderRef.current).not('.slick-initialized').slick(settings);
  }, [settings]);

  const hendlePrevClick = () => {
    console.log('cliceked');
    $(sliderRef.current).slick('slickPrev');
  };

  const hendleNextClick = () => {
    $(sliderRef.current).slick('slickNext');
  };

  return (
    <div className="slider-container pr-5">
      <div
        className="flex flex-row items-center justify-evenly w-screen h-1/3 flex-wrap p-0 m-0"
        ref={sliderRef}
      >
        {Blogs.map((blog) => (
          <div key={blog.id} className="w-full h-fit-content m-5 relative">
            <img src={blog.logo} alt={blog.name} />
          </div>
        ))}
      </div>
      <div className="slider-arrows absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full pt-30">
        <button type="button" onClick={hendleNextClick}>
          <img
            className="px-7 pt-56 pb-32 cursor-pointer bg-cyan-50 z-2"
            src={LeftArrow}
            alt="LeftArrow"
          />
        </button>
        <button type="button" onClick={hendlePrevClick}>
          <img
            className="block h-40px w-40px px-7  pt-56 pb-32 cursor-pointer bg-cyan-50 z-2"
            src={RightArrow}
            alt="RightArrow"
          />
        </button>
      </div>
    </div>
  );
};
export default SliderSettings;
