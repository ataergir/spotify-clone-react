import React, { useEffect, useState } from "react";
import './Footer.css'
import { useDataLayerValue } from "./DataLayer";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PauseIcon from '@mui/icons-material/Pause';

import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";

import { Grid, Slider } from "@material-ui/core";

function Footer({ spotify }) {

    const [{ token, item, playing }, dispatch] = useDataLayerValue();
    console.log("item before", item);

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            console.log("useeffect ", r);

            dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
            });

            dispatch({
            type: "SET_ITEM",
            item: r.item,
            });
        });
    }, [spotify]);

    const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
    };

    const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
        type: "SET_ITEM",
        item: r.item,
        });
        dispatch({
        type: "SET_PLAYING",
        playing: true,
        });
    });
    };

    const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({
        type: "SET_ITEM",
        item: r.item,
        });
        dispatch({
        type: "SET_PLAYING",
        playing: true,
        });
    });
    };

  return (
    <div className='footer'>
        <div className="footer_left">
            <img src={item?.album.images[0].url} className='footer_albumLogo' alt="" />

            {item ? (
            <div className="footer_song">
                <h4>{item.name}</h4>
                <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
            </div>
            ) : (
            <div className="footer_song">
                <h4>No song is playing</h4>
                <p>...</p>
            </div>
            )}

        </div>

        <div className="footer_center">
            <ShuffleIcon className='footer_icon'/>
            <SkipPreviousIcon className='footer_icon' onClick={skipPrevious}/>

            {playing ? (
            <PauseIcon
                onClick={handlePlayPause}
                fontSize="large"
                className="footer_icon"
            />
            ) : (
            <PlayArrowIcon
                onClick={handlePlayPause}
                fontSize="large"
                className="footer_icon"
            />
            )}

            <SkipNextIcon className='footer_icon' onClick={skipNext}/>
            <RepeatIcon className='footer_icon'/>
        </div>

        
        <div className="footer_right">
            {/*
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
            */}
        </div>
    </div>
  )
}

export default Footer