/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { todos } = props;
  return (
    <div>
      <ul className="main">
        {todos.map((todo, index) => {
          return (
            <TodoCard {...props} key={index} index={index}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
