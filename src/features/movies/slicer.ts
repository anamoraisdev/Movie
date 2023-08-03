import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../app/service';


export const searchReleases = createAsyncThunk(
  'movies/search',
  apiService.releases
);

export interface Release{
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
  movies: []
  releases: Release[]
}

const initialState = {
  movies: [],
  releases: []
}



export const moviesSlicer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },

  extraReducers: builder => {
    builder.addCase(
      searchReleases.fulfilled,
      (state, { payload }) => {
        state.releases = payload
      }
    )
  }
})


export const { } = moviesSlicer.actions

export default moviesSlicer.reducer