import { useState , useRef} from "react";
import { SiAddthis } from "react-icons/si";
function AddTodo({ onNewItem }) {
  /*
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");*/
  const todoElementName= useRef();
  const dueDateElement = useRef();
/*

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
*/
  const handleAddButtonClicked = (event) => {
   /* console.log(event);*/
    event.preventDefault();
    const todoName = todoElementName.current.value;
    const dueDate = dueDateElement.current.value;
    todoElementName.current.value ="";
    dueDateElement.current.value ="";

    console.log(`${todoName} due on :${dueDate}`);

    onNewItem(todoName, dueDate);
   /* setDueDate("");
    setTodoName("");*/
  };

  return (
    <div classNameName="container text-center">
      <form classNameName="row kg-row"
       onSubmit={handleAddButtonClicked}>
        
        <div classNameName="col-6">
          <input
            type="text"
            ref={todoElementName}
            placeholder="Enter Todo Here"
           /* value={todoName}*/
            /*
            onChange={handleNameChange}*/
          />
        </div>
        <div classNameName="col-4">
          <input type="date" 
          ref={dueDateElement}
         /* value={dueDate}/* onChange={handleDateChange}*/ />
        </div>
        <div classNameName="col-2">
          <button
           
            classNameName="btn btn-success kg-button"
           
          >
          <SiAddthis />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;