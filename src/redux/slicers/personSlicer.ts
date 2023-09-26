import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../service";
import { Person } from "../../interfaces/person";

export const searchPerson = createAsyncThunk(
  'person/search',
  apiService.person
);


export interface PersonState{
  person: Person[] | undefined
  search: Person[] | undefined | null
 
}
const initialState: PersonState = {
  person: [],
  search: [],

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
        state.person = payload?.person
        state.search= payload?.search
     
      }
    )
  }
})


export const { } = personSlicer.actions
export default personSlicer.reducer