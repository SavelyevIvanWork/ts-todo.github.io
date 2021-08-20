import {FilterAction, FilterActionTypes, FilterState} from "../../types/filter";

export const filterReducer = (state = FilterActionTypes.SORT_ALL, action: FilterAction): FilterState => {
    switch (action.type) {
        case FilterActionTypes.SORT_ALL:
            return FilterActionTypes.SORT_ALL
        case FilterActionTypes.SORT_COMPLETED:
            return FilterActionTypes.SORT_COMPLETED
        case FilterActionTypes.SORT_CURRENT:
            return FilterActionTypes.SORT_CURRENT
        default:
            return state
    }
}