import { useState } from "react";
const TodoInput = (props) => {
  const { handleAddTodo, todoValue, setTodoValue } = props;
  // const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <input
        placeholder="Enter todo ..."
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter" && todoValue !== "") {
            handleAddTodo(todoValue);
            setTodoValue("");
          }
        }}
      />
      <button
        onClick={() => {
          if (todoValue !== "") {
            handleAddTodo(todoValue);
            setTodoValue("");
          }
        }}
      >
        Add
      </button>
    </header>
  );
};

export default TodoInput;
