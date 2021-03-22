import { ADD_SONG } from './song.types';

export const addSong = (song) => {
    return {
        type: ADD_SONG,
        payload: song
    };
};