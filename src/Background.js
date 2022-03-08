import React from 'react'
import { useDataLayerValue } from './DataLayer'
import './Background.css'

function Background() {
    const [{ actual_playlist, item }, dispatch] = useDataLayerValue();

    const removeBg = () => {
        dispatch({
            type: "SET_ACTUAL_BACKGROUND",
            background: null
        })
    }

  return (
    <div className='background_container' onClick={removeBg}>
        
        {/* 
        <img className='background_img' src={item.album.images[0].url} />
        */}

        <div className='background_img'></div>
        
        <h1 className='background_name'>{item.name}</h1>
        <h4 className='background_artists'>{item.artists.map((artist) => artist.name).join(", ")}</h4>
    </div>
  )
}

export default Background