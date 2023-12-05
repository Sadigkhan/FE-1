import {
    createSlice
} from '@reduxjs/toolkit'

const initialState = {
    value: JSON.parse(localStorage.getItem('basket')) === null ? [] : JSON.parse(localStorage.getItem('basket')),
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.value.push(action.payload)
            localStorage.setItem("basket", JSON.stringify(state.value))
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    addToBasket,
} = basketSlice.actions

export default basketSlice.reducer