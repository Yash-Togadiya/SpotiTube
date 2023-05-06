import React,{useState, useEffect} from "react";
import "./Playlistgrid.css";

function Playlistgrid({artistId, playlistId, songList, SetPlaySong}) {
    const [state, setState]=useState({});
    console.log("Playlistgrid songlist:",songList);
    function PlaySong(songId){
        SetPlaySong({SongId:songId});
    }
    return (
        <div className="playlistgrid">
            <div className="playlistimg">
                <img
                    src="https://t4.ftcdn.net/jpg/05/65/29/91/240_F_565299140_9QjAaoEpcaHKI4HJdyEdtJJ8f3V6RwlY.jpg"
                    alt="img"
                />
                {/* <img
                    src="https://t3.ftcdn.net/jpg/05/42/88/46/240_F_542884696_2Zz1Rh3YNfVeUyelLPOYGdvxnGA9WMIb.jpg"
                    alt="img"
                /> */}
                <h1>{songList != null && songList.length >0 ?artistId!=null ? songList[0]["ArtistName"] : songList[0]["PlaylistName"]: "" }</h1>
            </div>
            <div className="playlistgriditems">
                <ul>
                    {songList!=null && songList.length>0?
                    songList.map((obj)=>{
                        return <li key={Math.ceil(Math.random() * 10000)} onClick={()=>{PlaySong(obj["SongId"])}}>{obj["SongName"]}</li>
                    })
                    :""}
                </ul>
            </div>
        </div>
    );
}

export default Playlistgrid;
