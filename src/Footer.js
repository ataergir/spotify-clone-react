import React from 'react'
import './Footer.css'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className='footer'>
        <div className="footer_left">
            <img src="https://m.media-amazon.com/images/I/71JcqoceqVL._SL1200_.jpg" className='footer_albumLogo' alt="" />


            <div className="footer_song">
                <h4>Sosa</h4>
                <p>ok</p>
            </div>
        </div>

        <div className="footer_center">
            <ShuffleIcon className='footer_icon'/>
            <SkipPreviousIcon className='footer_icon'/>
            <PlayArrowIcon fontSize='large' className='footer_icon'/>
            <SkipNextIcon className='footer_icon'/>
            <RepeatIcon className='footer_icon'/>
        </div>

        <div className="footer_right">
            <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayIcon className='footer_icon'/>
            </Grid>
            <Grid item>
                <VolumeDownIcon className='footer_icon'/>
            </Grid>
            <Grid item xs>
                <Slider aria-labelledby="continuous-slider" />
            </Grid>
            </Grid>
        </div>
    </div>
  )
}

export default Footer