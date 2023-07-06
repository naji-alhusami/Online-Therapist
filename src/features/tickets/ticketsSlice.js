import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, setDoc, getDoc } from '@firebase/firestore';
//   getDocs,
//   deleteDoc,
//   collection,
//   query,
//   where,
// } from 'firebase/firestore';
// import { v4 as uuidv4 } from 'uuid';
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
      const existingTicket = Number(existingData.ticket);

      // Convert the new ticket value to a number
      const newTicket = Number(ticket);

      // Calculate the updated ticket total
      const updatedTicketTotal = existingTicket + newTicket;
      console.log(updatedTicketTotal);

      // Update the document with the updated ticket total
      await setDoc(docRef, {
        ...existingData,
        ticket: updatedTicketTotal,
      });

      return { ticket };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Add Tickets To The Current User:

// Start Of Subtract Ticket Number:
export const getTicketsNumber = createAsyncThunk(
  'card/getTicketsNumber',
  async (payload, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser.uid;
      const docRef = doc(db, 'users', userId);

      // Retrieve the existing document data
      const docSnap = await getDoc(docRef);

      return docSnap.ticket;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End Of Subtract Ticket Number:

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    loading: false,
    ticket: 0,
    error: null,
  },

  extraReducers: (builder) => {
    // Add Tickets Cases:
    builder.addCase(addTicketsNumber.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTicketsNumber.fulfilled, (state, action) => {
      console.log(action.payload.ticket);
      state.loading = false;
      state.ticket += Number(action.payload.ticket);
      state.error = false;
    });
    builder.addCase(addTicketsNumber.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Get Tickets Cases:
    builder.addCase(getTicketsNumber.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTicketsNumber.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.ticket -= Number(action.payload);
      state.error = false;
    });
    builder.addCase(getTicketsNumber.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default ticketsSlice.reducer;
