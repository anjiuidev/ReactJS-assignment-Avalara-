import { useSelector } from "react-redux";

function SongsList() {
    const { songs } = useSelector(state => state.songs);
    return (
        <table className="highlight table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {songs.length ? songs.map(song => (
                    <tr key={song.id}>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{Math.floor(song.time / 60)} min</td>
                    </tr>
                )) : <tr><td colSpan="3" className="center-align">No songs available.</td></tr>}
            </tbody>
        </table>
    );
}

export default SongsList;
