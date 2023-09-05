import { createSlice } from '@reduxjs/toolkit'



export const favoritesSlicer = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addListFavorite: (state, action) => {
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