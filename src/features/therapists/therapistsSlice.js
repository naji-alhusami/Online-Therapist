import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, setDoc } from '@firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../firebase-config';

// Start of Create Therapists Profile:
export const addTherapistsData = createAsyncThunk(
  'therapist/addTherapistsData',
  async (payload, { rejectWithValue }) => {
    try {
      const therapistId = uuidv4();
      const { userName, email, city, licenseNumber, password } = payload;

      const docRef = doc(db, 'therapists-data', therapistId);
      await setDoc(docRef, {
        therapistId,
        userName,
        email,
        city,
        licenseNumber,
        password,
      });

      return { therapistId, userName, email, city, licenseNumber, password };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Create Therapists Profile.

const therapistsSlice = createSlice({
  name: 'therapists',
  initialState: {
    loading: false,
    therapistsData: {},
    error: null,
  },

  extraReducers: (builder) => {
    // Add Therapists Data Cases:
    builder.addCase(addTherapistsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addTherapistsData.fulfilled, (state, action) => {
      state.loading = false;
      state.therapistsData = action.payload;
      state.error = false;
    });
    builder.addCase(addTherapistsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default therapistsSlice.reducer;
