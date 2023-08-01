import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../app/service';


export const searchMovies = createAsyncThunk(
  'movies/search',
  apiService.movies
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
      searchMovies.fulfilled,
      (state, {payload}) => {
        state.releases = payload
      }
    )
  }
})


export const {  } = moviesSlicer.actions

export default moviesSlicer.reducer