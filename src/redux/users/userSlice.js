import {createSlice} from '@reduxjs/toolkit';

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