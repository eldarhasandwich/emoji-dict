import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import { Paper } from '@material-ui/core';
// import {  } from '@material-ui/core';

import * as StateActions from '../../Actions/state'

class EmojiListItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isHovering: false
        }
    }

    setIsHoveringTrue = () => {
        this.setState({isHovering: true})
    }

    setIsHoveringFalse = () => {
        this.setState({isHovering: false})
    }

    getItemInfo = () => {
        return this.props.state.list[this.props.item]
    }

    onItemClick = () => {
        this.props.setSelectedID(this.props.item)
    }

    getPaperStyle = () => {
        return {
            marginBottom:"8px",
            padding:"4px",
            backgroundColor: (this.state.isHovering) ? "lightblue": "white",
            transition:"0.2s",
            cursor:"pointer"
        }
    }

    render() {
        return (
            <div className="EmojiListItem">

                    <Paper 
                        style={this.getPaperStyle()}
                        onClick={this.onItemClick}
                        onMouseEnter={this.setIsHoveringTrue}
                        onMouseLeave={this.setIsHoveringFalse}
                    >

                        {this.getItemInfo().name}

                    </Paper>
            
            </div>
        );
    }
}

EmojiListItem.propTypes = {
    item: PropTypes.string
};

const mapStateToProps = state => {
    return {state: state.state}
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedID: id => dispatch(StateActions.setSelectedID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiListItem)