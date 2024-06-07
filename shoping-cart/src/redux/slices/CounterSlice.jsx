import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    val : 0,
}

export const CounterSlice = createSlice(
    {
        name : "counter",
        initialState,
        reducers : {
            increment : (state) => {state.val += 1},
            decrement : (state) => {state.val -= 1},
        }
    }
)

export const {increment , decrement} = CounterSlice.actions;
export default CounterSlice.reducer;