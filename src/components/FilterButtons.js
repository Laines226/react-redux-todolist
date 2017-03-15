import React from 'react';

const FilterButtons = ({filterTerm, onButtonClick}) => {
  let buttonValues = ["all", "done", "incomplete"];
  let buttons = buttonValues.map((buttonValue, index) => {
    let buttonCn = "filterButton";
    console.log("FilterButtons [filterTerm, buttonValue]", filterTerm, buttonValue);
    if(filterTerm === buttonValue){
    console.log("FilterButtons [filterTerm, buttonValue] true", filterTerm, buttonValue);
      buttonCn += " selected";
    }
    return <button className={buttonCn} key={index} onClick={() => { onButtonClick(buttonValue) }} >{buttonValue}</button>  
  });
  return <div className="filterButtons">{buttons}</div>
}

FilterButtons.propTypes ={
  filterTerm: React.PropTypes.oneOf(['all','done', 'incomplete']),
  onButtonClick: React.PropTypes.func.isRequired
}

export default FilterButtons;