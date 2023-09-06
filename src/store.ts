import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './redux/slicers/genresSlicer'
import populityReducer from './redux/slicers/moviePopulitySlicer'
import moviesReducer from './redux/slicers/searchMoviesSlicer'
import seriesPopulityReducer from "./redux/slicers/seriesPopulitySlicer"
import personReducer from "./redux/slicers/personSlicer"
import favoritesReducer from "./redux/slicers/favorite"

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    moviesPopulity: populityReducer,
    movies: moviesReducer,
    seriesPopulity: seriesPopulityReducer,
    person: personReducer,
    favorites: favoritesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch