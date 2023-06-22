import { configureStore } from '@reduxjs/toolkit';
import usersSlice from '../features/users/usersSlice';
import cardsSlice from '../features/cards/cardsSlice';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    cards: cardsSlice,
  },
});
