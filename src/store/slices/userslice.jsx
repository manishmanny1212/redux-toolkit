import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        incremets(state,action) {

        },
        decrements(state , action){

        },
        addUser(state , action){
            state.push(action.payload)

        },
        removeUser(state,action){
            console.log( action.payload)
            const newState=state.filter((user)=>user !== action.payload)
            return  newState

        },
        removeAllUser(state,action) {
            state=[]
            return  state

        }

      },

})
// console.log(userSlice.actions)
export default userSlice.reducer
export const {addUser,removeUser, removeAllUser} = userSlice.actions