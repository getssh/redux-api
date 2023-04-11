import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const url = "https://randomuser.me/api/?results=5";
export const getUsers = createAsyncThunk('users/getUsers',
  async(_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=5')
      return response.data.results
    }
    catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.error = null;
    })
    .addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }
});

// export const { users, isLoading, error } = usersSlice.actions;
export default usersSlice.reducer;