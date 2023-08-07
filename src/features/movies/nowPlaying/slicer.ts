import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../../app/service';


export const searchNowPlaying = createAsyncThunk(
  'nowPlaying/search',
  apiService.nowPlaying
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

export const nowPlayingSlicer = createSlice({
  name: 'nowPlaying',
  initialState,
  reducers: {

  },

  extraReducers: builder => {
    builder.addCase(
      searchNowPlaying.fulfilled,
      (state, { payload }) => {
        state.movies = payload
      }
    )
  }
})


export const { } = nowPlayingSlicer.actions

export default nowPlayingSlicer.reducer