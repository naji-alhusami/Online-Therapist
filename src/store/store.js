import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../features/users/usersSlice';
import cardsSlice from '../features/cards/cardsSlice';
import ticketsSlice from '../features/tickets/ticketsSlice';
import therapistsSlice from '../features/therapists/therapistsSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    cards: cardsSlice,
    tickets: ticketsSlice,
    therapists: therapistsSlice,
  },
});
