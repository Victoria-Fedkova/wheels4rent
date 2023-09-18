import { createSlice } from '@reduxjs/toolkit';

const likesInitialState = { likes: [] };

const likesSlice = createSlice({
  name: 'likes',
  initialState: likesInitialState,
  reducers: {
    addLike: {
      reducer(state, action) {
        state.likes.push(action.payload);
      },
    },
    deleteLike(state, action) {
      const index = state.likes.findIndex(
        item => item.id === action.payload.id
      );
      state.likes.splice(index, 1);
    },
  },
});

export const { addLike, deleteLike } = likesSlice.actions;
export const likesReducer = likesSlice.reducer;
