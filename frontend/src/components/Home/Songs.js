import { SongController } from "../../Controller/Db";
import { Utils } from "../../Controller/Utils";
import { useState, useRef, useEffect } from "react";
import "./Songs.css";

export function Song({SetPlaySong, songObj }) {
     console.log("song component...", songObj);
     function SetSelectedSong(songId, songName, artistName){
         PlaySelectedSong(songId, songName, artistName);
        SetPlaySong(Utils.currentPlayingSong);
    }
    return (
        <div className="song" onClick={()=>{SetSelectedSong(songObj["songId"], songObj["songName"], songObj["artistName"])}}>
            <div className="songimg">
            <img
                src={Utils.songImagePath+"/"+songObj["songImageName"]}
                alt="img"
            />
            </div>
            <div className="songtitle">
                <h3>{songObj["songName"]}</h3>
                <h4>{songObj["artistName"]}</h4>
            </div>
        </div>
    );
}

export default function Songs({SetPlaySong, songList}) {
    console.log("Songs component...",songList);
    const[state, setState]=useState({temp:true});
    
    return (
        <>
            <h1>Recommanded Songs</h1>
            <div className="songs">
                {songList.map((obj) => {
                    return <Song key={Math.ceil(Math.random() * 10000)} SetPlaySong={SetPlaySong} songObj={{songId:obj["SongId"], songName:obj["SongName"], artistName:obj["ArtistName"], songImageName: obj["ImageFileName"]}} />
                })}
            </div>
        </>
    );
}

function PlaySelectedSong(songId, songName, artistName){
    console.log("Play selected song method called..", Utils.currentPlayingSong);
    Utils.currentPlayingSong={SongId: songId, SongName: songName, ArtistName: artistName};
}
