import { createSlice } from "@reduxjs/toolkit";

const counter=createSlice({
    name:'counter',
    initialState:0,
    reducers: {
        Increments(state,action){
            console.log("console from increment ",state +1)
            return state +1
        },
        Decrement(state,action){

        },
        Reset(state,action){

        }
    }
})
console.log(counter)
export default counter.reducer
export const {Increments, Decrement,Reset}=counter.actions