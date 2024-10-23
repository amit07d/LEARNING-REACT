import { useState } from "react";

function AddTodo({ onNewItem }) {
  
  const [todoName, setTodoName] = useState()
  const [dueDate, setDueDate] = useState()
  
  const handleNameChange = (event) => {
    setTodoName(event.target.value);

  }
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handleOnButtonClicked = (e) => {
    onNewItem(todoName, dueDate)
    setDueDate();
    setTodoName();
  }


    return (
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange}/>
          </div>
          <div className="col-4">
            <input type="date" onChange={handleDateChange}/>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success kg-button"
            onClick={handleOnButtonClicked}>
              Add
            </button >
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;