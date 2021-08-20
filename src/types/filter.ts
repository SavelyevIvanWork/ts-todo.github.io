export type FilterState = string

export enum FilterActionTypes {
    SORT_ALL = 'SORT_ALL',
    SORT_CURRENT = 'SORT_CURRENT',
    SORT_COMPLETED = 'SORT_COMPLETED',
}

interface FilterSortAllAction {
    type: FilterActionTypes.SORT_ALL
}
interface FilterSortCurrentAction {
    type: FilterActionTypes.SORT_CURRENT
}
interface FilterSortCompletedAction {
    type: FilterActionTypes.SORT_COMPLETED
}

export type FilterAction = FilterSortAllAction | FilterSortCurrentAction | FilterSortCompletedAction