import React, {Component} from 'react';
import {connect} from 'react-redux'
// import {  } from '@material-ui/core';


class EmojiInfo extends Component {

    getSelectedEmoji = () => {
        if (!this.props.state.selected_id) { return null }
        if (!this.props.state.list[this.props.state.selected_id]) { return null }

        return this.props.state.list[this.props.state.selected_id]
    }

    render() {
        return (
            <div className="EmojiInfo">
            
                {
                    (this.getSelectedEmoji())
                        ? <ThisEmoji item={this.getSelectedEmoji()}/>
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

                <h1 style={{textAlign:"left"}}>
                    {this.props.item.emoji} {this.props.item.name}
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiInfo)