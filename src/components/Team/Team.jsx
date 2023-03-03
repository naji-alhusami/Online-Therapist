// import React from 'react';
// import { useTranslation } from 'react-i18next';
// import TeamCard from './TeamCard';
// import naji from '../Images/naji.jpg'
// import nour from '../Images/nour.jpg';
// import mohammed from '../Images/mohammed.jpg';

// function Team() {
//   const { t } = useTranslation();
//   return (
//     <div>
//       <h1 className="text-4xl md:text-3xl sm:text-3xl p-[4rem] md:p-[4rem] pl-[7rem] lg:pb-[8rem] ">
//         {t('WE ARE HEALING, NICE TO MEET YOU!')}
//       </h1>
//       <div className=" ">
//         <h4 className="pl-[7rem] pb-[3rem]   text-3xl leading-10 text-gray-700">
//           {t('Meet the Team!')}
//         </h4>
//         <div className=" pl-[7rem] pb-[5rem] pr-[6rem] grid lg:grid-cols-5 md:grid-cols-3 .grid-cols-5 gap-3">
//           <TeamCard
//             image={mohammed}
//             name="Muhammed Mustafa"
//             position={t('Front-end Developer')}
//           />
//           <TeamCard
//             image={naji}
//             name="Naji AlHusami"
//             position={t("Front-end Developer")}
//           />
//           <TeamCard
//             image={nour}
//             name="Nour Al Maleh"
//             position={t("Front-end Developer")}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Team;

import React from 'react';
import { useTranslation } from 'react-i18next';
import TeamCard from './TeamCard';
import naji from '../Images/naji.jpg';
import nour from '../Images/nour.jpg';
import mohammed from '../Images/mohammed.jpg';

const names = ['Muhammed Mustafa', 'Naji Al Husami', 'Nour Al Maleh'];
const job = 'Front-End Developer';
const photos = [mohammed, naji, nour];

function Team() {
  window.scrollTo(0, 0);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-[#424A4F] mb-56">
      <div className=" font-poppins lg:text-5xl text-3xl leading-10">
        <h1 className="lg:ml-44 lg:mt-20 ml-10 sm:mr-10 md:mr-10 mt-10 text-black">
          {t('WE ARE HEALING, NICE TO MEET YOU!')}
        </h1>
      </div>
      <div className="text-3xl leading-10">
        <h3 className="lg:ml-44 lg:mt-28 ml-10 mt-8">{t('Meet the Team!')}</h3>
      </div>
      <div className=" ml-36 mt-[4em] mr-36">
        <div className="font-poppins flex flex-rows justify-items-center justify-evenly flex-wrap -m-6">
          {names.map((name, index) => {
            return <TeamCard name={name} job={job} photo={photos[index]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Team;
