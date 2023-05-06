import { Utils } from "./Utils";

export class SongController {
    static async GetTenSongs() {
        let res = await fetch(Utils.hostURL + "/Songs/GetTopTenSongList", {
            method: "GET",
        });
        let retObj = res.json();
        return retObj;
    }
    static async GetTenRandomSongs() {
        let res = await fetch(Utils.hostURL + "/Songs/GetTenRandomSongList", {
            method: "GET",
        });
        let retObj = res.json();
        return retObj;
    }
    static async GetSongInfo(songId) {
        let res = await fetch(
            Utils.hostURL + "/Songs/GetSongInfo?Id=" + songId,
            { method: "GET" }
        );
        let retObj = res.json();
        return retObj;
    }
}

export class PlaylistController {
    static async GetTenPlaylists() {
        let res = await fetch(
            Utils.hostURL + "/Playlists/GetTopTenPlaylistList",
            { method: "GET" }
        );
        let retObj = res.json();
        return retObj;
    }
    static async GetPlaylistInfo(playlistId) {
        let res = await fetch(
            Utils.hostURL + "/Playlists/GetPlaylistInfo?Id=" + playlistId,
            { method: "GET" }
        );
        let retObj = res.json();
        return retObj;
    }
}

export class ArtistController {
    static async GetTenArtists() {
        let res = await fetch(Utils.hostURL + "/Artists/GetTopTenArtistList", {
            method: "GET",
        });
        let retObj = res.json();
        return retObj;
    }
    static async GetArtistSongsInfo(artistId) {
        let res = await fetch(
            Utils.hostURL + "/Artists/GetArtistSongsInfo?Id=" + artistId,
            { method: "GET" }
        );
        let retObj = res.json();
        return retObj;
    }
}
