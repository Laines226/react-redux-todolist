import React from 'react';

const FilterButtons = ({filterterm, onButtonClick}) => {
  let buttonValues = ["all", "done", "incomplete"];
  let buttons = buttonValues.map((buttonValue, index) => {
    let buttonCn = "filterButton";
    console.log("FilterButtons [filterterm, buttonValue]", filterterm, buttonValue);
    if(filterterm === buttonValue){
    console.log("FilterButtons [filterterm, buttonValue] true", filterterm, buttonValue);
      buttonCn += " selected";
    }
    return <button className={buttonCn} key={index} onClick={() => { onButtonClick(buttonValue) }} >{buttonValue}</button>  
  });
  return <div className="filterButtons">{buttons}</div>
}

FilterButtons.propTypes ={
  filterterm: React.PropTypes.oneOf(['all','done', 'incomplete']),
  onButtonClick: React.PropTypes.func.isRequired
}

export default FilterButtons;