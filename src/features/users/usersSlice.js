import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  //   signInWithPopup,
  // updatePassword,
  //   deleteUser,
  signOut,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  //   , deleteDoc
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
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Send Email for verification in Firebase:
      await sendEmailVerification(auth.currentUser);

      // Send User Data to firestore:
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email,
        fullName: `${firstName} ${lastName}`,
        birthdayDay,
        birthdayMonth,
        birthdayYear,
      });

      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Signup.

// Start of Login:
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload, { rejectWithValue }) => {
    const { email, password } = payload;
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      if (response.user.emailVerified === false) {
        return rejectWithValue('Email is Not Verified');
      }

      const docRef = doc(db, 'users', response.user.uid);
      const docSnap = await getDoc(docRef);

      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// End of Login.

// Start of Update User Profile:
export const updateProfile = createAsyncThunk(
  'user/updateProfile',
  async (payload, { rejectWithValue }) => {
    try {
      const {
        id,
        fullName,
        educationLevel,
        hobbies,
        familySize,
        gender,
        birthDate,
        email,
        phoneNumber,
        password,
      } = payload;
      console.log(payload.id);

      const docRef = doc(db, 'users', id);
      await setDoc(docRef, {
        fullName,
        educationLevel,
        hobbies,
        familySize,
        gender,
        birthDate,
        email,
        phoneNumber,
        password,
      });

      // await updatePassword(auth.currentUser, Password)
      //   .then(console.log('password changed'))
      //   .catch(() => {
      //     rejectWithValue('ERROR!!!');
      //   });

      const docSnap = await getDoc(docRef);

      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// End of Update User Profile.

// // Start of of Update User Password.:
// export const updatePassword = createAsyncThunk(
//   'user/updatePassword',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { id, Password } = payload;
//       console.log(payload.id);

//       await updatePassword(auth.currentUser, Password)
//         .then(console.log('password changed'))
//         .catch((error) => {
//           rejectWithValue(error.message);
//         });

//       const docRef = doc(db, 'users', id);
//       await setDoc(docRef, {
//         fullName,
//         EducationLevel,
//         Hobbies,
//         FamilySize,
//         Gender,
//         BirthDate,
//         Email,
//         PhoneNumber,
//       });

//       const docSnap = await getDoc(docRef);

//       return docSnap.data();
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
// // End of Update User Password.

// Start of Logout User:
export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      return {};
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// End of Logout User.

// Start of Load User:
export const loadUser = createAsyncThunk(
  'user/loadUser',
  async (payload, { rejectWithValue }) => {
    try {
      if (payload.emailVerified === false) {
        return rejectWithValue('Email is not verified');
      }
      const docRef = doc(db, 'users', payload.uid);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of of Load User.

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: false,
    user: {},
    error: null,
    userlogin: false,
    // SurveyAnswer: [],
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
      state.signedup = true;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });

    // Login Cases:
    builder.addCase(loginUser.pending, () => {});
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.error) {
        state.user = null;
        state.userlogin = false;
        state.error = action.payload.error;
      } else {
        state.user = action.payload;
        state.userlogin = true;
        state.error = null;
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });

    // Update User Cases:
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.signedup = true;
    });
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });

    // Logout Cases:
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.loading = false;
      state.user = {};
      state.error = null;
      state.userlogin = false;
      state.signedup = false;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });

    // Load User Cases:
    builder.addCase(loadUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadUser.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.error) {
        state.user = null;
        state.userlogin = false;
        state.error = action.payload.error;
      } else {
        state.user = action.payload;
        state.userlogin = true;
        state.error = null;
      }
    });
    builder.addCase(loadUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
