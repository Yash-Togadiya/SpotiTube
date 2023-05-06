import React from "react";
import "./Playlists.css";

function Playlist() {
    return (
        <div className="playlist">
            <img src="https://picsum.photos/200/200.jpg" alt="400x400 img" />
            <h3>Playlist Name</h3>
        </div>
    );
}

function Playlists() {
    return (
        <>
            <h1>Playlists Name</h1>
            <div className="playlists">
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
            </div>
        </>
    );
}

export default Playlists;
