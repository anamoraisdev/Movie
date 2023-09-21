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
  type?: string | null | undefined
  isFiltering?: boolean
  id?: number | null
  name?: string | null 
  isMovieOrSerie: string | undefined
  totalPages: number | undefined
  totalResults: number | undefined
}

const initialState: MoviesState = {
  movies: null,
  pageAtual: 0,
  type: "",
  isFiltering: false,
  id: null,
  name: "",
  isMovieOrSerie:"",
  totalPages: 0,
  totalResults: 0,
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
       state.totalPages = payload?.totalPages
       state.totalResults = payload?.totalResults
      }
    )
  }
})


export const {} = moviesSlicer.actions

export default moviesSlicer.reducer