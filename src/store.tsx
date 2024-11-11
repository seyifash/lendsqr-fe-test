import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Users/userSlice';
import adminsReducer from './adminSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    admins: adminsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // This is the type of the store's state
export type AppDispatch = typeof store.dispatch; // This is the type for dispatch

export default store;
