import { useState } from 'react'
import React from 'react'
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {
  const [count, setCount] = useState(0)


// let [textToShow , setTextState] = useState();
let [foodItems, setFoodItems] = useState([]);

//  console.log(`cuurent value of text state ${textToShow}`);
 //let textToShow = "food entered by user";

 const onKeyDown = (event) => {
  if(event.key === "Enter"){
    let newFoodItem = event.target.value;
    let newItems = [...foodItems, newFoodItem];
    setFoodItems(newItems);
    console.log(newFoodItem);
  }
   };


  return (
    <>
    <Container>
    <h1 className='food-heading'>Healthy Food</h1>
    <FoodInput handleKeyDown={onKeyDown}></FoodInput>
    <ErrorMessage items={foodItems}></ErrorMessage>
    {/* {<p>{textToShow}</p>} */}
    <FoodItems items={foodItems}></FoodItems>
    </Container>

    {/* <Container>
      <p>The Above food mentioned is actually good for your health and well being. </p>
    </Container> */}


</>
  )
}

export default App
history