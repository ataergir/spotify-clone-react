import React from 'react'
import "./SidebarText.css"
import  { useDataLayerValue } from './DataLayer'

function SidebarText({ title, playlist, spotify }) {

  const [{ actual_playlist }, dispatch] = useDataLayerValue();

  const openPlaylist = (playlist) => {

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