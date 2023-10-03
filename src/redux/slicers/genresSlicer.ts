import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import apiService from '../service';
import { Genre } from '../../interfaces/genre';


export const searchGenres = createAsyncThunk(
  'genres/search',
  apiService.genres
);
  
export interface State{
  state: Genre[] | undefined 
}
const initialState: State = {
  state: []
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
        state.state = payload
      }
    )
  }
})


export const {  } = genresSlicer.actions

export default genresSlicer.reducer