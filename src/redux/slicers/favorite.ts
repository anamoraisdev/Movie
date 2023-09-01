import { createSlice } from '@reduxjs/toolkit'
import { Movie } from '../../interfaces/movie'

const initialState : Movie[] = []

export const favoritesSlicer = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addListFavorite: (state, {payload}) => {
            state.push(payload)
            return state
        },

        deleteFavorite: (state, action) => {
            state.filter((item) => item?.id !== action.payload)
            return state
        }
     
    },

})


export const { addListFavorite, deleteFavorite } = favoritesSlicer.actions

export default favoritesSlicer.reducer