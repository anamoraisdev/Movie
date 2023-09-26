import { createSlice } from '@reduxjs/toolkit'
import { MovieSerie } from '../../interfaces/movieSerie'


export interface FavoritesState {
  all: MovieSerie[]
  filteredSeries: MovieSerie[]
  filteredMovies: MovieSerie[]
}

const initialState: FavoritesState = {
  all: JSON.parse(localStorage.getItem("favoritos")) || [], 
  filteredSeries: [],
  filteredMovies: [],
} 
  

export const favoritesSlicer = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addListFavorite: (state, action: {payload: MovieSerie}) => {
            state.all.push(action.payload)
            localStorage.setItem("favoritos", JSON.stringify(state.all))
            return state
        },

        deleteFavorite: (state, {payload}) => {
            const result = state.all.filter((item) => item.id !== payload)
            state.all = result
            localStorage.setItem("favoritos", JSON.stringify(state.all))
            return state
        },

        filterFavoriteForGenre: (state, action: {payload: string | null}) => {
            if(action.payload === "movie"){
                const array = state.all
                const result = array.filter((itemState) => itemState.isMovie)
                console.log("if movie", result)
                state.filteredMovies = result
                return state
            }else if(action.payload === "serie"){
                const array = state.all
                const result =  array.filter((itemState) => !itemState.isMovie)
                console.log("if serie", result)
                state.filteredSeries = result
                return state
            }else{
                console.log("if all", state)
                return state
            }
        },
    },

})


export const { addListFavorite, deleteFavorite, filterFavoriteForGenre} = favoritesSlicer.actions

export default favoritesSlicer.reducer