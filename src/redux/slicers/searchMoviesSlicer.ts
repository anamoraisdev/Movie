import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiService from '../service';
import { MovieSerie } from '../../interfaces/movieSerie';
import { Person } from '../../interfaces/person';

export const searchResultTitles = createAsyncThunk(
  'movies/search',
  apiService.getResultSearch
);

export interface MoviesState {
  id?: number | undefined
  resultSearch: Person[] | MovieSerie[] | undefined | null
  name?: string | undefined
  isFiltering?: boolean
  pageAtual: number | undefined
  totalPages: number | undefined
  totalResults: number | undefined
  searchModel?: string | undefined
  isMovieOrSerie: string | undefined
}

const initialState: MoviesState = {
  resultSearch: null,
  pageAtual: 0,
  searchModel: "",
  isFiltering: false,
  id: undefined,
  name: "",
  isMovieOrSerie: "",
  totalPages: 0,
  totalResults: 0,
}

export const moviesSlicer = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },

  extraReducers: builder => {
    builder.addCase(
      searchResultTitles.fulfilled,
      (state, { payload }) => {
        state.resultSearch = payload?.resultSearch
        state.id = payload?.id
        state.isFiltering = payload?.isFiltering
        state.name = payload?.name
        state.searchModel = payload?.searchModel
        state.pageAtual = payload?.pageAtual
        state.isMovieOrSerie = payload?.isMovieOrSerie
        state.totalPages = payload?.totalPages
        state.totalResults = payload?.totalResults

      }
    )
  }
})


export const { } = moviesSlicer.actions

export default moviesSlicer.reducer