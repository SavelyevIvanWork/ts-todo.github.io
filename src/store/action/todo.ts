import {Dispatch} from "redux";
import axios from "axios";
import {TodoType, TodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({type: TodoActionTypes.FETCH_TODOS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
            params: {_page: page, _limit: limit}
        })
        dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
    }
    catch (e) {
        dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, payload: 'Произошла ошибка, при загрузке todo!'})
    }
}

export const setTodoPage = (page: number): TodoAction => {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}

export const addTodo = (todo: TodoType): TodoAction => {
    return {type: TodoActionTypes.ADD_TODO, payload: todo}
}

export const removeTodo = (id: TodoType["id"]): TodoAction => {
    return {type: TodoActionTypes.REMOVE_TODO, payload: id}
}

export const completedTodo = (id: TodoType["id"]): TodoAction => {
    return {type: TodoActionTypes.COMPLETED_TODO, payload: id}
}
export const editTodo = (id: TodoType["id"], title: TodoType["title"]): TodoAction => {
    return {type: TodoActionTypes.EDIT_TODO, payload: {id, title}}
}