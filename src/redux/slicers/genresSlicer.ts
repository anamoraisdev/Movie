import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import apiService from '../service';
import { Genre } from '../../interfaces/genre';


export const searchGenres = createAsyncThunk(
  'genres/search',
  apiService.genres
);
  
const initialState: Genre[] = []

export const genresSlicer = createSlice({
  name: 'genres',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder.addCase(
      searchGenres.fulfilled,
      (state, {payload}) => {
        return payload
      }
    )
  }
})


export const {  } = genresSlicer.actions

export default genresSlicer.reducer