import {combineReducers} from 'redux'
import {todoReducer} from "./todoContainer/todoReducer";
export  const rootReducer = combineReducers({todo: todoReducer})