
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import Container from "./components/Container";
import { useState } from "react";

function App() {
 
  let [foodItems, setFoodItems] = useState([]);
  
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let NewFoodItem = event.target.value; 
      event.target.value = "";
      let newItems = [...foodItems, NewFoodItem];
      setFoodItems(newItems);
      //  
      }
  };

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown} />
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems} />
        <ErrorMessage items={foodItems} />
      </Container>
      {/* <Container>
         <p>This all the healthy foods that are good for health and well being..</p>
       </Container> */}
    </>
  );
}

export default App;


