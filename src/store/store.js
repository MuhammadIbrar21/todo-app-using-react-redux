import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'

// import { usersData } from "./users";
// import { productsData } from "./products";

// let mainShelf = combineReducers({
//     users: usersData.reducer,
//     products: productsData.reducer
// })

export let store = configureStore({
    reducer: todoReducer,
});