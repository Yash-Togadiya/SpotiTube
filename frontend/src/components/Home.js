import React,{useState,useRef,useEffect} from "react";
import Artists from "./Home/Artists";
import RecommendedPlaylists from "./Home/RecommendedPlaylists";
import Songs from "./Home/Songs";
import {SongController} from "../Controller/Db";

function Home({SetPlaySong, SetArtistForLibrary, SetPlaylistForLibrary}) {
    let [state, setState]=useState({songList:[]});

    useEffect(() => {
        let songRes = SongController.GetTenSongs();
        songRes.then((obj) => {
            if (obj["Songs"] != null && obj["Songs"].length > 1) {
                setState((prevObj)=>{
                    return {...state, songList:obj["Songs"]}
                });

            }
        });
    },[]);
    return (
        <>
            <Songs SetPlaySong={SetPlaySong} songList={state.songList}/>
            <RecommendedPlaylists SetPlaylistForLibrary={SetPlaylistForLibrary} />
            <Artists SetArtistForLibrary={SetArtistForLibrary} />
        </>
    );
}

export default Home;
