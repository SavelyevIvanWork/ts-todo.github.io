import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { filterReducer } from "./filterReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    filter: filterReducer
})

export type RootState = ReturnType<typeof  rootReducer>