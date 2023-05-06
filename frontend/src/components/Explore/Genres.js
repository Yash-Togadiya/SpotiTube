import React from "react";
import "./Genres.css";

function Genre() {
    return (
        <div className="genre">
            <h2>Genre Name</h2>
            <img
                src="https://e7.pngegg.com/pngimages/744/256/png-clipart-color-music-symbols-note-music.png"
                alt=""
            />
        </div>
    );
}

function Genres() {
    return (
        <div className="genres">
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
            <Genre />
        </div>
    );
}

export default Genres;
