import React from 'react';
import '../App.css';
import {Grid, Paper, Typography} from '@material-ui/core';

const VideoItem = ({item, onVideoSelect})=>{
    return(
        <Grid item xs={8}>
            <Paper className="videoItem" onClick={()=>onVideoSelect(item)}>
                <img className="imageItem" alt="thumbnail" src={item.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><b>{item.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}


export default VideoItem;