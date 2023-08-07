import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../../app/service';




export const searchUpcoming = createAsyncThunk(
  'upcoming/search',
  apiService.upcoming
);

export interface Upcoming{
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
  movies: Upcoming[]
}

const initialState: MoviesState = {
  movies: []
}

export const upcomingSlicer = createSlice({
  name: 'upcoming',
  initialState,
  reducers: {

  },

  extraReducers: builder => {
    builder.addCase(
      searchUpcoming.fulfilled,
      (state, { payload }) => {
        state.movies = payload
      }
    )
  }
})


export const { } = upcomingSlicer.actions

export default upcomingSlicer.reducer