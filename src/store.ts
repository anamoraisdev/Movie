import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './redux/genres/slicer'
import populityReducer from './redux/movies/populity/slicer'
import moviesReducer from './redux/movies/renderMovies/slicer'
import seriesPopulityReducer from "./redux/series/slicer"

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    moviesPopulity: populityReducer,
    movies: moviesReducer,
    seriesPopulity: seriesPopulityReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch