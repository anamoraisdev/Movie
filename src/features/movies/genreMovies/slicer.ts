import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../../app/service';



export const searchGenreMovies = createAsyncThunk(
  'genreMovies/search',
  apiService.genreMovies
);

export interface Movie{
  adult: boolean,
  backdrop_path: string,
  genre_ids: [],
  id: number,
  media_type: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video:boolean,
  vote_average: number,
  vote_count: number
}

export interface MoviesState{
  movies: Movie[]
}

const initialState: MoviesState = {
  movies: []
}

export const genreMoviesSlicer = createSlice({
  name: 'genreMovies',
  initialState,
  reducers: {

  },

  extraReducers: builder => {
    builder.addCase(
      searchGenreMovies.fulfilled,
      (state, { payload }) => {
        state.movies = payload
      }
    )
  }
})


export const { } = genreMoviesSlicer.actions

export default genreMoviesSlicer.reducer