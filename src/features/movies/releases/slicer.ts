import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../../../app/service';



export const searchReleases = createAsyncThunk(
  'releases/search',
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

export interface ReleasesState{
  releases: Release[]
}

const initialState: ReleasesState = {
  releases: []
}

export const releaseSlicer = createSlice({
  name: 'releases',
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


export const { } = releaseSlicer.actions

export default releaseSlicer.reducer