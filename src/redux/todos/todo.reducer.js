import { ADD_TODO, REMOVE_TODOS, TOGGLE_TODO } from './todo.types';

const INITIAL_STATE = {
    todos: [],
    isCompleted: false
};

const todosReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case TOGGLE_TODO:
            const todos = state.todos.map(todo => (action.payload === todo.id) ? { ...todo, completed: !todo.completed } : todo);
            return {
                ...state,
                todos,
                isCompleted: todos.filter(todo => todo.completed).length
            };
        case REMOVE_TODOS:
            return {
                ...state, todos: state.todos.filter(todo => !todo.completed), isCompleted: false
            };
        default:
            return state;
    }
};

export default todosReducer;