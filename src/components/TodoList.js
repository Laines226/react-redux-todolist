import React from 'react';
import InputField from './InputField';
import FilterButtons from './FilterButtons';

const TodoList = ({todos, setFilterTerm, filterterm, addTodo, toggleTodo}) => {
  let todosToShow = todos.map((element, index) => {
    if (filterterm === 'all' || (filterterm === 'done' && element.completed) || (filterterm === 'incomplete' && !element.completed)) {
      return <li key={index} className="todoUnsortedListItem"><input type="checkbox" checked={element.completed} onChange={() => { toggleTodo(element.id) }} /> {element.text}</li>
    }
    else {
      return null;
    }
  });
  return (
    <div className="todolist">
      <div className="todolistTitleDiv">
        <h2 className="todolistTitle">Todo-List</h2>
      </div>
      <InputField addTodo={addTodo} />
      <FilterButtons onButtonClick={setFilterTerm} filterterm={filterterm} />
      <ul className="todoUnsortedList" style={{ listStyle: 'none' }}>
        {todosToShow}
      </ul>
    </div>
  );
}

TodoList.propTypes ={
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    completed: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default TodoList;
