import React from 'react';

import AppointmentPart from './AppointmentPart';
import TherapistPart from './TherapistPart';
import Communications from './Communications';
import Slider from './BlogsSlider/Slider';
import Tickets from './Tickets';

const Home = () => {
  window.scrollTo(0, 0);
  
  return (
    <div className="w-screen">
      <AppointmentPart />
      <TherapistPart />
      <Communications />
      <Slider />
      <Tickets />
    </div>
  );
};

export default Home;
