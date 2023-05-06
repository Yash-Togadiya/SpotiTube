const path = require("path");
// const mysql = require("mysql");
const mysql = require("mysql2");
const Connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "spotitube",
});

const songsDir = path.join(__dirname, "App_Data/Songs");
const serverWorkingDirectoryPath = process.cwd();
const Status = {
    OK: 200,
    SongsNotFound: -1001,
    PlaylistsNotFound: -1002,
    ArtitsNotFound: -1003,
};

module.exports = { songsDir, Status, Connection, serverWorkingDirectoryPath };
