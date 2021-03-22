import { ADD_TODO, REMOVE_TODOS, TOGGLE_TODO } from './todo.types';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const toggleTodoComplete = (todoId) => {
    return {
        type: TOGGLE_TODO,
        payload: todoId
    };
};

export const removeTodos = () => {
    return {
        type: REMOVE_TODOS
    };
};