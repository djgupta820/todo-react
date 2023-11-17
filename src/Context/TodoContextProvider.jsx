import React, { useContext, createContext, useState, useEffect } from "react";
import TodoAPI from "../APIs/todoAPIs";
import { useUserContext } from "./UserContext";

const TodoContext = createContext();

function TodoContextProvider({ children }, props) {
  const [todos, setTodos] = useState([]);
  const {user} = useUserContext()

  useEffect(() => {
    TodoAPI.getAllTodo().then((res) => {
      const tds = res.filter((item, idx) => {
        return item.user === user
      })
      setTodos(tds);
    });
  }, [user]);

  const addNewTodo = (item) => {
    TodoAPI.addNewTodo(item);
    setTodos([...todos, item]);
    // console.log(todos);
  };

  const removeTodo = (idx, id) => {
    TodoAPI.removeTodo(id);
    const newList = todos.filter((_, indx) => {
      return indx !== idx;
    });

    setTodos(newList);
  };

  const contextValue = {
    todos,
    addNewTodo,
    removeTodo,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
export default TodoContextProvider;
