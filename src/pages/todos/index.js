import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import { removeTodos, toggleTodoComplete } from "../../redux/todos/todo.actions";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function Todos() {
    const { todos, isCompleted } = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const toggleTodo = (todoId) => dispatch(toggleTodoComplete(todoId));
    const deleteTodos = () => dispatch(removeTodos());

    return (
        <Fragment>
            <AddTodo />
            {todos.map((todo, index) => (
                <Todo
                    todo={todo}
                    toggleTodo={toggleTodo}
                    key={index}
                />
            ))}
            {todos.length ? 
                <Button disabled={!isCompleted} type="button" onClick={deleteTodos} text="Clear Completed Todos" /> : 
                <h6>No todos available.</h6>}
        </Fragment>
    );
}

export default Todos;
