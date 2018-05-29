import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Grid} from '@material-ui/core';
// import {  } from '@material-ui/core';

import * as StateActions from '../../Actions/state'
import EmojiPlatformViewer from './EmojiPlatformViewer';

class EmojiInfo extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         width: window.innerWidth
    //     }
    // }

    getSelectedEmoji = () => {
        if (!this.props.state.selected_id) {
            return null
        }
        if (!this.props.state.list[this.props.state.selected_id]) {
            return null
        }

        return this.props.state.list[this.props.state.selected_id]
    }

    deselectEmoji = () => {
        this
            .props
            .setSelectedID(null)
    }

    // componentWillMount() {
    //     window.addEventListener('resize', this.handleWindowSizeChange);
    // }
      
    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.handleWindowSizeChange);
    // }
      
    // handleWindowSizeChange = () => {
    //     this.setState({ width: window.innerWidth });
    // };

    render() {
        return (
            <div className="EmojiInfo">

                {
                    (this.getSelectedEmoji())
                        ? <ThisEmoji 
                            item={this.getSelectedEmoji()} 
                            deselectEmoji={this.deselectEmoji}
                            windowWidth={this.props.responsive.windowWidth}/>
                        : "Nothing Selected"
                }

            </div>
        );
    }
}

class ThisEmoji extends Component {
    render() {
        return (
            <div className="EmojiInfo">
                {
                    (this.props.windowWidth < 600)
                        ?   <div style={{
                                overflow: "auto"
                            }}>
                                <Button
                                    variant="raised"
                                    color="primary"
                                    onClick={this.props.deselectEmoji}
                                    style={{
                                    float: "right"
                                }}>
                                    Go Back
                                </Button>
                            </div>
                        :   null
                }

                <h1 style={{
                    textAlign: "left"
                }}>
                    {this.props.item.emoji}
                    {this.props.item.name}
                </h1>

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <EmojiPlatformViewer/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <EmojiPlatformViewer/>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {state: state.state, responsive: state.responsive}
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedID: id => dispatch(StateActions.setSelectedID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiInfo)