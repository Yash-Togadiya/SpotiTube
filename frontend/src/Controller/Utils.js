import { SongController } from "./Db";

export class Utils {
	static hostURL = "http://localhost:3001";
	static artistImagePath = Utils.hostURL + "/Images/Artists";
	static playlistImagePath = Utils.hostURL + "/Images/Playlists";
	static songImagePath = Utils.hostURL + "/Images/Songs";
	static songList = [];
	static currentPlayingSong = {};

	static GetTopTenSongsData() {
		let songRes = SongController.GetTenSongs();
		songRes.then((obj) => {
			if (obj["Songs"] != null && obj["Songs"].length > 1) {
				this.songList = obj["Songs"];

				console.log("Song Data:", this.songList);
			}
		});
	}
}