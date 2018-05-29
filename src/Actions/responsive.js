
export function resizeWindow (_newWidth, _newHeight) {
    return {
        type: "RESIZE_WINDOW",
        newWidth: _newWidth,
        newHeight: _newHeight
    }
}