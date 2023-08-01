import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './features/movies/slicer'
import genresReducer from './features/genres/slicer'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    genres: genresReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch