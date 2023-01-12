import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  updateEmail,
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {
  db,
  auth,
  googleAuth,
  facebookAuth,
  // storage,
} from '../../firebase-config';

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
      console.log(user);
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
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload, { rejectWithValue }) => {
    const { email, password } = payload;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());

      return {
        id: user.uid,
        email: user.email,
        name: docSnap.data().name,
        birthdayDay: docSnap.data().birthdayDay,
        birthdayMonth: docSnap.data().birthdayMonth,
        birthdayYear: docSnap.data().birthdayYear,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUserWithGoogle = createAsyncThunk(
  'user/loginUserWithGoogle',
  async ({ rejectWithValue }) => {
    try {
      const { user } = await signInWithPopup(auth, googleAuth);
      console.log(user);
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email: user.email,
        name: user.displayName,
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUserWithFacebook = createAsyncThunk(
  'user/loginUserWithFacebook',
  async ({ rejectWithValue }) => {
    try {
      const { user } = await signInWithPopup(auth, facebookAuth);
      console.log(user);
      const docRef = doc(db, 'users', user.uid);
      await setDoc(docRef, {
        id: user.uid,
        email: user.email,
      });
      return { id: user.uid, email: user.email };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// this funciton to update the user profile information
export const updateChange = createAsyncThunk(
  'user/updateChange',
  async (payload, { rejectWithValue }) => {
    try {
      const {
        id,
        email,
        name,
        // photoURL,
        birthdayDay,
        birthdayMonth,
        birthdayYear,
        educationLevel,
        hobbies,
        familySize,
        gender,
        phoneNumber,
        password,
      } = payload;
      console.log(payload, password);

      // let downloadURL;
      // if (Idimage !== undefined) {
      //   const imagesRef = ref(storage, id);
      //   const uploadTask = uploadBytesResumable(imagesRef, Idimage);
      //   downloadURL = await getDownloadURL(uploadTask.snapshot.ref).then(
      //     (download) => {
      //       return download;
      //     }
      //   );
      // }
      // sending photo to firestorage

      // sending data to firestore
      const docRef = doc(db, 'users', id);
      await updateDoc(docRef, {
        id,
        email,
        name,
        // photoURL,
        birthdayDay,
        birthdayMonth,
        birthdayYear,
        educationLevel,
        hobbies,
        familySize,
        gender,
        phoneNumber,
      });
      await updatePassword(auth.currentUser, password);
      console.log(email);

      await updateEmail(auth.currentUser, email);

      const docSnap = await getDoc(docRef);

      return docSnap.data();
    } catch (error) {
      return rejectWithValue(error);
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
  },
  extraReducers: (builder) => {
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
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.userlogin = true;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    builder.addCase(loginUserWithGoogle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUserWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUserWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    builder.addCase(loginUserWithFacebook.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUserWithFacebook.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    });
    builder.addCase(loginUserWithFacebook.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
    builder.addCase(updateChange.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateChange.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      console.log(action.payload);
    });
    builder.addCase(updateChange.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
