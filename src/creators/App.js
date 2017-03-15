import { connect } from 'react-redux'
import { addTodo, toggleTodo, setFilterTerm } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state, ownProps) => {
    console.log("mapStateToProps [state]", state);
    return {
        todos: state.todos,
        filterterm: state.filterterm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setFilterTerm: (filter) => {
            dispatch(setFilterTerm(filter))
        },
        addTodo: (text) => {
            dispatch(addTodo(text))
        },
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default App;