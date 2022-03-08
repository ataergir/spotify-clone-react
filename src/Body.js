import React, { useEffect } from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import SongRow from './SongRow'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Body({spotify}) {
  console.log("BODY RELOAD")
  const [{ discover_weekly, actual_playlist, devices, user}, dispatch] = useDataLayerValue();

   //console.log("devices", devices.devices)
  const playSong = (id) => {
    spotify.play({
      uris: [`spotify:track:${id}`],
    })
    .then(() => {
      setTimeout(() => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        })
      }, 300)
    })
  };

  const playPlaylist = () => {
    spotify
      .play({
        context_uri: `${actual_playlist.uri}`,
      })
      
      setTimeout(() => {
        spotify.getMyCurrentPlayingTrack().then((song) => {
          dispatch({
            type: "SET_ITEM",
            item: song.item,
          })
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          })
        })
      }, 300)
      
  };


  //TODO
  {/* 
  
  const checkIfFollowing = () => {
    console.log(user.id)
    spotify.
      areFollowingPlaylist(
        actual_playlist.uri.replace("spotify:playlist:", ""),
        user.id
      )
  }
  
  if (actual_playlist){
    checkIfFollowing()
  }

  */}

  const followPlaylist = () => {
    if(true){
      spotify.
      followPlaylist(
        actual_playlist.uri.replace("spotify:playlist:", "")
      )
    } else {
      spotify.
      unfollowFollowPlaylist(
        actual_playlist.uri.replace("spotify:playlist:", "")
      )
    }
    
  }

  //////////////////////////////

  return (
    <div className='body'>
        {/*<Header spotify={spotify} />*/}


        {actual_playlist ? 
        <div className="body_info">
          <img src={actual_playlist?.images[0].url} alt="" />
          <div className="body_infoText">
            <h2>{actual_playlist?.name}</h2>
            <p>{actual_playlist?.description}</p>
          </div>
        </div> 
        :
        <div className="body_info">
          <img src={discover_weekly?.images[0].url} alt="" />
          <div className="body_infoText">
            <h2>{discover_weekly?.name}</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        }


        
      {actual_playlist ? 
      <div className="body_songs">
        <div className="body_icons">
          <PlayArrowIcon className='body_shuffle' onClick={playPlaylist} />
         
          {/* V TODO V */}
          <FavoriteIcon fontSize="large" onClick={followPlaylist}/>
          <MoreHorizIcon /> 
        </div>
        {actual_playlist?.tracks?.items?.map(item =>(
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
      :
      <div className="body_songs">
        <div className="body_icons">
          <PlayArrowIcon className='body_shuffle' onClick={playPlaylist} />
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks?.items?.map(item =>(
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
      }
    </div>
  )
}


export default Body