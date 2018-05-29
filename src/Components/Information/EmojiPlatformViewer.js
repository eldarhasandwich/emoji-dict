import React, {Component} from 'react';
import {connect} from 'react-redux'
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
// import {  } from '@material-ui/core';

// import * as StateActions from '../../Actions/state'

class EmojiPlatformViewer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            platforms: [
                "Samsung",
                "Apple"
            ],
            selectedPlatform: null
        }
    }

    handleChange = event => {
        this.setState({selectedPlatform: event.target.value})
    }

    render() {
        return (
            <div className="EmojiPlatformViewer">

                <FormControl fullWidth>

                    <InputLabel>Platform</InputLabel>
                    <Select
                        value={this.state.selectedPlatform}
                        onChange={this.handleChange}
                    >
                    <MenuItem value={null}>None</MenuItem>
                    {
                        this.state.platforms.map(
                            item => <MenuItem key={item} value={item}>{item}</MenuItem>
                        )
                    }
                    </Select>

                </FormControl>

                <h3 style={{textAlign:"left"}}>
                    {this.state.selectedPlatform}
                </h3>

            </div>
        );
    }
}


const mapStateToProps = state => {
    return {state: state.state}
}

const mapDispatchToProps = dispatch => {
    return {
        // setSelectedID: id => dispatch(StateActions.setSelectedID(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiPlatformViewer)