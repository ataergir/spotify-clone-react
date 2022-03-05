import React from 'react'
import "./SidebarText.css"

function SidebarText({ title, url }) {
  function openPlaylist(url) {
    console.log(url);
  }

  return (
    <div className='sidebarText' onClick={() => openPlaylist(url)}>
        <p>{ title }</p>
    </div>
  )
}

export default SidebarText