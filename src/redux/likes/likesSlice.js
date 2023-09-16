import { createSlice } from '@reduxjs/toolkit';

const likesInitialState = [];

const likesSlice = createSlice({
  name: 'likes',
  initialState: likesInitialState,
  reducers: {
    addLike: {
      reducer(state, action) {
        state.push(action.payload);
      },
      // prepare(name, number) {
      //   return {
      //     payload: {
      //       name,
      //       number,
      //       id: nanoid(),
      //     },
      //   };
      // },
    },
    deleteLike(state, action) {
      const index = state.findIndex(item => item.id === action.payload.id);
      state.splice(index, 1);
    },
  },
});

export const { addLike, deleteLike } = likesSlice.actions;
export const likesReducer = likesSlice.reducer;
