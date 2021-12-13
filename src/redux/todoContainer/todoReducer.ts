import {IActionTodo, IStateTodo} from "../type";
import {ADD_TODO} from "./typeForActions";
const initState:IStateTodo[] = []
export const todoReducer  = (state:IStateTodo[] = initState, action: IActionTodo) => {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.payload)
        default: return state
    }
}