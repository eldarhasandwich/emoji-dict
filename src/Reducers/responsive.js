
const defaultState = {
    windowWidth: 0,
    windowHeight: 0
}

const state = (state = defaultState, action) => {
    switch (action.type) {
        case "RESIZE_WINDOW": {
            return {
                ...state,
                windowWidth: action.newWidth,
                windowHeight: action.newHeight
            }
        }

        default: {
            return state
        }

    }
}

export default state