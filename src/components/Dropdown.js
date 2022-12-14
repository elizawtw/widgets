import React, {useState, useEffect, useRef} from "react";

const Dropdown = ({options, selected, onSelectedChange, label}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef();

useEffect(() => {
  const onBodyClick = (e) => {
    if(ref.current.contains(e.target)){ //contains check whether one element is contained inside another element
      return;
    }
    setOpen(false);
  
  }
  document.body.addEventListener('click', onBodyClick, {
    capture: true
  });

  return() => {
    document.body.removeEventListener('click', onBodyClick, {
      capture: true,    })
  }
},[]) //only run one time with empty array

  const renderOptions = options.map((option) => {
    if(option.value === selected.value){
      return null;
//null in react means don't render anything    }
    }
    return(
      <div key={option.value} onClick={()=> onSelectedChange(option)} className="item">
        {option.label}
      </div>
    )
  })

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div onClick={() => setOpen(!open)} className={`menu ${open ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown;