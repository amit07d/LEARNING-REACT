import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";


function App() {

  return (

  <center className="todo_container">
    <AppName />
    <AddTodo />
    <div className="items_container">
    <TodoItem1 />
    <TodoItem2 />
    </div>
   
    </center>
  );
}

export default App;
