const defaultState = {
    selected_id: null,
    search_query: null,
    list: {
        a: {
            name: "smileyA"
        },
        b: {
            name: "smileyB"
        },
        c: {
            name: "smileyC"
        },
        d: {
            name: "smileyD"
        }
    }
}

const state = (state = defaultState, action) => {
    switch (action.type) {
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