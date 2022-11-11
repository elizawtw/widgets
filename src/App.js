import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: 'What is React?',
    content: 'React is javascript front end library.'
  },
  {
    title: 'Why use React?',
    content: 'React is popular and used by many developers.'
  },
  {
    title: 'Who created React?',
    content: 'A team of developers from Facebook.'
  }
]

const App = () => {
  
  return (
    <div>
     <Search />
      {/* { <Accordion items={items}/> /*name of prop is items and the value is the items array */} 
    </div>
  );
};
export default App;
