import React,{ useEffect, useState, useRef } from "react";
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

import ProgressBar from './ProgressBar'
import { gsap } from "gsap";

function Footer({ spotify }) {

    const [{ item, playing, background, shuffle, repeat, playing_percentage }, dispatch] = useDataLayerValue()

    //album image animation
    const albumImg = useRef();
    //wait until DOM has been rendered
    //useEffect(() => {
    //    gsap.to(albumImg.current, { duration: 5.5, ease: "expo.out",   });
    //})


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
    };
    
    const skipPrevious = () => {
    spotify.skipToPrevious();
    };

    const setShuffle = () => {
        if(shuffle) {
            spotify.setShuffle(false)
            dispatch({
                type: "SET_SHUFFLE",
                shuffle: false,
              });
        } else {
            spotify.setShuffle(true)
            dispatch({
                type: "SET_SHUFFLE",
                shuffle: true,
              });
        }
        
    }

    const setRepeat = () => {
        if (repeat == "off") {
            spotify.setRepeat("context")
            dispatch({
                type: "SET_REPEAT",
                repeat: "context",
              })
        } else if(repeat == "context") {
            spotify.setRepeat("track")
            dispatch({
                type: "SET_REPEAT",
                repeat: "track",
              })
        } else if(repeat == "track") {
            spotify.setRepeat("off")
            dispatch({
                type: "SET_REPEAT",
                repeat: "off",
              })
        }
        
    }

    const albumToBg = () => {
        dispatch({
            type: "SET_ACTUAL_BACKGROUND",
            background: !background
        })
    }




  return (
    <div className={'footer ' + (background ?  'footer_bg' : '')}>
       
         <div className="footer_left">
             {item ? 
            <img ref={albumImg}
            src={item?.album.images[0].url}
            className=
            {"footer_albumLogo " +
            (background ? 'footer_albumLogo_background'
            : 
            "")
            }
            alt="" onClick={albumToBg}/>
            : ""}
            
            {item ? ( background == false ?
            <div className="footer_song">
                <h4>
                    {item.name.length<40 ? item.name : item.name.slice(0,40) + " ..."}
                </h4>
                <p>
                    {item.artists.map((artist) => artist.name).join(", ").length<30 
                    ? 
                    item.artists.map((artist) => artist.name).join(", ")
                    :
                    item.artists.map((artist) => artist.name).join(", ").slice(0,40) + "..."
                    }
                </p>
            </div>
            : ""
            ) : (
            <div className="footer_song">
                <h4>No song is playing</h4>
                <p>...</p>
            </div>
            )}

        </div>
        
        

        <div className={"footer_center " 
        +
        (background ? "footer_center_bg" 
        :
        "footer_margin")}>
            <ShuffleIcon className={(shuffle == false) ? "footer_icon graycolor" : "footer_icon" } onClick={setShuffle}/>
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

            <div className={
                (repeat == "off") ? "footer_icon_container graycolor" : 'footer_icon_container'}>
                <RepeatIcon className='footer_icon' onClick={setRepeat}/>
                <p className={
                    (repeat == "track") ? "opacity_full" : "opacity_none"
                }
                >1</p>
            </div>

            <div className="break"></div>
            
            <ProgressBar completed={playing_percentage} />

        </div>

        {background ?
        ""
        :
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
        }
        
    </div>
  )
}

export default Footer