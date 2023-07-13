import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, setDoc } from '@firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase-config';

// Start of Create Therapists Profile:
export const addContactDetails = createAsyncThunk(
  'contact/addContactDetails',
  async (payload, { rejectWithValue }) => {
    try {
      const contactId = uuidv4();
      const { contactType, fullName, email, details } = payload;
      console.log(payload);

      const docRef = doc(db, 'contact-data', contactId);
      await setDoc(docRef, {
        contactId,
        contactType,
        fullName,
        email,
        details,
      });

      return { contactId, contactType, fullName, email, details };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Create Therapists Profile.

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    contactDetails: {},
    error: null,
  },

  extraReducers: (builder) => {
    // Add Therapists Data Cases:
    builder.addCase(addContactDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addContactDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.contactDetails = action.payload;
      state.error = false;
    });
    builder.addCase(addContactDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default contactSlice.reducer;
