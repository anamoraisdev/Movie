import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../service';
import { MovieSerie } from '../../interfaces/movieSerie';

export const searchMovies = createAsyncThunk(
  'movies/search',
  apiService.movies
);

export interface MoviesState{
  movies: MovieSerie[] | null 
  pageAtual: number 
  type?: string | null
  isFiltering?: boolean
  id?: number | null
  name?: string | null
  isMovieOrSerie: string
}

const initialState: MoviesState = {
  movies: null,
  pageAtual: 0,
  type: "",
  isFiltering: false,
  id: null,
  name: "",
  isMovieOrSerie:"",

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
       state.id = payload?.id
       state.isFiltering = payload?.isFiltering
       state.name = payload?.name
       state.type = payload?.type
       state.pageAtual = payload?.pageAtual
       state.movies = payload?.movies
       state.isMovieOrSerie = payload?.isMovieOrSerie
      }
    )
  }
})


export const {} = moviesSlicer.actions

export default moviesSlicer.reducer