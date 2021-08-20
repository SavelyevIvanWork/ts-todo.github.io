import React from 'react';

import './App.css';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import Grid from '@material-ui/core/Grid';
import {Button, Container, TextField, Typography} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import TodoForm from "./components/TodoForm";
import Filter from "./components/Filter";
import {useTypedSelector} from "./hooks/useTypedSelector";

const useStyles = makeStyles({
    containerApp: {
        width: '700px',
        paddingTop: '20px',
        paddingBottom: '50px'
    },
    appTitle: {
        fontSize: '60px',
        color: '#3f51b5',
        marginBottom: '30px'
    }
});

function App() {
    const classes = useStyles()
    const {todos} = useTypedSelector(state => state.todo)

    return (
        <>
            {/*<UserList/>*/}
            <Container className={classes.containerApp}>
                <Typography className={classes.appTitle} variant="h1" align="center">Todo List</Typography>
                <Grid container item justifyContent="center" xs={12}>
                    <TodoForm/>
                    <TodoList/>
                    {todos.length > 0 && <Filter/>}
                </Grid>

            </Container>
        </>
    );
}

export default App;
