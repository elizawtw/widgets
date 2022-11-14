import React from "react";
import {useState} from 'react';
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is javascript front end library.",
  },
  {
    title: "Why use React?",
    content: "React is popular and used by many developers.",
  },
  {
    title: "Who created React?",
    content: "A team of developers from Facebook.",
  },
];

const options = [
  {
    label: "The color of red",
    value: "red",
  },
  {
    label: "The color of green",
    value: "green",
  },
  {
    label: "The color of blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)
  return (
    <div>
      {/* <Search /> */}
      {/* { <Accordion items={items}/> /*name of prop is items and the value is the items array */}
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ? 
      <Dropdown 
      selected={selected}
      onSelectedChange={setSelected} 
      options={options} />
      : null}
    </div>
  );
};
export default App;
