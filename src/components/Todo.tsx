import {Button, Checkbox, FormControl, Grid, ListItem, TextField, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {useActions} from "../hooks/useAction";
import clsx from 'clsx';
import makeStyles from "@material-ui/styles/makeStyles";

type Props = {
    title: string,
    completed: boolean,
    id: string
}

type EditInput = {
    isOpen: boolean,
    value: string
}

const useStyles = makeStyles({
    completed: {
        textDecoration: 'line-through'
    },
    todoItem: {
        textAlign: 'left'
    },
    edit: {
        width: '100%',
        '& div input': {
            padding: '8px !important'
        }
    }
});

const Todo = ({id, title, completed}: Props) => {
    const {removeTodo, completedTodo, editTodo} = useActions()
    const classes = useStyles()

    const [editInput, setEditInput] = useState<EditInput>(
        {
            isOpen: false,
            value: title
        })

    const onDeleteTodo = () => {
        removeTodo(id)
    }
    const onCompletedTodo = () => {
        completedTodo(id)
    }
    const onEditTodo = () => {
        setEditInput({...editInput, isOpen: true})
    }
    const onChangeInputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditInput({...editInput, value: e.target.value})
    }
    const oncl = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            editTodo(id, editInput.value)
            setEditInput({...editInput, isOpen: false})
        }
    }
    return (
        <ListItem>
            <Grid container justifyContent="space-between" alignItems="center" className={"MuiGrid-wrap-xs-nowrap"}
                  style={{border: '1px solid #1976d2'}}>
                <Checkbox
                    checked={completed}
                    onChange={onCompletedTodo}
                />
                <div style={{width: '100%'}}>
                    <Typography
                        className={clsx(completed && classes.completed)}
                        align='left'
                        style={{width: '100%'}}
                        onDoubleClick={onEditTodo}
                    >
                        {!editInput.isOpen && title}
                    </Typography>
                    {editInput.isOpen && <TextField
                        id="outlined-basic"
                        variant="outlined"
                        value={editInput.value}
                        autoFocus
                        onChange={onChangeInputTodo}
                        onKeyUp={oncl}
                        className={classes.edit}
                    />}
                </div>
                <Button
                    onClick={onDeleteTodo}
                    variant="contained"
                    color="secondary"
                    style={{margin: '9px'}}
                >
                    X
                </Button>
            </Grid>
        </ListItem>
    )
}

export default Todo