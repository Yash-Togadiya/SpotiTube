// const { Utils } = require("../../frontend/src/Controller/Utils.js");
const utils = require("../Utils.js");
const path = require("path");

const GetTopTenSongs = function (req, res, next) {
    utils.Connection.connect(async function (err1) {
        if (err1) {
            console.log(err1);
        }
        utils.Connection.query(
            "select s.SongId, s.Name as SongName, m.Name as MovieName, a.AliasName as ArtistName, m.ImageFileName from songs as s join movies as m on s.MovieId=m.MovieId join artistsinsong as ais on s.SongId=ais.SongId join artists as a on ais.ArtistId=a.ArtistId order by s.PlayCount desc limit 10;",
            function (err, result) {
                if (err) {
                    console.log(err);
                }
                // utils.Connection.end();
                if (result != null && result.length > 0) {
                    res.send({
                        Status: utils.Status.OK,
                        Msg: "Got list of songs",
                        Songs: result,
                    });
                    res.end();
                } else {
                    res.send({
                        Status: utils.Status.SongsNotFound,
                        Msg: "Didn't get list of songs",
                        Songs: null,
                    });
                    res.end();
                }
            }
        );
    });
};

const GetTenRandomSongs = function (req, res, next) {
    utils.Connection.connect(async function (err) {
        utils.Connection.query(
            "select s.SongId, s.Name as SongName, m.Name as MovieName, a.AliasName as ArtistName, m.ImageFileName from songs as s join movies as m on s.MovieId=m.MovieId join artistsinsong as ais on s.SongId=ais.SongId join artists as a on ais.ArtistId=a.ArtistId order by (rand()*1000) desc limit 10;",
            function (err, result) {
                if (result != null && result.length > 0) {
                    res.send({
                        Status: utils.Status.OK,
                        Msg: "Got list of songs",
                        Songs: result,
                    });
                    res.end();
                } else {
                    res.send({
                        Status: utils.Status.SongsNotFound,
                        Msg: "Didn't get list of songs",
                        Songs: null,
                    });
                    res.end();
                }
            }
        );
    });
};

const GetSongInfo = function (req, res, next) {
    utils.Connection.connect(async function (err) {
        utils.Connection.query(
            "select s.SongId, s.Name as SongName, s.FileName, a.ArtistId, a.Aliasname as ArtistName, m.ImageFileName from Songs as s join ArtistsInSong as ais on s.SongId=ais.SongId join Artists as a on ais.ArtistId=a.ArtistId join Movies as m on s.MovieId=m.MovieId where s.SongId=" +
                req.query.Id,
            function (err, result) {
                if (result != null && result.length > 0) {
                    res.send({
                        Status: utils.Status.OK,
                        Msg: "Got song info",
                        SongInfo: result[0],
                    });
                    //res.sendFile(path.join(utils.serverWorkingDirectoryPath, result[0]["Path"]));
                    res.end();
                } else {
                    res.send({
                        Status: utils.Status.SongsNotFound,
                        Msg: "Didn't get song info",
                        SongInfo: null,
                    });
                    res.end();
                }
            }
        );
    });
};

const GetSong = function (req, res, next) {
    console.log(req.params.FilePath);
    let filePath = path.join(
        utils.serverWorkingDirectoryPath,
        "App_Data/Songs",
        req.params.FilePath
    );
    res.download(
        filePath,
        req.params.FilePath // Remember to include file extension
        // (err) => {
        //     if (err) {
        //         res.send({
        //             error: err,
        //             msg: "Problem downloading the file",
        //         });
        //     }
        // }
    );
};

module.exports = { GetTopTenSongs, GetTenRandomSongs, GetSongInfo, GetSong };
