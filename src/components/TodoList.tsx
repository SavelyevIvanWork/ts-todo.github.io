import React, {useEffect} from "react";
import {useActions} from "../hooks/useAction";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Todo from "./Todo";
import {List} from "@material-ui/core";

const TodoList: React.FC = () => {
    const {page, error, loading, limit, todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])
    return (
        <>
            {loading && <h1>Идёт загрузка...</h1>}
            {error && <h1>{error}</h1>}

            <List style={{width: '50%'}}>
                {todos.map(todo =>
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
        </>
    )
}

export default TodoList