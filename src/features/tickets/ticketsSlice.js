import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, setDoc, getDoc } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase-config';

// Start of Add Tickets To The Current User:
export const addTicketsNumber = createAsyncThunk(
  'card/addTicketsNumber',
  async (payload, { rejectWithValue }) => {
    try {
      const { ticket } = payload;
      const auth = getAuth();
      const userId = auth.currentUser.uid;
      const docRef = doc(db, 'users', userId);

      // Retrieve the existing document data
      const docSnap = await getDoc(docRef);
      const existingData = docSnap.data();

      // Convert existing ticket value to a number
      let numberOfTickets = parseInt(existingData.ticket || 0, 10);

      // Convert the new ticket value to a number
      const newTicket = Number(ticket);

      // Calculate the updated ticket total
      numberOfTickets += newTicket;

      // Update the document with the updated ticket total
      await setDoc(docRef, {
        ...existingData,
        ticket: numberOfTickets,
      });

      return numberOfTickets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Add Tickets To The Current User:

// Start Of Subtract Ticket Number:
export const subtractTicketsNumber = createAsyncThunk(
  'card/subtractTicketsNumber',
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser.uid;
      const docRef = doc(db, 'users', userId);

      // Retrieve the existing document data
      const docSnap = await getDoc(docRef);
      const existingData = docSnap.data();

      // Get the current ticket number
      const currentTickets = existingData.ticket || 0;

      // Subtract 1 from the current ticket number
      const newTickets = currentTickets - 1;

      // Update the document with the new ticket number
      await setDoc(docRef, {
        ...existingData,
        ticket: newTickets,
      });

      return newTickets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End Of Subtract Ticket Number.

// Start of Load Tickets:
export const loadTickets = createAsyncThunk(
  'user/loadTickets',
  async (payload, { rejectWithValue }) => {
    try {
      const docRef = doc(db, 'users', payload.uid);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of of Load Tickets.

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    loading: false,
    ticketsNumber: null,
    error: null,
    userlogin: false,
  },

  extraReducers: (builder) => {
    // Add Tickets Cases:
    builder.addCase(addTicketsNumber.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTicketsNumber.fulfilled, (state, action) => {
      state.loading = false;
      // state.ticket += Number(action.payload);
      state.ticketsNumber = action.payload;
      state.error = false;
    });
    builder.addCase(addTicketsNumber.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Get Tickets Cases:
    builder.addCase(subtractTicketsNumber.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(subtractTicketsNumber.fulfilled, (state, action) => {
      state.loading = false;
      state.ticketsNumber = action.payload;
      state.error = false;
    });
    builder.addCase(subtractTicketsNumber.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Load User Tickets:
    builder.addCase(loadTickets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadTickets.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.error) {
        state.ticketsNumber = null;
        state.userlogin = false;
        state.error = action.payload.error;
      } else {
        state.ticketsNumber = action.payload.ticket;
        state.userlogin = true;
        state.error = null;
      }
    });
    builder.addCase(loadTickets.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default ticketsSlice.reducer;
