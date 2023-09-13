import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../service';
import { MovieSerie } from '../../interfaces/movieSerie';





export const searchMovies = createAsyncThunk(
  'movies/search',
  apiService.movies
);



export interface MoviesState{
  movies: MovieSerie[] | null | undefined
  pageAtual: number | undefined
}

const initialState: MoviesState = {
  movies: null,
  pageAtual: 1
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
        state.movies = payload?.movies
        state.pageAtual = payload?.pageAtual
      }
    )
  }
})


export const {} = moviesSlicer.actions

export default moviesSlicer.reducer