import React, {Component} from 'react';
import {connect} from 'react-redux'
import EmojiListItem from './EmojiListItem';
import { TextField } from '@material-ui/core';

import * as StateActions from '../../Actions/state'

class EmojiList extends Component {

    getEmojiKeys = () => {
        if (!this.props.state.list) { return [] }
        return Object.keys(this.props.state.list)
    }

    getFilteredEmojiKeys = () => {
        let q = this.props.state.search_query
        let keys = this.getEmojiKeys()
        if (!q || q === "" || keys === []) { return [] }


        //I cant be bothered doing regexps right now

        // let list = this.props.state.list
        // keys = keys.filter(item => {
        //     let 
        // })


        return keys
    }

    onSearchFieldChange = (newValue) => {
        // console.log(newValue.target.value)
        this.props.setSearchQuery(newValue.target.value)
    }

    searchbarStyle = {
        marginBottom: "10px"
    }

    render() {
        return (
            <div className="EmojiList">

                <TextField
                    label="Search"
                    fullWidth
                    style={this.searchbarStyle}
                    // multiline
                    onChange={this.onSearchFieldChange}
                />

                {
                    this.getFilteredEmojiKeys().map(item => // if there are items to display
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
    return {
        setSearchQuery: newQ => dispatch(StateActions.setSearchQuery(newQ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiList)