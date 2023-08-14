import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../../app/service';



export const searchMoviesPopulity = createAsyncThunk(
  'moviesPopulity/search',
  apiService.populity
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
  moviesAllDay: Movie[],
  upcoming: Movie[],
  topRated: Movie[],
  nowPlaying: Movie[]
}

const initialState: MoviesState = {
  moviesAllDay: [],
  upcoming: [],
  topRated: [],
  nowPlaying: []
}

export const moviesPopulitySlicer = createSlice({
  name: 'moviesPopulity',
  initialState,
  reducers: {
    
  },

  extraReducers: builder => {
    builder.addCase(
      searchMoviesPopulity.fulfilled,
      (state, { payload }) => {
        state.moviesAllDay = payload?.moviesAllDay,
        state.nowPlaying = payload?.nowPlaying,
        state.upcoming = payload?.upcoming,
        state.topRated = payload?.topRated
      }
    )
  }
})


export const {} = moviesPopulitySlicer.actions

export default moviesPopulitySlicer.reducer