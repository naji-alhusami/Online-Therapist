import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, setDoc } from 'firebase/firestore';

import { db } from '../../firebase-config';

// start of Add Credit Card:
export const addCreditCard = createAsyncThunk(
  'card/addCreditCard',
  async (payload, { rejectWithValue }) => {
    try {
      const { id, name, number, expiration, cvc } = payload;
      const docRef = doc(db, 'credit-cards', id);
      await setDoc(docRef, {
        name,
        number,
        expiration,
        cvc,
      });

      return { id, name, number, expiration, cvc };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Add Credit Card.

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    loading: false,
    card: [],
    error: null,
  },

  extraReducers: (builder) => {
    // Add Credit Card Cases:
    builder.addCase(addCreditCard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCreditCard.fulfilled, (state, action) => {
      state.loading = false;
      state.card = [...state.card, action.payload];
      state.signedup = true;
    });
    builder.addCase(addCreditCard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cardsSlice.reducer;
