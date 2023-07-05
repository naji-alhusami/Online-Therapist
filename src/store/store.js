import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../features/users/usersSlice';
import cardsSlice from '../features/cards/cardsSlice';
import ticketsSlice from '../features/tickets/ticketsSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    cards: cardsSlice,
    tickets: ticketsSlice,
  },
});
