import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// start of Add Credit Card:
export const addCreditCard = createAsyncThunk(
  'card/addCreditCard',
  async (payload) => {
    // const { name, number, expiration, cvc } = payload;
    console.log(payload);
  }
);
// End of Add Credit Card.

const cardsSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    card: {},
    error: null,
  },

  extraReducers: (builder) => {
    // Add Credit Card Cases:
    builder.addCase(addCreditCard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCreditCard.fulfilled, (state, action) => {
      state.loading = false;
      state.card = action.payload;
      state.signedup = true;
    });
    builder.addCase(addCreditCard.rejected, (state, action) => {
      state.loading = false;
      state.card = {};
      state.error = action.payload;
    });
  },
});

export default cardsSlice.reducer;
