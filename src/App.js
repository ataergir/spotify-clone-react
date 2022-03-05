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

  //get user from the data layer
  const [{ user, token }, dispatch] = useDataLayerValue();

  //run code based on a given condition (only when App renders => [] (no condition) )
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
      // == setToken(_token);

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

      spotify.getPlaylist("37i9dQZEVXcH4W5M97ejnz?gtm=1").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })

      spotify.getMyTopArtists().then((response) => {
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
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
