import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo"

const initialState: TodoState = {
    todos: [],
    page: 1,
    limit: 10,
    error: null,
    loading: false
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return {
                ...state,
                loading: true
            }
        case TodoActionTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case TodoActionTypes.FETCH_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case TodoActionTypes.SET_TODO_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TodoActionTypes.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case TodoActionTypes.COMPLETED_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        default:
            return state
    }
}