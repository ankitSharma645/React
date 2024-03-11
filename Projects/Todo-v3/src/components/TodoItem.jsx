import { AiFillDelete } from "react-icons/ai";



function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <div classNameName="container">
      <div classNameName="row kg-row">
        <div classNameName="col-6">{todoName}</div>
        <div classNameName="col-4">{todoDate}</div>
        <div classNameName="col-2">
          <button
            type="button"
            classNameName="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
           <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
