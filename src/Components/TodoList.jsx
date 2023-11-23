import { useEffect } from "react";
import { useTodoContext } from "../Context/TodoContextProvider";
import { useThemeContext } from "../Context/ThemeContextProvider";
import {faDeleteLeft} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function TodoList() {
  const { todos, removeTodo } = useTodoContext();
  const {theme} = useThemeContext()

  useEffect(()=>{
  }, [todos])

  return (
    <ul className={`todos`}>
      {todos.length
        ? todos.map((item, idx) => {
            return (
              <div className={`todo bd-${theme}`} key={idx}>
                <li key={idx}>
                  {item.title} 
                </li>
                <FontAwesomeIcon icon={faDeleteLeft} className="del-btn" onClick={() => removeTodo(idx, item.id)} title=" Delete if Completed " />
              </div>
            );
          })
        : <h1> List Empty </h1>}
    </ul>
  );
}

export default TodoList;
