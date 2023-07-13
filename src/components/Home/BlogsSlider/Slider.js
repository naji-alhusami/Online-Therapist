import React from 'react';

import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';

import Blogs from '../../Blogs/BlogsData';
import './Slider.css';

function Slider() {
  const { t } = useTranslation();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const BlogsSilder = Blogs.map((blog) => (
    <Link className="bl-10" to={`blog/${blog.id}`} key={blog.id}>
        <img key={blog.id} src={blog.logo} alt={blog.name} />
    </Link>
  ));

  return (
    <div className="relative bg-cyan-50 z-10">
      <div className="lg:ml-32 mx-20 pb-20 ">
        <p className=" py-10 lg:text-5xl text-4xl md:text-2xl">
          {t('RECENT BLOGS')}
        </p>
        <Carousel
          infinite="true"
          containerClass="w-full"
          responsive={responsive}
        >
          {BlogsSilder}
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
