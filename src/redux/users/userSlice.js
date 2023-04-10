import {createSlice} from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'name',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
    active: false,
  },
  extraReducers: {

  }
});

export const {users, isLoading, error } = usersSlice.actions;
export default usersSlice.reducer;