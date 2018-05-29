import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import { AppBar, Toolbar, Grid } from '@material-ui/core';
import EmojiList from '../List/EmojiList';
import EmojiInfo from '../Information/EmojiInfo';

import * as StateActions from '../../Actions/state'
import * as ResponsiveActions from '../../Actions/responsive'

class App extends Component {

    componentWillMount() {
        this.props.pullEmojis()
        this.props.resizeWindow(window.innerWidth, window.innerHeight)
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
      
    handleWindowSizeChange = () => {
        this.props.resizeWindow(window.innerWidth, window.innerHeight)
    };

    render() {
        return (
            <div className="App">
            
                <AppBar position="static">
                    <Toolbar>
                        <h1>EmojiDict</h1>

                    </Toolbar>
                </AppBar>

                <Grid container spacing={24} style={{width:"98%", margin:"auto"}}>

                    {
                        !this.props.state.selected_id || this.props.responsive.windowWidth > 600
                            ?   <Grid item xs={12} sm={6} md={5} lg={3}>
                                    <EmojiList/>
                                </Grid>
                            :   null
                    }

                    {
                        this.props.state.selected_id || this.props.responsive.windowWidth > 600
                            ?   <Grid item xs={12} sm={6} md={7} lg={9}>
                                    <EmojiInfo/>
                                </Grid>
                            :   null
                    }

                </Grid>
            
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {state: state.state, responsive: state.responsive}
}

const mapDispatchToProps = dispatch => {
    return {
        pullEmojis: () => dispatch(StateActions.pullEmojiData()),
        resizeWindow: (newWidth, newHeight) => dispatch(ResponsiveActions.resizeWindow(newWidth, newHeight))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)