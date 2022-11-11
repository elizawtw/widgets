import React, { useState } from "react";

const Accordion = ({ items }) => {
  //initialize state
  const [activeIndex, setActiveIndex] = useState(null);

  //helper function to click on title
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => {
            onTitleClick(index);
          }}
        >
          {" "}
          {/*use arrow function because we don't want the onTitleClick function to invoke at instant when our list of items are rendered*/}
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  );
};
export default Accordion;
