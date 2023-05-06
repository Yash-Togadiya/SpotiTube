import "./App.css";
import Explore from "./components/Explore";
import Home from "./components/Home";
import Library from "./components/Library";
import Navbar from "./components/Navbar/Navbar";
import MusicPlayer from "./components/Player/MusicPlayer";
import MusicPlayerPage from "./components/Player/MusicPlayerPage";
import { useState, useEffect, useRef } from "react";
import { SongController } from "./Controller/Db";
import { Utils } from "./Controller/Utils";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
    console.log("App component...");
    const [state, setState] = useState({
        currentPlayingSongObj: null,
        artistId: null,
        playListId: null,
    });
    const navigate = useNavigate();
    function SetPlaySong(songObj) {
        let songInfoRes = SongController.GetSongInfo(songObj["SongId"]);
        songInfoRes.then((res) => {
            console.log("Song info", res);
            setState((prevObj) => {
                return {
                    ...state,
                    currentPlayingSongObj: {
                        SongName: res["SongInfo"]["SongName"],
                        SongId: res["SongInfo"]["SongId"],

                        ArtistName: res["SongInfo"]["ArtistName"],
                        FileName: res["SongInfo"]["FileName"],
                        ImageFileName: res["SongInfo"]["ImageFileName"],
                    },
                };
            });
        });
    }

    function SetArtistForLibrary(artistId) {
        setState((prevObj) => {
            return { ...state, artistId: artistId, playlistId: null };
        });
        navigate("/Library");
    }

    function SetPlaylistForLibrary(playlistId) {
        console.log("App PlaylistId:", playlistId);
        setState((prevObj) => {
            return { ...state, artistId: null, playlistId: playlistId };
        });
        navigate("/Library");
    }

    return (
        <div className="App">
            {/* <BrowserRouter> */}
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route
                        index
                        element={
                            <Home
                                SetPlaySong={SetPlaySong}
                                SetArtistForLibrary={SetArtistForLibrary}
                                SetPlaylistForLibrary={SetPlaylistForLibrary}
                            />
                        }
                    />
                    <Route path="Explore" element={<Explore />} />
                    <Route
                        path="Library"
                        element={
                            <Library
                                artistId={state.artistId}
                                playlistId={state.playlistId}
                                SetPlaySong={SetPlaySong}
                            />
                        }
                    />
                </Route>
            </Routes>
            {/* </BrowserRouter> */}

            {/* <Explore />
            <Library /> */}
            {/* <MusicPlayerPage /> */}
            <MusicPlayer currentPlayingSongObj={state.currentPlayingSongObj} />
        </div>
    );
}

export default App;
