import React from 'react';

import './App.css';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import Grid from '@material-ui/core/Grid';
import {Button, Container, TextField, Typography} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import TodoForm from "./components/TodoForm";

const useStyles = makeStyles({
});

function App() {

    return (
        <>
            {/*<UserList/>*/}
            <Container>
                <Typography variant="h1" align="center">Todo List</Typography>
                <Grid container item justifyContent="center" xs={12}>
                    <TodoForm />
                    <Grid container item justifyContent="center" xs={12}>
                        <TodoList/>
                    </Grid>
                </Grid>

            </Container>
        </>
    );
}

export default App;
