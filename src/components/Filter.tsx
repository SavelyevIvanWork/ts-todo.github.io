import {Button, Grid} from "@material-ui/core";
import React from "react";
import {useActions} from "../hooks/useAction";
import {useTypedSelector} from "../hooks/useTypedSelector";
import clsx from "clsx";
import {FilterActionTypes} from "../types/filter"


const Filter = () => {
    const sort = useTypedSelector(state => state.filter)
    const {sortAllTodos, sortCurrentTodos, sortCompletedTodos} = useActions()

    const onSortAllButton = () => {
        sortAllTodos()
    }
    const onSortCompletedButton = () => {
        sortCompletedTodos()
    }
    const onSortCurrentButton = () => {
        sortCurrentTodos()
    }
    return (
        <Grid container item justifyContent={"space-between"}>
            <Button
                onClick={onSortAllButton}
                variant="outlined"
                color="primary"
                className={clsx(sort === FilterActionTypes.SORT_ALL && 'Mui-disabled')}
            >
                All
            </Button>
            <Button
                onClick={onSortCurrentButton}
                variant="outlined"
                color="primary"
                className={clsx(sort === FilterActionTypes.SORT_CURRENT && 'Mui-disabled')}
            >
                Current
            </Button>
            <Button
                onClick={onSortCompletedButton}
                variant="outlined"
                color="primary"
                className={clsx(sort === FilterActionTypes.SORT_COMPLETED && 'Mui-disabled')}
            >
                Completed
            </Button>
        </Grid>
    )
}

export default  Filter