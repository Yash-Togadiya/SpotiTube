import React,{useState, useRef, useEffect} from "react";
import "./MusicPlayer.css";
import {SongController} from "../../Controller/Db";
import {Utils} from "../../Controller/Utils";

function MusicPlayer({currentPlayingSongObj}) {
    const [state, setState]=useState({IsDataReceive:false,currentPlayingSongObj:currentPlayingSongObj});
    console.log("FileName",currentPlayingSongObj);

    function GetAudioControl(){
        // setTimeout(() => {
        //    document.getElementById("AudioControl").play();
        // }, 2000);
        return  <audio id="AudioControl" src={Utils.hostURL+"/Songs/GetSong/"+currentPlayingSongObj["FileName"]} type="audio/mpeg" controls>
        </audio>;
    }

    return (
        <>
            {currentPlayingSongObj!=null?
                <div className="musicplayer">
            <img
                src={Utils.songImagePath+"/"+currentPlayingSongObj["ImageFileName"]}
                alt="img"
            />
            <div>
                <h3>{currentPlayingSongObj["SongName"]}</h3>
                <h4>{currentPlayingSongObj["ArtistName"]}</h4>
            </div>
           {currentPlayingSongObj["FileName"]!=null? 
           GetAudioControl()
          :
            <></>}
        </div>
            :<></>}
        </>
    );
}

export default MusicPlayer;
