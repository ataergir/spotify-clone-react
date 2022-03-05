import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicSharpIcon from '@mui/icons-material/LibraryMusicSharp';

import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    //only gets playlists from the datalayer
    const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search"/>
        <SidebarOption Icon={LibraryMusicSharpIcon} title="Library"/>

        <br/>
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr/>

        {playlists?.items?.map(playlist => (
            <SidebarOption title={playlist.name}/>
        ))}
        
    </div>
  )
}

export default Sidebar