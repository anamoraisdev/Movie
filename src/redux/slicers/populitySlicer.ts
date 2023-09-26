import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { MovieSerie } from '../../interfaces/movieSerie';
import apiService from '../service';

export const searchPopulity = createAsyncThunk(
  'populity/getPopulity',
  apiService.getPopulity
);


export interface Populity {
  allDay: MovieSerie[] | undefined 
  topRated: MovieSerie[] | undefined 
  nowPlaying: MovieSerie[] | undefined 
  upcoming: MovieSerie[] | undefined 
}

const initial: Populity = {
  allDay: [],
  topRated: [],
  nowPlaying: [],
  upcoming: [],
}

export interface PopulityState {
  movies: Populity | undefined ,
  series: Populity | undefined
}

const initialState: PopulityState = {
  movies: initial,
  series: initial
}

export const PopulitySlicer = createSlice({
  name: 'populity',
  initialState,
  reducers: {
  },

  extraReducers: builder => {
    builder.addCase(
      searchPopulity.fulfilled,
      (state, { payload }) => {
        state.movies = payload.movies,
        state.series = payload.series
      }
    )
  }
})


export const { } = PopulitySlicer.actions

export default PopulitySlicer.reducer