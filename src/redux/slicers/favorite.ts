import { createSlice } from '@reduxjs/toolkit'
import { MovieSerie } from '../../interfaces/movieSerie'


const initialState: MovieSerie [] = []

export const favoritesSlicer = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addListFavorite: (state, action: {payload: MovieSerie}) => {
            state.push(action.payload)
            return state

        },

        deleteFavorite: (state, {payload}) => {
            const result = state.filter((item) => item.id !== payload)
            return result
        } 
    },

})


export const { addListFavorite, deleteFavorite } = favoritesSlicer.actions

export default favoritesSlicer.reducer