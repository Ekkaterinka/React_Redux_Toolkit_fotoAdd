import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    list: []
  },
  reducers: {
    addImage(state, action) {
      state.list.push({
        id: uuid(),
        src: action.payload,
      });
    },
  }
});


export const { addImage } = dataSlice.actions;

export default dataSlice.reducer;