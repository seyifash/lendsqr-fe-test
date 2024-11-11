import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Admin {
  id: string;
  Fullname: string;
  password: string;
  email: string;
}

const correctPassword = JSON.parse(localStorage.getItem("isCorrectPassword") || 'false');
const userId = JSON.parse(localStorage.getItem("id") || '""');

interface AdminsState {
  admins: Admin[];
  loading: boolean;
  isCorrectPassword: boolean | string;
  error: string | null;
  userId: string | null;
  adminUsers: Admin | null; // change from object to Admin | null
}

// Async thunk to fetch all admins
export const fetchAdmins = createAsyncThunk<Admin[], void>(
  'admins/fetchAdmins',
  async () => {
    const response = await axios.get('https://673143d77aaf2a9aff103ba8.mockapi.io/api/vi/users/admin');
    console.log(response.data);
    return response.data;
  }
);

const initialState: AdminsState = {
  admins: [],
  loading: false,
  error: null,
  isCorrectPassword: correctPassword,
  userId: userId ? userId : null,
  adminUsers: null, // ensure it's null by default
};

const adminsSlice = createSlice({
  name: 'admins',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.isCorrectPassword = action.payload.isAuth;
      state.userId = action.payload.id ?? null;
      localStorage.setItem("id", JSON.stringify(action.payload.id));
      localStorage.setItem("isCorrectPassword", JSON.stringify(action.payload.isAuth));
    },
    logoutUser(state) {
      state.isCorrectPassword = false;
      state.userId =  null;
      localStorage.setItem("id", '');
      localStorage.setItem("isCorrectPassword", '');
    },
    setError(state, action) {
      state.error = action.payload;
    },
    getAdminUsers(state, action: PayloadAction<string>) {

      console.log(action.payload);
      const admin = state.admins.find((admin) => admin.id === action.payload.toString());
      state.adminUsers = admin || null; // if no admin found, set to null
      console.log(state.adminUsers);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdmins.fulfilled, (state, action: PayloadAction<Admin[]>) => {
        state.loading = false;
        state.admins = action.payload;
      })
      .addCase(fetchAdmins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch admins';
      });
  },
});

export const { loginUser, setError, getAdminUsers, logoutUser } = adminsSlice.actions;
export default adminsSlice.reducer;
