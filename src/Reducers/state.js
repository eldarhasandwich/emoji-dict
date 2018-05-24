const data = require('../Resources/data')

const defaultState = {
    selected_id: null,
    search_query: null,
    list: null
}

const state = (state = defaultState, action) => {
    switch (action.type) {
        case 'PULL_EMOJI_DATA': {
            return {
                ...state,
                list: data.list
            }
        }

        case 'SET_SELECTED_ID': {
            return {
                ...state,
                selected_id: action.selectedID
            }
        }

        default: {
            return state
        }

    }
}

export default state