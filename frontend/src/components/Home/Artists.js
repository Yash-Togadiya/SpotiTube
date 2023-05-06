import React, { useState, useRef, useEffect } from "react";
import "./Artists.css";
import { ArtistController } from "../../Controller/Db";
import { Utils } from "../../Controller/Utils";

function Artist({ artistObj, SetArtistForLibrary }) {
    const [state, setState]=useState({});

    function SetArtist(artistId){
        SetArtistForLibrary(artistId);
    }

    return (
        <div className="artist" onClick={()=>{SetArtist(artistObj["artistId"])}}>
            <img
                src={Utils.artistImagePath+"/"+artistObj["artistImageName"]}
                alt="400x400 img"
            />
            <h3>{artistObj["artistName"]}</h3>
        </div>
    );
}

function Artists({SetArtistForLibrary}) {
    console.log("Artist component...");
    let [state, setState] = useState({ artistList: [] });

    useEffect(() => {
        let artistRes = ArtistController.GetTenArtists();
        artistRes.then((obj) => {
            if (obj["Artists"] != null && obj["Artists"].length > 1) {
                setState((prevObj) => {
                    return { ...state, artistList: obj["Artists"] };
                });
            }
        });
    }, []);
    return (
        <>
            <h1>Popular Artists</h1>
            <div className="artists">
                {state.artistList.map((obj) => {
                    return <Artist key={Math.ceil(Math.random() * 10000)} artistObj={{artistId:obj["ArtistId"], artistName:obj["ArtistName"], artistImageName:obj["ImageFileName"]}} SetArtistForLibrary={SetArtistForLibrary} />
                })}
            </div>
        </>
    );
}

export default Artists;
