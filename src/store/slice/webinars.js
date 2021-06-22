import { createSlice } from "@reduxjs/toolkit";

export const webinarsSlice = createSlice({
  name: "webinars",
  initialState: {
    list: [],
    currentWebinar: ""
  },
  reducers: {
    setWebinarsList: (state,action) => { 
        state.list = action.payload;
    },
    setCurrentWebinar: (state,action) => {
        state.currentWebinar = action.payload;
    }
  },
});

export const selectorWebinars = (state) => state.webinars;
export const { setWebinarsList, setCurrentWebinar } = webinarsSlice.actions;

export default webinarsSlice.reducer;