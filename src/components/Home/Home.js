// import React from 'react';
// import { useSelector } from 'react-redux';

// import AppointmentPart from './AppointmentPart';
// import TherapistPart from './TherapistPart';
// import Communications from './Communications';
// import Slider from './BlogsSlider/Slider';
// import PurchaseTickets from './PurchaseTickets';
// import ErrorAppointmentPart from './ErrorAppointmentPart';

// const Home = () => {
//   const userLogin = useSelector((state) => state.users);
//   window.scrollTo(0, 0);

//   if (userLogin.userlogin) {
//     return (
//       <>
//         <ErrorAppointmentPart />
//         <TherapistPart />
//         <Communications />
//         <Slider />
//         <PurchaseTickets />
//       </>
//     );
//   }

//   return (
//     <>
//       <AppointmentPart />
//       <TherapistPart />
//       <Communications />
//       <Slider />
//       <PurchaseTickets />
//     </>
//   );
// };

// export default Home;

import React from 'react';
import AppointmentPart from './AppointmentPart';
import TherapistPart from './TherapistPart';
import Communications from './Communications';
import Slider from './BlogsSlider/Slider';
import Tickets from './Tickets';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div className='w-screen'>
      <AppointmentPart />
      <TherapistPart />
      <Communications />
      <Slider />
      <Tickets />
    </div>
  );
};

export default Home;
