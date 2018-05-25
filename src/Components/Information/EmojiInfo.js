import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button} from '@material-ui/core';
// import {  } from '@material-ui/core';

import * as StateActions from '../../Actions/state'

class EmojiInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            width: window.innerWidth
        }
    }

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

    componentWillMount() {
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
            <div className="EmojiInfo">

                {
                    (this.getSelectedEmoji())
                        ? <ThisEmoji 
                            item={this.getSelectedEmoji()} 
                            deselectEmoji={this.deselectEmoji}
                            windowWidth={this.state.width}/>
                        : "Nothing Selected"
                }

            </div>
        );
    }
}

class ThisEmoji extends Component {
    render() {
        return (
            <div>
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

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {state: state.state}
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedID: id => dispatch(StateActions.setSelectedID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiInfo)