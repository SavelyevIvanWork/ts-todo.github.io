import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import {Button, TextField} from "@material-ui/core";
import makeStyles from "@material-ui/styles/makeStyles";
import {useActions} from "../hooks/useAction";
import {v4 as uuidv4} from 'uuid';

const useStyles = makeStyles({
    form: {
        width: '100%',
        padding: '16px'
    },
    formInput: {
        width: '80%'
    },
});

const TodoForm: React.FC = () => {
    const classes = useStyles()
    const {addTodo} = useActions()

    const [inputForm, setInputForm] = useState<string>('')

    const validationInputForm = (value: string) => {
        const reg = /^\s*$/;
        return !reg.test(value)
    }

    const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputForm(e.target.value)
    }

    const clickAddButton = (e: React.MouseEvent) => {
        e.preventDefault()
        if (validationInputForm(inputForm)) {
            addTodo({id: uuidv4(), title: inputForm, completed: false})
            setInputForm('')
        }
    }

    return (
        <Grid container item justifyContent="center" xs={12}>
            <form className={classes.form}>
                <Grid container justifyContent={"space-between"}>
                    <TextField
                        className={classes.formInput}
                        id="standard-basic"
                        placeholder="Add your todo"
                        value={inputForm}
                        onChange={changeInputHandler}
                        autoFocus
                    />
                    <Button
                        onClick={clickAddButton}
                        variant="contained"
                        color="primary">
                        Add
                    </Button>
                </Grid>
            </form>
        </Grid>
    )
}

export default TodoForm