const utils = require("../Utils.js");

const GetTopTenArtists = function (req, res, next) {
	utils.Connection.connect(async function (err) {
		utils.Connection.query("select distinct a.ArtistId, a.AliasName as ArtistName, a.ImageFileName from Artists as a join ArtistsInSong as ais on a.ArtistId=ais.ArtistId join Songs as s on ais.SongId=s.SongId order by s.PlayCount limit 10;", function (err, result) {
			if (result != null && result.length > 0) {
				res.send({ Status: utils.Status.OK, Msg: "Got list of artists", Artists: result });
				res.end();
			}
			else {
				res.send({ Status: utils.Status.ArtitsNotFound, Msg: "Didn't get list of artists", Artists: null });
				res.end();
			}
		});
	});
}

const GetArtistSongsInfo = function (req, res, next) {
	utils.Connection.connect(async function (err) {
		utils.Connection.query("select s.SongId, s.Name as SongName, a.ArtistId, a.AliasName as ArtistName, a.ImageFileName from Songs as s join ArtistsInSong as ais on s.SongId=ais.SongId join Artists as a on ais.ArtistId=a.ArtistId where a.ArtistId="+req.query["Id"], function (err, result) {
			if (result != null && result.length > 0) {
				res.send({ Status: utils.Status.OK, Msg: "Got artist song info", ArtistSongs: result });
				res.end();
			}
			else {
				res.send({ Status: utils.Status.ArtitsNotFound, Msg: "Didn't get artist song info", Artists: null });
				res.end();
			}
		});
	});
}

module.exports = { GetTopTenArtists, GetArtistSongsInfo };