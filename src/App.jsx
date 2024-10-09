import { useState } from 'react'
import React from 'react'
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMessage from './components/ErrorMessage'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {
  const [count, setCount] = useState(0)

 let foodItems = ['Dal', 'Green Veggies', 'Roti', 'Salad', 'Milk','Cheese','Water'];

 const handleOnChange = (event) => {
   console.log(event.target.value);
   };

  return (
    <>
    <Container>
    <h1 className='food-heading'>Healthy Food</h1>
    <ErrorMessage items={foodItems}></ErrorMessage>
    <FoodInput handleOnChange={handleOnChange}></FoodInput>
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