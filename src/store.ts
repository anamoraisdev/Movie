import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './features/genres/slicer'
import populityReducer from './features/movies/populity/slicer'
import moviesReducer from './features/movies/renderMovies/slicer'

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    moviesPopulity: populityReducer,
    movies: moviesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch