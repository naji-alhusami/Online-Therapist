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

  const { id } = useParams();
  console.log(id);
  const filterbyid = BlogData.filter((blog) => blog.id === id);
  console.log(filterbyid);
  
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
      className=" flex flex-col justify-center items-start lg:ml-[12rem] sm:ml-[10rem]"
    >
      <img
        className=" rounded-xl p-9 xl:w-[60rem] xl:h-[35rem] md:h-[35rem] md:w-[50rem] sm:h-[15rem] sm:w-[22rem] "
        src={imageurl}
        alt="article"
      />
      <div className="space-y-9  ml-10 xl:w-[55rem] sm:w-[30rem]">
        <h1 className=" 2xl:text-5xl sm:text-4xl uppercase ">
          {t(`${filterbyid[0].header}`)}
        </h1>
        <p className=" 2xl:text-l sm:text-m font-light leading-loose uppercase">
          {t(`${filterbyid[0].paragraph}`)}
        </p>
        <div className="pt-[2rem]">
          <h4 className="2xl:text-5xl sm:text-4xl  uppercase pb-[1rem] ">
            {t(`${filterbyid[0].header1}`)}
          </h4>
          <div className=" pb-[1rem] 2xl:text-l sm:text-l font-light leading-loose uppercase">
            <p>{t(`${filterbyid[0].paragraph2}`)}</p>
            <p>{t(`${filterbyid[0].paragraph3}`)}</p>
            <p>{t(`${filterbyid[0].paragraph4}`)}</p>
          </div>
        </div>
      </div>
      <div className="pl-[2.5rem] space-y-3 pt-3 xl:w-[40rem] sm:w-[15rem]  ">
        <p className="2xl:text-3xl sm:text-xl uppercase ">
          {t('Sign up for The Healing blog')}
        </p>
        <p className="2xl:text-xl  sm:text-l uppercase ">
          {t('A weekly, ad-free Blog that helps you stay in the know.')}
        </p>

        <SubscribeForm />
        <BlogsRecommended id={id} />
      </div>
    </div>
  );
}

export default BlogsArticle;
