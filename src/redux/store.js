import { configureStore } from '@reduxjs/toolkit';
import cafeReducer from './cafeSlice';

const store = configureStore({
  reducer: {
    cafe: cafeReducer
  }
});

export default store;