const filterterm = (state = "all", action) => {
    switch (action.type) {
        case 'SET_FILER_TERM':
            console.log("filterterm reducer [filter]", action.filter);
            console.log("filterterm reducer [state]", state);
            return action.filter;
        default:
            return state
    }
}

export default filterterm;