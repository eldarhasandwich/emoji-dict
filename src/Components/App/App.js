import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import { AppBar, Toolbar, Grid, Paper } from '@material-ui/core';
import EmojiList from '../List/EmojiList';
import EmojiInfo from '../Information/EmojiInfo';

class App extends Component {
    render() {
        return (
            <div className="App">
            
                <AppBar position="static">
                    <Toolbar>
                        <h1>EmojiDict</h1>

                    </Toolbar>
                </AppBar>

                <Grid container spacing={24} style={{width:"98%", margin:"auto"}}>

                    <Grid item xs={12} sm={3}>
                        <EmojiList/>
                    </Grid>

                    <Grid item xs={12} sm={9}>
                        <EmojiInfo/>
                    </Grid>

                </Grid>
            
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)