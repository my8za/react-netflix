import { configureStore } from '@reduxjs/toolkit';
import slice from './slice';

const store = configureStore({
  reducer: {
    popular: slice,
    topRated: slice,
    upComing: slice,
  },
  middleware: getDefaultMiddleware => 
  getDefaultMiddleware({
    serializableCheck: false,
  })
});

export default store;