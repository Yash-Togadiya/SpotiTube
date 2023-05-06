import React,{useState, useEffect} from "react";
import Playlistgrid from "../components/Playlist/Playlistgrid";
import {PlaylistController, ArtistController} from "../Controller/Db";

function Library({artistId, playlistId, SetPlaySong}) {
    const [state, setState]=useState({
        songList:[]
    });
    console.log("library component...");
    console.log("ArtistId, PlaylistId",artistId,playlistId);
    useEffect(()=>{
        if(artistId != undefined && artistId != null && artistId != 0){
            let artistSongsRes=ArtistController.GetArtistSongsInfo(artistId);
            artistSongsRes.then((res)=>{
                console.log("ArtistSongsInfo:",res);
                setState((prevObj)=>{
                    return {...state, songList:res["ArtistSongs"]};
                });
            });
        }
        if(playlistId != undefined && playlistId != null && playlistId != 0){
            let playlistInfoRes=PlaylistController.GetPlaylistInfo(playlistId);
            playlistInfoRes.then((res)=>{
                console.log("PlayListInfo:",res);
                setState((prevObj)=>{
                    return {...state, songList:res["PlaylistInfo"]};
                });
            })
        }
    },[]);

    return (
        <div>
            <Playlistgrid artistId={artistId} playlistId={playlistId} songList={state.songList} SetPlaySong={SetPlaySong} />
        </div>
    );
}

export default Library;
