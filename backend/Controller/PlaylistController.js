const utils = require("../Utils.js");

const GetTopTenPlaylists = function (req, res, next) {
	utils.Connection.connect(async function (err) {
		utils.Connection.query("select PlaylistId, Name as PlaylistName, ImageFileName from Playlists order by VisitCount limit 10;", function (err, result) {
			if (result != null && result.length > 0) {
				res.send({ Status: utils.Status.OK, Msg: "Got list of playlists", Playlists: result });
				res.end();
			}
			else {
				res.send({ Status: utils.Status.PlaylistsNotFound, Msg: "Didn't get list of playlists", Playlists: null });
				res.end();
			}
		});
	});
}

const GetPlayListInfo = function (req, res, next) {
	utils.Connection.connect(async function (err) {
		utils.Connection.query("select s.SongId, s.Name as SongName, p.PlayListId, p.Name as PlaylistName from Songs as s join SongsInPlaylist as sp on s.SongId=sp.SongId join Playlists as p on sp.PlaylistId=p.PlaylistId where p.PlaylistId="+req.query["Id"], function (err, result) {
			if (result != null && result.length > 0) {
				res.send({ Status: utils.Status.OK, Msg: "Got playlist info", PlaylistInfo: result });
				res.end();
			}
			else {
				res.send({ Status: utils.Status.PlaylistsNotFound, Msg: "Didn't get playlist info", PlaylistInfo: null });
				res.end();
			}
		});
	});
}


module.exports = { GetTopTenPlaylists, GetPlayListInfo };