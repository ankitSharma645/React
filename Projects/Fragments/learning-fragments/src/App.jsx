

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

// 1st method {if-else}
/*
function App() {
  let foodItems =[];
//  let foodItems = ["dal", "Green vegetable", "roti", "salad", "milk"];

  if(foodItems.length===0){
    return <h3> Im still hungry</h3>
  }

  return (
    <>
      <h1> Healthy food</h1>
      <ul classNameName="list-group">
        {foodItems.map((item) => (
          <li key={item} classNameName="list-group=item">
            {item}

          </li>
        )

        )}

      </ul>
    </>
  )

}

export default App
*/
/*
// 2nd method for conditional rendering
function App() {

  let foodItems =[];
 // let foodItems = ["dal", "Green vegetable", "roti", "salad", "milk"];

 let emptyMessage = foodItems.length===0? <h3> Im still hungry</h3> : null;

  return (
    <>
      <h1> Healthy food</h1>

      {emptyMessage}
      <ul classNameName="list-group">
        {foodItems.map((item) => (
          <li key={item} classNameName="list-group=item">
            {item}

          </li>
        )

        )}

      </ul>
    </>
  )

}

export default App
*/

// 3nd method for conditional rendering
/*
function App() {

  // let foodItems =[];
  let foodItems = ["dal", "Green vegetable", "roti", "salad", "milk"];

  let textStateArr = useState("Food Item Entered by user");
  let textToshow = textStateArr[0];
  let setTextState = textStateArr[1];

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  }

  return (
    <>

      <Container>
        <h1 classNameName="food-heading"> Heallthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToshow}</p>
        <FoodItems items={foodItems}></FoodItems>

      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and well being
        </p>
      </Container>





    </>
  )

}

export default App;

*/


function App() {
/*
  let[foodItems,setFoodItems] = useState(["dal", "Green vegetable"]);*/
  
  let[foodItems,setFoodItems] = useState([]);


  const onKeyDown = (event)=>{
    console.log(event.key);
    if(event.key =="Enter"){
      let newFoodItem = event.target.value;
      event.target.value ="";
      
      let newItems = [...foodItems ,newFoodItem];
      setFoodItems(newItems);
    }
  };


  return (
    <>

      <Container>
        <h1 classNameName="food-heading"> Heallthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>

      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and well being
        </p>
      </Container>
      
    </>
  )

}

export default App;

