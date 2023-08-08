import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../../app/service';



export const searchMovies = createAsyncThunk(
  'movies/search',
  apiService.movies
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
  movies: [],
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