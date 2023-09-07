import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../service';




export const searchMovies = createAsyncThunk(
  'movies/search',
  apiService.movies
);

export interface Search{
  id: number,
  name: string,
  poster: string,
}

export interface MoviesState{
  movies: Search[]| null 
}

const initialState: MoviesState = {
  movies: null,
}

export const moviesSlicer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
},

  extraReducers: builder => {
    builder.addCase(
      searchMovies.fulfilled,
      (state, { payload }) => {
        state.movies = payload
      }
    )
  }
})


export const {} = moviesSlicer.actions

export default moviesSlicer.reducer