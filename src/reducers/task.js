const task = (state = {items: []}, action) => {
    console.log('task dispatcher',state,action)
    switch (action.type) {
        case 'ADD_TASK':
            return {items: []};
        default:
            return state;
    }
}

export default task
