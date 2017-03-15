import React from 'react';

const InputField = ({ addTodo }) => {
    let inputValue = "";
    function handleClick() {
        addTodo(inputValue.value);
    }
    return (
        <div className="searchBar">
            <input className="searchBarItem" ref={input => inputValue = input}
                onKeyPress={(event) => { if (event.key === 'Enter') { handleClick } }}
                type="text" placeholder="Oh i need to remember ..." />
            <button className="searchBarItem" onClick={handleClick} >Add</button>
        </div>
    );
}

InputField.propTypes = {
    addTodo: React.PropTypes.func.isRequired
}

export default InputField;