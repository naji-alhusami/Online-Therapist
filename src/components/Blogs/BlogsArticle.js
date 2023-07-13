import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React from 'react';
import BlogData from './BlogsData';
import SubscribeForm from '../Subscribe/SubscribeForm';
import BlogsRecommended from './BlogsRecommended';
import Blog1 from '../Images/Blog1.jpg';
import Blog2 from '../Images/Blog2.jpg';
import Blog3 from '../Images/Blog3.jpg';

function BlogsArticle() {
  const { t } = useTranslation();

  window.scrollTo(0, 0);

  const { id } = useParams();
  const filterbyid = BlogData.filter((blog) => blog.id === id);

  let imageurl;
  if (id === '1') {
    imageurl = Blog1;
  } else if (id === '2') {
    imageurl = Blog2;
  } else {
    imageurl = Blog3;
  }

  return (
    <div
      data-testid="blogarticle"
      id={id}
      className=" flex flex-col items-center m-12 md:m-32"
    >
      <img className=" rounded-xl my-4 w-full" src={imageurl} alt="article" />
      <div className="">
        <h1 className="my-8 text-2xl">{t(`${filterbyid[0].header}`)}</h1>
        <p className=" font-light uppercase">
          {t(`${filterbyid[0].paragraph}`)}
        </p>
        <div className="">
          <h4 className="mt-8 mb-5 uppercase">
            {t(`${filterbyid[0].header1}`)}
          </h4>
          <div className="font-light leading-loose uppercase">
            <p>{t(`${filterbyid[0].paragraph2}`)}</p>
            <p>{t(`${filterbyid[0].paragraph3}`)}</p>
            {filterbyid[0].paragraph4 && (
              <p>{t(`${filterbyid[0].paragraph4}`)}</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-left justify-start ml-0 mt-8 mb-2">
        <p className="text-3xl uppercase mb-2">{t('Sign up for The Healing blog')}</p>
        <p className=" uppercase ">
          {t('A weekly, ad-free Blog that helps you stay in the know.')}
        </p>

        <SubscribeForm />
        <BlogsRecommended id={id} />
      </div>
    </div>
  );
}

export default BlogsArticle;
