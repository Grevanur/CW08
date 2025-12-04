import React from "react";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import FilteredList from "./FilteredList";
import "./App.css";

const produce = [
  { name: "Apple", type: "Fruit" },
  { name: "Pineapple", type: "Fruit" },
  { name: "Banana", type: "Fruit" },
  { name: "Pear", type: "Fruit" },
  { name: "Strawberry", type: "Fruit" },
  { name: "Orange", type: "Fruit" },
  { name: "Lettuce", type: "Vegetable" },
  { name: "Cucumber", type: "Vegetable" },
  { name: "Eggplant", type: "Vegetable" },
  { name: "Squash", type: "Vegetable" },
  { name: "Bell pepper", type: "Vegetable" },
  { name: "Onion", type: "Vegetable" }
];

function App() {
  return (
    <div className="App">

      <HelloWorld name="Gowtham Revanur" />

      <Counter />

      <h2>Produce Filter</h2>
      <FilteredList items={produce} />

    </div>
  );
}

export default App;