import React,{useState, useRef, useEffect} from "react";
import Genres from "./Explore/Genres";
import Search from "./Explore/Search";
import Songs from "./Home/Songs";
import {SongController} from "../Controller/Db";

function Explore() {
    let [state, setState]=useState({songList:[]});

    useEffect(() => {
        let songRes = SongController.GetTenRandomSongs();
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
            <Search />
            {/* <Genres /> */}
            <Songs songList={state.songList} />
        </>
    );
}

export default Explore;
