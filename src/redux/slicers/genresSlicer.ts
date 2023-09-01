import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import apiService from '../service';
import { Genre } from '../../interfaces/genre';

const initialState: Genre[] = []

export const searchGenres = createAsyncThunk(
  'genres/search',
  apiService.genres
);

export const genresSlicer = createSlice({
  name: 'genres',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(
      searchGenres.fulfilled,
      (state, action) => {
        state = action.payload
        return state
      }
    )
  }
})


export const {  } = genresSlicer.actions

export default genresSlicer.reducer