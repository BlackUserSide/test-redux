export interface IStateTodo {
    id: number
    title: string
    content: string
}

export interface IActionTodo {
    type: string
    payload: IStateTodo
}