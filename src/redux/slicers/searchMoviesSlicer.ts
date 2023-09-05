import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../service';
import { Movie } from '../../interfaces/movie';
import { Serie } from '../../interfaces/serie';



export const searchMovies = createAsyncThunk(
  'movies/search',
  apiService.movies
);

export interface MoviesState{
  movies: Movie[] | Serie[] | null | undefined
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