import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BlogData from './BlogsData';

const BlogsRecommended = ({ id }) => {
  const { t } = useTranslation();
  const blogs = BlogData.filter((blog) => blog.id !== id);
  const navigate = useNavigate();

  const handleBlog1 = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    return navigate(`/blog/${blogs[0].id}`);
  };
  const handleBlog2 = (e) => {
    window.scrollTo(0, 0);
    e.preventDefault();
    return navigate(`/blog/${blogs[1].id}`);
  };

  return (
    <div
      id={id}
      className="w-fit "
    >
      <p className="text-2xl lg:text-3xl mt-16 mb-8">
        {t('Recommended for you')}
      </p>
      <div className="flex flex-col md:flex md:flex-row">
        <button
          type="submit"
          onClick={handleBlog1}
        >
          {' '}
          <img src={blogs[0].logo} alt="second" />
        </button>
        <button
          type="submit"
          onClick={handleBlog2}
          className=""
        >
          <img src={blogs[1].logo} alt="third" />
        </button>
      </div>
    </div>
  );
};

export default BlogsRecommended;
