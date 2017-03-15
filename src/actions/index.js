let nextTodoId = 0;
const ADD_TODO = 'ADD_TODO';
const SET_FILER_TERM = 'SET_FILER_TERM';
const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = (text) => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export const setFilterTerm = (filter) => ({
    type: SET_FILER_TERM,
    filter
});
