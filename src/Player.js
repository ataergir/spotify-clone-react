import React from 'react';
import './Player.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';
import Background from './Background'
import { useDataLayerValue } from './DataLayer'

function Player({ spotify }) {
  const [{ actual_playlist, background }, dispatch] = useDataLayerValue();


  return (
    <div className="player">

        {background ? 
        <Background />
        :
        <div className="player_body">
          <Sidebar spotify={spotify}/>
          <Body spotify={spotify} />
        </div>
        }
        

        <div className="player_footer">
          <Footer spotify={spotify} />
        </div>
    </div>
  )
}

export default Player