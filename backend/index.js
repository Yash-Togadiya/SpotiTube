const express = require("express");
const bodyParser = require("body-parser");
const songController = require("./Controller/SongController");
const playlistController = require("./Controller/PlaylistController");
const artistController = require("./Controller/ArtistController");
const utils = require("./Utils");
const path = require("path");
const cors = require("cors");

const app = express();

let portNumber = "3001";

app.use(cors());
app.use(bodyParser.json());

// /Songs Controller Starts
app.get("/Songs/GetTopTenSongList", songController.GetTopTenSongs);

app.get("/Songs/GetTenRandomSongList", songController.GetTenRandomSongs);

app.get("/Songs/GetSongInfo", songController.GetSongInfo);

app.get("/Songs/GetSong/:FilePath", songController.GetSong);

// /Songs Controller Ends

// /Playlists Controller Starts
app.get(
    "/Playlists/GetTopTenPlaylistList",
    playlistController.GetTopTenPlaylists
);

app.get("/Playlists/GetPlaylistInfo", playlistController.GetPlayListInfo);

// /Playlists Controller Ends

// /Artists Controller Starts
app.get("/Artists/GetTopTenArtistList", artistController.GetTopTenArtists);

app.get("/Artists/GetArtistSongsInfo", artistController.GetArtistSongsInfo);

// /Artists Controller Ends

// /Images Starts
app.get("/Images/Artists/:ArtistImageFileName", function (req, res, next) {
    console.log("Requested artist file name:", req.params.ArtistImageFileName);
    let filePath = path.join(
        utils.serverWorkingDirectoryPath,
        "App_Data/Images/Artists",
        req.params.ArtistImageFileName
    );
    res.download(
        filePath,
        req.params.ArtistImageFileName, // Remember to include file extension
        (err) => {
            if (err) {
                res.send({
                    error: err,
                    msg: "Problem downloading the file",
                });
            }
        }
    );
});

app.get("/Images/Playlists/:PlaylistImageFileName", function (req, res, next) {
    console.log(
        "Requested playlist file name:",
        req.params.PlaylistImageFileName
    );
    let filePath = path.join(
        utils.serverWorkingDirectoryPath,
        "App_Data/Images/Playlists",
        req.params.PlaylistImageFileName
    );
    res.download(
        filePath,
        req.params.PlaylistImageFileName, // Remember to include file extension
        (err) => {
            if (err) {
                res.send({
                    error: err,
                    msg: "Problem downloading the file",
                });
            }
        }
    );
});
app.get("/Images/Songs/:SongImageFileName", function (req, res, next) {
    console.log("Requested song file name:", req.params.SongImageFileName);
    let filePath = path.join(
        utils.serverWorkingDirectoryPath,
        "App_Data/Images/Movies",
        req.params.SongImageFileName
    );
    res.download(
        filePath,
        req.params.SongImageFileName, // Remember to include file extension
        (err) => {
            if (err) {
                res.send({
                    error: err,
                    msg: "Problem downloading the file",
                });
            }
        }
    );
});

// /Images Ends

app.listen(portNumber);
