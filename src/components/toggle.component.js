import React from 'react'

const Toggle = ({options, toggleFunction}) => {

  const toggleRef = React.useRef();

  function handleToggle(option) {
    switch (option) {
      case 0:
        toggleRef.current.checked = false;
        toggleFunction(option);
        break;
      case 1:
        toggleRef.current.checked = true;
        toggleFunction(option);
        break;
      default:
        toggleFunction(option);
    }
  }

  return(
    <div className="toggle-container">
      <span onClick={() => handleToggle(0)} className="toggle-option-0">{options[0]}</span>
      <label className="toggle">
        <input onClick={() => handleToggle()} ref={toggleRef} type="checkbox"/>
        <span></span>
      </label>
      <span onClick={() => handleToggle(1)} className="toggle-option-1">{options[1]}</span>
    </div>
  );
}

export default Toggle;
