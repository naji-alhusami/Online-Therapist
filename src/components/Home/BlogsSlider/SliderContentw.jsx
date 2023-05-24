// import React, { useRef, useEffect } from 'react';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick';
// import $ from 'jquery';

// import Blogs from '../../Blogs/BlogsData';
// import RightArrow from '../../Images/RightArrow.svg';
// import LeftArrow from '../../Images/LeftArrow.svg';

// const SliderContent = ({ settings }) => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     $(sliderRef.current).not('.slick-initialized').slick(settings);
//   }, [settings]);

//   const hendlePrevClick = () => {
//     $(sliderRef.current).slick('slickPrev');
//   };

//   const hendleNextClick = () => {
//     $(sliderRef.current).slick('slickNext');
//   };

//   return (
//     <>
//       <div className="flex items-center" ref={sliderRef}>
//         {Blogs.map((blog) => (
//           <div key={blog.id} className="">
//             <img src={blog.logo} alt={blog.name} />
//           </div>
//         ))}
//       </div>
//       <div className="relative">
//         <div className="flex justify-between w-full">
//           <button
//             type="button"
//             className="image-button"
//             onClick={hendleNextClick}
//           >
//             <img src={LeftArrow} alt="LeftArrow" className="" />
//           </button>
//           <button
//             type="button"
//             className="image-button"
//             onClick={hendlePrevClick}
//           >
//             <img src={RightArrow} alt="RightArrow" className="" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SliderContent;
