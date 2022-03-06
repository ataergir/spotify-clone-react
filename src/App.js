import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login.js';
import Player from './Player';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer"

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    //hide token in url bar
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {

      dispatch ({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
           user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      //PERSONAL DISCOVER WEEKLY
      spotify.getPlaylist("37i9dQZEVXcH4W5M97ejnz?gtm=1").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })

      //TODO
      spotify.getMyTopArtists().then((res) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: res,
        })
      })

      //TODO
      spotify.getMyDevices().then((res) => {
        dispatch({
          type: "SET_DEVICES",
          devices : res
        })
      })
      
    }

  }, []);


  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
