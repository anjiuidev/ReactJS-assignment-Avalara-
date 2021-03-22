import AddSong from "./AddSong";
import SongsList from "./SongsList";

function Songs() {
    return (
        <div className="row">
            <div className="col m5 s12">
                <AddSong />
            </div>
            <div className="col m7 s12">
                <SongsList />
            </div>
        </div>
    );
}

export default Songs;
