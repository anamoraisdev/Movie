import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../service';
import { MovieSerie } from '../../interfaces/movieSerie';

export const searchSeriesPopulity = createAsyncThunk(
  'seriesPopulity/search',
  apiService.seriesPopulity
);

export interface seriesPopulityState {
  AllDay: MovieSerie[] | undefined,
  topRated: MovieSerie[] | undefined,
  nowPlaying: MovieSerie[] | undefined
}

const initialState: seriesPopulityState = {
  AllDay: [],
  topRated: [],
  nowPlaying: []
}

export const seriesPopulitySlicer = createSlice({
  name: 'seriesPopulity',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      
    }
  },
  extraReducers: builder => {
    builder.addCase(
      searchSeriesPopulity.fulfilled,
      (state, { payload }) => {
        state.AllDay = payload?.allDay
        state.nowPlaying = payload?.nowPlaying
        state.topRated = payload?.topRated
      }
    )
  }
})


export const { addFavorite} = seriesPopulitySlicer.actions

export default seriesPopulitySlicer.reducer