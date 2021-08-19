import {Button, Checkbox, Grid, ListItem, Typography} from "@material-ui/core";
import React from "react";
import { useActions } from "../hooks/useAction";
import clsx from 'clsx';
import makeStyles from "@material-ui/styles/makeStyles";


type Props = {
    title: string,
    completed: boolean,
    id: string
}

const useStyles = makeStyles({
    completed: {
        textDecoration: 'line-through'
    }
});

const Todo = ({id, title, completed}: Props) => {
    const {removeTodo, completedTodo} = useActions()
    const classes = useStyles()

    const onDeleteTodo = () => {
        removeTodo(id)
    }
    const onCompletedTodo = () => {
        completedTodo(id)
    }

    return (
        <ListItem>
            <Grid container justifyContent="space-between" alignItems="center" className={"MuiGrid-wrap-xs-nowrap"}>
                <Checkbox
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                    onChange={onCompletedTodo}
                />
                <Typography className={clsx(completed && classes.completed)}>{title}</Typography>
                <Button
                    onClick={onDeleteTodo}
                    variant="contained"
                    color="secondary">
                    X
                </Button>
            </Grid>
        </ListItem>
    )
}

export default Todo