import React from 'react'
import "./SidebarText.css"
import  { useDataLayerValue } from './DataLayer'


////////////////////////test
import SpotifyWebApi from "spotify-web-api-js";


//////////////// est-il possible d'importer depuis App.js au lieu de recréer ???
const spotify = new SpotifyWebApi();

function SidebarText({ title, playlist }) {

  const [{ actual_playlist }, dispatch] = useDataLayerValue();

  const openPlaylist = (playlist) => {

    ////////////test
    spotify.getPlaylist(playlist.id).then(response => {
      dispatch({
        type: "SET_ACTUAL_PLAYLIST",
        actual_playlist: response,
      })
    })
  }

  return (
    <div className='sidebarText' onClick={() => openPlaylist(playlist)}>
        <p>{ title }</p>
    </div>
  )
}

export default SidebarText