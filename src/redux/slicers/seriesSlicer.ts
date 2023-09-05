import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../service';
import { Serie } from '../../interfaces/serie';

export const searchSeriesPopulity = createAsyncThunk(
  'seriesPopulity/search',
  apiService.seriesPopulity
);

export interface seriesPopulityState {
  AllDay: Serie[] | undefined,
  topRated: Serie[] | undefined,
  nowPlaying: Serie[] | undefined
}

const initialState: seriesPopulityState = {
  AllDay: [],
  topRated: [],
  nowPlaying: []
}

export const seriesPopulitySlicer = createSlice({
  name: 'seriesPopulity',
  initialState,
  reducers: {},
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


export const { } = seriesPopulitySlicer.actions

export default seriesPopulitySlicer.reducer