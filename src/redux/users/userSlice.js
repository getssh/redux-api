import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const url = "https://randomuser.me/api/?results=5";
const getUsers = createAsyncThunk('users/getUsers',
  async({ rejectWithValue }) => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=5')
      const data = response.json()
      return data
    }
    catch (error) {
      rejectWithValue(error.message)
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
  extraReducers: {
    
  }
});

export const {users, isLoading, error } = usersSlice.actions;
export default usersSlice.reducer;