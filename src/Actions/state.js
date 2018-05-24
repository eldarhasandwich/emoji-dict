
export function pullEmojiData () {
    return {
        type: "PULL_EMOJI_DATA"
    }
}

export function setSelectedID (selectedID) {
    return {
        type: "SET_SELECTED_ID",
        selectedID
    }
}

export function setSearchQuery (searchQuery) {
    return {
        type: "SET_SEARCH_QUERY",
        searchQuery
    }
}
