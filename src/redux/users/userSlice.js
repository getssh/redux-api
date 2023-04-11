import {createSlice, createAsyncThunk, isPending, isFulfilled, isRejected } from '@reduxjs/toolkit';

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
      state.error = action.payload;
    })
  }
});

export const {users, isLoading, error } = usersSlice.actions;
export default usersSlice.reducer;