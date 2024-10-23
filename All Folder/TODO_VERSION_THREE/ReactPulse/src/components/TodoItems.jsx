import { useContext } from "react";
import { TodoItemsContext } from "../store/todo_items_store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
