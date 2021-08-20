import React, {useEffect, useMemo} from "react";
import {useActions} from "../hooks/useAction";
import {useTypedSelector} from "../hooks/useTypedSelector";

import {List} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {FilterActionTypes} from "../types/filter";
import {TodoType} from "../types/todo";
import Todo from "./Todo";
import Loader from "./Loader";

const getVisibleTodos = (sort: FilterActionTypes, todos: TodoType[]) => {
    switch (sort) {
        case FilterActionTypes.SORT_ALL:
            return todos
        case FilterActionTypes.SORT_CURRENT:
            return todos.filter(todo => !todo.completed)
        case FilterActionTypes.SORT_COMPLETED:
            return todos.filter(todo => todo.completed)
        default:
            return todos
    }
}

const TodoList: React.FC = () => {
    const {page, error, loading, limit, todos} = useTypedSelector(state => state.todo)
    const sort = useTypedSelector(state => state.filter)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    const filterTodo = useMemo(() => getVisibleTodos(sort, todos), [sort, todos])

    return (
        <Grid container item justifyContent="center" xs={12}>
            {loading && <Loader />}
            {error && <h1>{error}</h1>}

            <List style={{width: '100%'}}>
                {filterTodo.map(todo =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />
                )}
            </List>
            {/*<div style={{display: 'flex'}}>*/}
            {/*    {pages.map(item =>*/}
            {/*        <div*/}
            {/*            onClick={() => setTodoPage(item)}*/}
            {/*            style={{border: item === page ? '2px solid green' : '1px solid gray', padding: 10, cursor: 'pointer'}}*/}
            {/*        >*/}
            {/*            {item}*/}
            {/*        </div>)}*/}
            {/*</div>*/}
        </Grid>
    )
}

export default TodoList