import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../service';
import { Serie } from '../../interfaces/serie';

export const searchSeriesPopulity = createAsyncThunk(
  'seriesPopulity/search',
  apiService.seriesPopulity
);

export interface seriesPopulityState {
  AllDay: Serie[],
  topRated: Serie[],
  populity: Serie[],
  nowPlaying: Serie[]
}

const initialState: seriesPopulityState = {
  AllDay: [],
  topRated: [],
  populity: [],
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