import React, {Component} from 'react';
import {connect} from 'react-redux'
import EmojiListItem from './EmojiListItem';
import {  } from '@material-ui/core';

class EmojiList extends Component {

    getEmojiKeys = () => {
        return Object.keys(this.props.state.list)
    }

    getFilteredEmojiKeys = () => {
        return this.getEmojiKeys()
    }

    render() {
        return (
            <div className="EmojiList">

                {
                    this.getFilteredEmojiKeys().map(item => 
                        <EmojiListItem
                            key={item}
                            item={item}
                        />
                    )
                }

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {state: state.state}
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiList)