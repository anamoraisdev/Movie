import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../service';
import { MovieSerie } from '../../interfaces/movieSerie';



export const searchMoviesPopulity = createAsyncThunk(
  'moviesPopulity/search',
  apiService.moviesPopulity
);

export interface MoviesPopulityState{
  moviesAllDay: MovieSerie[] | undefined,
  upcoming: MovieSerie[] | undefined,
  topRated: MovieSerie[] | undefined,
  nowPlaying: MovieSerie[] | undefined
}

const initialState: MoviesPopulityState = {
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