import React from 'react';
import AppointmentPart from './AppointmentPart';
import TherapistPart from './TherapistPart';
import Communications from './Communications';
import SliderContent from './BlogsSlider/SliderContent';
import PurchaseTickets from './PurchaseTickets';

const Home = () => {
  return (
    <>
      <AppointmentPart />
      <TherapistPart />
      <Communications />
      <SliderContent />
      <PurchaseTickets />
    </>
  );
};

export default Home;
