import {IActionTodo, IStateTodo} from "../type";
import {ADD_TODO} from "./typeForActions";

export  const addTodo = (dataTodo: IStateTodo) => {
    const data:IActionTodo =  {
        type: ADD_TODO,
        payload: dataTodo
    }
    return data
}