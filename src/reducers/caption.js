const caption = (state = {isVisible: true}, action) => {
    console.log('caption dispatcher',state,action)
    switch (action.type) {
        case 'TOGGLE':
            return {isVisible: !state.isVisible};
        default:
            return state;
    }
}

export default caption
