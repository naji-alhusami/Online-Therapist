import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import {
//   doc,
//   setDoc,
//   getDocs,
//   deleteDoc,
//   collection,
//   query,
//   where,
// } from 'firebase/firestore';
// import { v4 as uuidv4 } from 'uuid';
// import { getAuth } from 'firebase/auth';
// import { db } from '../../firebase-config';

// Start of Get number of tickets and prices:
export const getTicketsNumber = createAsyncThunk(
  'card/getTicketsNumber',
  async (payload, { rejectWithValue }) => {
    try {
      const { ticket } = payload;

      return { ticket };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Get number of tickets and prices:

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    loading: false,
    ticket: 0,
    error: null,
  },

  extraReducers: (builder) => {
    // Add Credit Card Cases:
    builder.addCase(getTicketsNumber.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTicketsNumber.fulfilled, (state, action) => {
      state.loading = false;
      state.ticket += Number(action.payload.ticket);
      state.error = false;
    });
    builder.addCase(getTicketsNumber.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default ticketsSlice.reducer;
