import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Sponser } from "../../@types/types";
import { sponsers } from "../../services/sponsers";

export type SponserState = {
  sponsers: Sponser[];
};

const initialState: SponserState = {
  sponsers: sponsers,
};

export const sponsersSlice = createSlice({
  name: "sponsers",
  initialState,
  reducers: {
    addSponser: (state, action: PayloadAction<Sponser>) => {
      state.sponsers.push(action.payload);
      /* setStorage(state.sponsers); */
    },
    editSponser: (state, action: PayloadAction<Sponser>) => {
      const sponserToEdit = action.payload;
      const index = state.sponsers.findIndex((s) => s.id === sponserToEdit.id);
      state.sponsers[index] = sponserToEdit;
      /* setStorage(state.sponsers); */
    },
    deleteSponser: (state, action: PayloadAction<string>) => {
      const index = state.sponsers.findIndex((s) => s.id === action.payload);
      state.sponsers.splice(index, 1);
      /* setStorage(state.sponsers); */
    },
  },
});

/* function setStorage(arr: Sponser[]) {
  const arrToStorage = JSON.stringify(arr);
  localStorage.setItem("sponserArr", arrToStorage);
} */

export const { addSponser, editSponser, deleteSponser } = sponsersSlice.actions;
export default sponsersSlice.reducer;
