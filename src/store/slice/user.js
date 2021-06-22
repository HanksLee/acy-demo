import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null
  },
  reducers: {
    addToken: (state,action) => {
        state.token = action.payload;
    },
    deleteToken: (state,action) => {
        state.token = null
    }
  },
});

export const selectorUser = (state) => state.user;
export const { addToken, deleteToken } = userSlice.actions;

export default userSlice.reducer;