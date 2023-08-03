import { configureStore } from '@reduxjs/toolkit'
import releasesReducer from './features/releases/slicer'
import genresReducer from './features/genres/slicer'
import moviesReducer from './features/movies/slicer'

export const store = configureStore({
  reducer: {
    releases: releasesReducer,
    genres: genresReducer,
    moviesPopulity: moviesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch