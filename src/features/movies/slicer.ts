import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../app/service';


export const searchReleases = createAsyncThunk(
  'movies/search',
  apiService.releases
);

const initialState = { 
  movies: [],
  releases: []
} 

export const moviesSlicer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },

  extraReducers: builder => {
    builder.addCase(
      searchReleases.fulfilled,
      (state, {payload}) => {
        state.releases = payload
      }
    )
  }
})


export const {  } = moviesSlicer.actions

export default moviesSlicer.reducer