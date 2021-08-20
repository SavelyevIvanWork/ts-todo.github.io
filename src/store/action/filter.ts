import {FilterAction, FilterActionTypes} from "../../types/filter";

export const sortAllTodos = (): FilterAction => {
    return {type: FilterActionTypes.SORT_ALL}
}
export const sortCurrentTodos = (): FilterAction => {
    return {type: FilterActionTypes.SORT_CURRENT}
}
export const sortCompletedTodos = (): FilterAction => {
    return {type: FilterActionTypes.SORT_COMPLETED}
}