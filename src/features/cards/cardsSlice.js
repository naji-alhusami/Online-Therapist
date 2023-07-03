import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  doc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase-config';

// start of Add Credit Card:
export const addCreditCard = createAsyncThunk(
  'card/addCreditCard',
  async (payload, { rejectWithValue }) => {
    try {
      const cardId = uuidv4();
      const { userId, name, number, expiration, cvc } = payload;
      const docRef = doc(db, 'credit-cards', cardId);
      await setDoc(docRef, {
        userId,
        cardId,
        name,
        number,
        expiration,
        cvc,
      });

      return { userId, cardId, name, number, expiration, cvc };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Add Credit Card.

// start of Get Credit Cards of the user:
export const getCreditCardByUserId = createAsyncThunk(
  'card/getCreditCardByUserId',
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const userId = auth.currentUser.uid;
      console.log(userId);
      const docRef = collection(db, 'credit-cards');
      const querySnapshot = await getDocs(
        query(docRef, where('userId', '==', userId))
      );
      const cards = querySnapshot.docs.map((document) => document.data());
      console.log(cards);
      return cards;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// End of Get Credit Cards of the user.

// start of Delete Credit Card:
// export const deleteCreditCard = createAsyncThunk(
//   'card/addCreditCard',
//   async (payload, { rejectWithValue }) => {
//     try {
//       const { id, name, number, expiration, cvc } = payload;
//       const docRef = doc(db, 'credit-cards', id);
//       await setDoc(docRef, {
//         name,
//         number,
//         expiration,
//         cvc,
//       });

//       return { id, name, number, expiration, cvc };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// End of Delete Credit Card.

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    loading: false,
    card: [],
    userCards: [],
    error: null,
  },

  extraReducers: (builder) => {
    // Add Credit Card Cases:
    builder.addCase(addCreditCard.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCreditCard.fulfilled, (state, action) => {
      state.loading = false;
      state.card = [...state.card, action.payload];
      state.signedup = true;
    });
    builder.addCase(addCreditCard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Get Credit Cards Cases:
    builder.addCase(getCreditCardByUserId.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCreditCardByUserId.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.userCards = action.payload;
      state.signedup = true;
    });
    builder.addCase(getCreditCardByUserId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default cardsSlice.reducer;
