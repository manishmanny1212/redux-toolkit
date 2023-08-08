import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userslice';
import counterReducer from './slices/counterSlice';
import dropdownSlice from './slices/dropdownSlice';


const rootReducer = {
    user1: userReducer, 
    counter:counterReducer,
    dropdown:dropdownSlice
  };
const store = configureStore({
    reducer: rootReducer,
  });
  console.log(rootReducer)
  
  export default store;