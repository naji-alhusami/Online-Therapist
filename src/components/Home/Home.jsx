import React from 'react';
import AppointmentPart from './AppointmentPart';
import TherapistPart from './TherapistPart';
import Communications from './Communications';
import Slider from './BlogsSlider/Slider';
import PurchaseTickets from './PurchaseTickets';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <AppointmentPart />
      <TherapistPart />
      <Communications />
      <Slider />
      <PurchaseTickets />
    </>
  );
};

export default Home;
