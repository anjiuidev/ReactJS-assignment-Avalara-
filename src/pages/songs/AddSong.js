import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { addSong } from '../../redux/songs/song.actions';
import { useForm } from "react-hook-form";

const AddSong = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    const dispatch = useDispatch();
    const addSongItem = (song) => dispatch(addSong(song));

    const onSubmit = (data) => {
        console.log(data);
        if (data) {
            const { title, artist, time } = data;
            addSongItem({
                id: new Date().getTime(),
                title,
                artist,
                time,
                createdAt: new Date().toString()
            });
            reset();
        }
    };

    const onReset = (event) => {
        event.preventDefault();
        if (window.confirm('Are you sure want to Reset?')) {
            reset();
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input
                    type="text"
                    name="title"
                    data-testid="title"
                    placeholder="Title"
                    ref={register({ required: true })}
                />
                {errors.title && <small className="red-text text-darken-2">Title is required</small>}
            </div>
            <div className="form-group">
                <input
                    type="text"
                    name="artist"
                    data-testid="artist"
                    placeholder="Artist"
                    ref={register({ required: true })}
                />
                {errors.artist && <small className="red-text text-darken-2">Artist is required</small>}
            </div>
            <div className="form-group">
                <input
                    type="number"
                    min="0"
                    name="time"
                    data-testid="time"
                    placeholder="Time in Seconds"
                    ref={register({ required: true })}
                />
                {errors.time && <small className="red-text text-darken-2">Time is required</small>}
            </div>
            <div className="buttons-block">
                <Button type="submit" onClick={handleSubmit} text="Add" />
                <Button type="reset" onClick={onReset} text="Reset" />
            </div>
        </form>
    );
};

export default AddSong;
