import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  deleteDoc
} from 'firebase/firestore';

import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  db,
  auth,
  googleAuth,
  facebookAuth,
  storage,
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
        password,
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
      return rejectWithValue(error.message);
    }
  }
);
// End of Login.

// Login with Facebook:
export const loginUserWithFacebook = createAsyncThunk(
  'user/loginUserWithFacebook',
  async (_, { rejectWithValue }) => {
    try {
      const { user } = await signInWithPopup(auth, facebookAuth);
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email: user.email,
        name: user.displayName,
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Login with Google.

// Login with Google:
export const loginUserWithGoogle = createAsyncThunk(
  'user/loginUserWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const { user } = await signInWithPopup(auth, googleAuth);
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email: user.email,
        name: user.displayName,
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Login with Google.

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
        profilePicture,
        password,
      } = payload;

      // Upload the profile picture to Firebase Storage
      const storageRef = ref(storage, id);
      const metadata = {
        contentType: profilePicture[0].type, // Set the correct MIME type of the file
      };
      const snapshot = await uploadBytes(
        storageRef,
        profilePicture[0],
        metadata
      );
      const downloadURL = await getDownloadURL(snapshot.ref);

      const docRef = doc(db, 'users', id);
      await setDoc(docRef, {
        id,
        fullName,
        educationLevel,
        hobbies,
        familySize,
        gender,
        birthDate,
        email,
        phoneNumber,
        profilePictureURL: downloadURL,
        password,
      });

      const docSnap = await getDoc(docRef);

      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// End of Update User Profile.

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

// Start of Delete User:
export const deleteUserAccount = createAsyncThunk(
  'user/deleteUserAccount',
  async (payload, { rejectWithValue }) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await user
          .delete()
          .then(() => {
            console.log('User account deleted successfully.');
          })
          .catch((error) => {
            console.error(error.message);
          });
      } else {
        console.log('No user is currently signed in.');
      }
      await deleteDoc(doc(db, 'users', payload.id));
      return {};
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Delete User.

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
      state.error = false;
    });
    builder.addCase(signupUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });

    // Login with user & Password Cases:
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

    // Login with Google Cases:
    builder.addCase(loginUserWithGoogle.pending, () => {});
    builder.addCase(loginUserWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.userlogin = true;
      state.error = null;
    });
    builder.addCase(loginUserWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });

    // Login with Facebook Cases:
    builder.addCase(loginUserWithFacebook.pending, () => {});
    builder.addCase(loginUserWithFacebook.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.userlogin = true;
      state.error = null;
    });
    builder.addCase(loginUserWithFacebook.rejected, (state, action) => {
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
      state.error = false;
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
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });

    // Delete User Cases:
    builder.addCase(deleteUserAccount.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteUserAccount.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(deleteUserAccount.rejected, (state, action) => {
      console.log(action.payload);
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
