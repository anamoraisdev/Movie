import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiService from "../../app/service";

export const searchPerson = createAsyncThunk(
    'person/search',
    apiService.person
  );
  
  export interface seriesPopulityState {
    person: []
  }
  
  const initialState: seriesPopulityState = {
    person: []
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