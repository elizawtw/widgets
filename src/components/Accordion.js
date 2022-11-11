import React, { useState } from "react";

const Accordion = ({ items }) => {
  //initialize state
  const [activeIndex, setActiveIndex] = useState(null);

  //helper function to click on title
  const onTitleClick = (index) => {
    setActiveIndex(index); //entire component will rerender
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => {
            onTitleClick(index);
          }}
        >{/*use arrow function because we don't want the onTitleClick function to invoke at instant when our list of items are rendered*/}
          <i className="dropdown icon"></i>
          
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      
    </div>
  );
};
export default Accordion;
