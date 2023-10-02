import { configureStore } from '@reduxjs/toolkit'
import genresReducer from './redux/slicers/genresSlicer'
import moviesReducer from './redux/slicers/searchMoviesSlicer'
import personReducer from "./redux/slicers/personSlicer"
import favoritesReducer from "./redux/slicers/favorite"

import populityReducer from './redux/slicers/populitySlicer'


export const store = configureStore({
  reducer: {
    genres: genresReducer,
    movies: moviesReducer,
    person: personReducer,
    favorites: favoritesReducer,
    populity: populityReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch