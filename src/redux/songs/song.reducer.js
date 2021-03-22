import { ADD_SONG } from './song.types';

const INITIAL_STATE = {
    songs: JSON.parse(localStorage.getItem('songs')) || [],
};

const songsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_SONG:
            let oldSongs = JSON.parse(localStorage.getItem('songs')) || [];
            oldSongs.push(action.payload);
            localStorage.setItem('songs', JSON.stringify(oldSongs));
            return {
                ...state,
                songs: [...state.songs, action.payload]
            };
        default:
            return state;
    }
};

export default songsReducer;