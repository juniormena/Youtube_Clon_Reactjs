import React from 'react';
import '../App.css';
import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component{
    state={
        searchTerm:''
    }

    handleSearch=(e)=>{
        this.setState({ searchTerm:e.target.value})
    }

    handleSubmit=(e)=>{
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        e.preventDefault();

    }

    render(){
        return(
            <Paper elevation={6} className="SearchBar">
                <form onSubmit={this.handleSubmit}>
                <TextField fullWidth label="Search" onChange={this.handleSearch}></TextField>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;