import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserInterface } from './userInterface';



interface UsersState {
  users: UserInterface[];
  loading: boolean;
  error: string | null;
}

// Async thunk to fetch all users
export const fetchUsers = createAsyncThunk<UserInterface[], void>(
  'users/fetchUsers',
  async () => {
    const response = await axios.get('https://673143d77aaf2a9aff103ba8.mockapi.io/api/vi/users/allUsers');
    return response.data;
  }
);

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserInterface[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});


export default usersSlice.reducer;
