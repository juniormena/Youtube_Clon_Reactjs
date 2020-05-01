import React, { Component } from 'react';
import './App.css'
import { Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components';
import youtube from './api/youtube';


class App extends Component{
    state = {
        videos:[],
        selectedVideo:null
    }

    onVideoSelect=(video)=>{
        this.setState({
            selectedVideo: video
        })
    }

    componentDidMount(){
        this.handleSubmit('Netflix');
    }

    handleSubmit= async(searchTerm)=>{
        const response = await youtube.get('search', {
            params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyAosq09hguTne-hCAhyBhnHIsVdoi2haSY',
                q:searchTerm
            }
        });
        this.setState({videos:response.data.items, selectedVideo:response.data.items[1]})

    }
    render(){
        const { selectedVideo, videos} = this.state;
        return(
            
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            {/* Search Bar/*/}
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>

                        <Grid item xs={8}>
                             {/* video detail /*/}
                             <VideoDetail video={ selectedVideo} />
                        </Grid>

                        <Grid item xs={4}>
                             {/* video list /*/}
                           <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>     
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;