import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  //   signInWithEmailAndPassword,
  //   signInWithPopup,
  //   updatePassword,
  //   deleteUser,
  //   sendEmailVerification,
  //   signOut,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  // getDoc, deleteDoc
} from 'firebase/firestore';

// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  db,
  auth,
  //   googleAuth,
  //   facebookAuth,
  //   storage,
} from '../../firebase-config';

// start of signup:
export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (payload, { rejectWithValue }) => {
    const {
      email,
      password,
      firstName,
      lastName,
      birthdayDay,
      birthdayMonth,
      birthdayYear,
    } = payload;

    try {
      // create user to Authentication in Firebase
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Send Email for verification in Firebase:
      //   await sendEmailVerification(auth.currentUser);

      // Send User Data to firestore:
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email,
        name: `${firstName} ${lastName}`,
        birthdayDay,
        birthdayMonth,
        birthdayYear,
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    userlogin: false,
    user: {},
    error: null,
    SurveyAnswer: [],
  },
  // reducers: {
  //   AddAnswer: (state, action) => {
  //     state.SurveyAnswer.push(action.payload);
  //   },
  // },

  extraReducers: (builder) => {
    // Signup Cases:
    builder.addCase(signupUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
