import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../service";
import { Person } from "../../interfaces/person";

export const searchPerson = createAsyncThunk(
  'person/search',
  apiService.person
);


export interface PersonState{
  person: Person[] | undefined
  
 
}
const initialState: PersonState = {
  person: [],


}

export const personSlicer = createSlice({
  name: 'person',
  initialState,
  reducers: {
    

  },

  extraReducers: builder => {
    builder.addCase(
      searchPerson.fulfilled,
      (state, { payload }) => {
        state.person = payload
      }
    )
  }
})


export const { } = personSlicer.actions
export default personSlicer.reducer