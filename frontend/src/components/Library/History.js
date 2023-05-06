import React from "react";
import "./History.css";

function HistoryItems() {
    return (
        <div className="historyitems">
            <img src="https://picsum.photos/200/200.jpg" alt="400x400 img" />
            <h3>Playlist Name</h3>
        </div>
    );
}

function History() {
    return (
        <>
            <h1>Recently Played</h1>
            <div className="history">
                <HistoryItems />
                <HistoryItems />
                <HistoryItems />
                <HistoryItems />
                <HistoryItems />
                <HistoryItems />
                <HistoryItems />
                <HistoryItems />
                <HistoryItems />
                <HistoryItems />
            </div>
        </>
    );
}

export default History;
