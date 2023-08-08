import { configureStore } from '@reduxjs/toolkit'
import releasesReducer from './features/movies/releases/slicer'
import genresReducer from './features/genres/slicer'
import populityReducer from './features/movies/populity/slicer'
import nowPlaying from './features/movies/nowPlaying/slicer'
import upcomingReducer from './features/movies/upcoming/slicer'
import moviesReducer from './features/movies/renderMovies/slicer'

export const store = configureStore({
  reducer: {
    releases: releasesReducer,
    genres: genresReducer,
    moviesPopulity: populityReducer,
    nowPlaying: nowPlaying,
    upcoming: upcomingReducer,
    movies: moviesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch