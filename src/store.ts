import { configureStore } from '@reduxjs/toolkit'
import releasesReducer from './features/movies/releases/slicer'
import genresReducer from './features/genres/slicer'
import moviesReducer from './features/movies/populity/slicer'
import upcomingReducer from './features/movies/nowPlaying/slicer'

export const store = configureStore({
  reducer: {
    releases: releasesReducer,
    genres: genresReducer,
    moviesPopulity: moviesReducer,
    nowPlaying: upcomingReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch