import React, {useState, useRef, useEffect} from "react";
import "./RecommendedPlaylists.css";
import { PlaylistController } from "../../Controller/Db";
import { Utils } from "../../Controller/Utils";

function Playlist({playlistObj,SetPlaylistForLibrary}) {

    function SetPlaylist(PlaylistId){
        SetPlaylistForLibrary(PlaylistId);
    }
    return (
        <div className="playlist" onClick={()=>{SetPlaylist(playlistObj["playlistId"]);}}>
            <img src={Utils.playlistImagePath+"/"+playlistObj["playlistImageName"]} alt="400x400 img" />
            <h3>{playlistObj["playlistName"]}</h3>
        </div>
    );
}

function RecommendedPlaylists({SetPlaylistForLibrary}) {
    console.log("Playlist component...");
    let [state, setState]=useState({playlistList:[]});

    useEffect(()=>{
        let retObj=PlaylistController.GetTenPlaylists();
        retObj.then((obj)=>{
            if(obj["Playlists"]!= null && obj["Playlists"].length >0){
                setState((prevObj)=>{
                    return {...state, playlistList: obj["Playlists"]};
                });
            }
        });
    },[]);

    return (
        <>
            <h1>Recommanded Playlists</h1>
            <div className="playlists">
                {state.playlistList.map((obj)=>{
                  return <Playlist key={Math.ceil(Math.random() * 10000)} playlistObj={{playlistId:obj["PlaylistId"],playlistName:obj["PlaylistName"], playlistImageName:obj["ImageFileName"]}} SetPlaylistForLibrary={SetPlaylistForLibrary}/>  
                })}
            </div>
        </>
    );
}

export default RecommendedPlaylists;
