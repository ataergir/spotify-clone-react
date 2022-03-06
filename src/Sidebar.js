import React from 'react'
import './Sidebar.css'
import SidebarText from './SidebarText'
import SidebarIcon from './SidebarIcon'

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicSharpIcon from '@mui/icons-material/LibraryMusicSharp';

import { useDataLayerValue } from './DataLayer';

function Sidebar({spotify}) {
    //only gets playlists from the datalayer
    const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
        <div className="sidebarIcons">
          <SidebarIcon Icon={HomeIcon} />
          <SidebarIcon Icon={SearchIcon} />
          <SidebarIcon Icon={LibraryMusicSharpIcon} />
        </div>
        

        <br/>
        <strong className="sidebar_title">PLAYLISTS</strong>
        <hr/>

        {playlists?.items?.map(playlist => (
            <SidebarText title={playlist.name} playlist={playlist} spotify={spotify}/>
        ))}
        
    </div>
  )
}

export default Sidebar