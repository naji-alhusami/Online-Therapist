import React from 'react';
import AppointmentPart from './AppointmentPart';
import TherapistPart from './TherapistPart';
import Communications from './Communications';
import PurchaseTickets from './PurchaseTickets';

const Home = () => {
  return (
    <>
      <AppointmentPart />
      <TherapistPart />
      <Communications />
      <PurchaseTickets />
    </>
  );
};

export default Home;
