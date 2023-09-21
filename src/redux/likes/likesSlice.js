import { createSlice } from '@reduxjs/toolkit';

const likesInitialState = { likes: [], recent: [] };

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
    addRecent: {
      reducer(state, action) {
        state.recent.unshift(action.payload);
      },
    },
    clearRecent(state) {
      state.recent = [];
    },
  },
});

export const { addLike, deleteLike, addRecent, clearRecent } =
  likesSlice.actions;
export const likesReducer = likesSlice.reducer;
