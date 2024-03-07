import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/user/userSlice';

const store = configureStore({
  reducer: {
    // Add your reducers here
    sliceName: reducer,
  },
  // Add middleware if needed
  // middleware: (getDefaultMiddleware) => {
  //   // Add your middleware here
  //   // Example: getDefaultMiddleware().concat(yourMiddleware)
  //   return getDefaultMiddleware();
  // },
});

export default store;