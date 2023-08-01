import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import apiService from '../../app/service';


export const searchGenres = createAsyncThunk(
  'genres/search',
  apiService.genres
);

const initialState = {
  genres: []
}

export const genresSlicer = createSlice({
  name: 'genres',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(
      searchGenres.fulfilled,
      (state, {payload}) => {
        state.genres = payload
      }
    )
  }
})


export const {  } = genresSlicer.actions

export default genresSlicer.reducer