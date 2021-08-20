export interface TodoState {
    todos: TodoType[]
    loading: boolean
    error: null | string
    page: number
    limit: number
}

export type TodoType = {
    id: string,
    title: string,
    completed: boolean
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE',
    ADD_TODO = 'ADD_TODO',
    REMOVE_TODO = 'REMOVE_TODO',
    COMPLETED_TODO = 'COMPLETED_TODO',
    EDIT_TODO = 'EDIT_TODO'
}

interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface FetchTodosSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS
    payload: any[]
}
interface FetchTodosErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR
    payload: string
}
interface FetchSetTodoAction {
    type: TodoActionTypes.SET_TODO_PAGE
    payload: number
}

interface AddTodoAction {
    type: TodoActionTypes.ADD_TODO
    payload: TodoType
}

interface RemoveTodoAction {
    type: TodoActionTypes.REMOVE_TODO
    payload: string
}
interface CompletedTodoAction {
    type: TodoActionTypes.COMPLETED_TODO
    payload: string
}

interface EditTodoAction {
    type: TodoActionTypes.EDIT_TODO
    payload: {id: string, title: string}
}

export type TodoAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction
    | FetchSetTodoAction | AddTodoAction | RemoveTodoAction | CompletedTodoAction | EditTodoAction
