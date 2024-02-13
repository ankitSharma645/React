

import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

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
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group=item">
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
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group=item">
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

function App() {
    
  // let foodItems =[];
  let foodItems = ["dal", "Green vegetable", "roti", "salad", "milk"];

  return (
    <>
        
        <Container>
          <h1 className="food-heading"> Heallthy Food</h1>
          <FoodInput></FoodInput>
          <ErrorMessage items ={foodItems}></ErrorMessage>
          <FoodItems items ={foodItems}></FoodItems>

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