import React from "react";
import "./MusicPlayerPage.css";
//import {Song} from "../Home/Songs";

function Mainsection() {
    return (
        <div className="mainsection">
            <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e4a757106842361.5f99428d1aedd.jpg"
                alt="img"
            />
        </div>
    );
}

function Song() {
    return (
        <div className="song">
            <div className="songimg">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrqoJ3iKlgoTYz_gehV2NKVzzxwAE9E4_5VpOgZMpF80vjtyAdSaVJ6vp5C0Qp1KxlegA&usqp=CAU"
                    alt="img"
                />
            </div>
            <div className="songtitle">
                <h3>Song Name</h3>
                <h4>Artist Name</h4>
            </div>
        </div>
    );
}

function Queue() {
    return (
        <div className="Queue">
            <Song />
            <Song />
            <Song />
            <Song />
            <Song />
        </div>
    );
}

function MusicPlayerPage() {
    console.log("MusicPlayerPage component...");
    return (
        <div className="musicplayerpage">
            <Mainsection />
            <Queue />
        </div>
    );
}

export default MusicPlayerPage;
