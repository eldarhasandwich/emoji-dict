import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import { AppBar, Toolbar, Grid, Paper } from '@material-ui/core';
import EmojiList from '../List/EmojiList';
import EmojiInfo from '../Information/EmojiInfo';

import * as StateActions from '../../Actions/state'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth
        }
    }

    componentWillMount() {
        this.props.pullEmojis()
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }
      
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
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
                        this.state.width < 600 && this.props.state.selected_id
                            ?   null
                            :   <Grid item xs={12} sm={3}>
                                    <EmojiList/>
                                </Grid>
                    }

                    {
                        this.state.width < 600 && !this.props.state.selected_id
                            ?   null
                            :   <Grid item xs={12} sm={9}>
                                    <EmojiInfo/>
                                </Grid>
                    }

                </Grid>
            
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {state: state.state}
}

const mapDispatchToProps = dispatch => {
    return {
        pullEmojis: () => dispatch(StateActions.pullEmojiData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)