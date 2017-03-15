const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log("todo reducer [text]", action.text);
            console.log("todo reducer [state.todos]", state);
            return [...state, {
                text: action.text,
                id: action.id,
                completed: false
            }];
        case 'TOGGLE_TODO':
            console.log("todo reducer [text]", action.id);
            console.log("todo reducer [state.todos]", state);
            return state.map((todo) => {
                if (todo.id === action.id) {
                   return {...todo,  completed: !todo.completed };
                }
                return todo;
            })
        default:
            return state
    }
}

export default todos;