import { useEffect } from "react";
import { useTodoContext } from "../Context/TodoContextProvider";

function TodoList() {
  const { todos, removeTodo } = useTodoContext();

  useEffect(()=>{
  }, [todos])

  return (
    <ul className="todos">
      {todos.length
        ? todos.map((item, idx) => {
            return (
              <div className="todo" key={idx}>
                <li key={idx}>
                  {item.title} 
                </li>
                <span title="Delete" className="del-btn" onClick={() => removeTodo(idx, item.id)}> X </span>
              </div>
            );
          })
        : <h1> List Empty </h1>}
    </ul>
  );
}

export default TodoList;
