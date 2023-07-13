import React from 'react';
import { useTranslation } from 'react-i18next';

import Founder from '../Images/Founder.jpg'

function About() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-screen font-poppins text-black tracking-[-0.01em]">
      <div className="flex flex-grow bg-white flex-col lg:mb-[0%] mb-[5%] ml-[10%] mt-[5%] mr-[8%]">
        <h2 className="lg:text-5xl text-3xl">HEALING</h2>
        <h3 className="lg:text-3xl text-xl text-black text-opacity-50">
          {t('We are here to HELP!')}
        </h3>
        <div className="md:text-lg text-sm leading-6 mt-[5%] mb-20">
          {t(
            'At Healing, we believe there is a better way to do things. A more valuable way where customers are earned rather than bought. We are obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization. It is one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity. We&apos;re excited to simplify SEO for everyone through our software, education, and community.'
          )}
        </div>
      </div>
      <div className="flex items-center flex-grow flex-col lg:flex-row pb-16 bg-cyan-50 ">
        <div className="self-center lg:ml-[10%] lg:mt-[0%] mt-[2%] pt-8 pb-8">
          <img
            src={Founder}
            alt="man"
            className="w-[18rem] h-[18rem] md:w-[220px] md:h-[220px] lg:w-[65em] lg:h-[15em] rounded-md"
          />
        </div>
        <div className="text-gray-700 ml-[10%] lg:ml-[5%] mr-[8%] lg:mt-[0%] mt-[5%] lg:mb-[0%] mb-10 ">
          <h2 className="lg:text-4xl text-2xl ">{t('Our Founding')}</h2>
          <div className="md:text-lg text-sm lg:mt-[2%] mt-[4%]">
            {t('Healing was founded by Payam Abubakr in 2021. It was called Online Therapist, and started as a blog and an online community where some of the worlds therapists shared their research and ideas. We launched the Beginners Guide to Therapy and our first study, and that hub of industry expertise transformed into a small consulting firm and led us to create the Online Therapist of today!')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
