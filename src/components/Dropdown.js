import React, {useState, useEffect, useRef} from "react";

const Dropdown = ({options, selected, onSelectedChange}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef();

useEffect(() => {
  document.body.addEventListener('click', (e) => { //this get called before react listeners
    if(ref.current.contains(e.target)){ //contains check whether one element is contained inside another element
      return;
    }
    setOpen(false);
  }, {
    capture: true
  })
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

  console.log(ref.current)

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">Select a color</label>
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