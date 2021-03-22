import { combineReducers } from 'redux';
import songsReducer from './songs/song.reducer';
import todosReducer from './todos/todo.reducer';

const rootReducer = combineReducers({
    todos: todosReducer,
    songs: songsReducer
});

export default rootReducer;