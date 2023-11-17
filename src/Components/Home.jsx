import React from "react";
import TodoForm from "../Components/TodoForm"
import TodoContextProvider from "../Context/TodoContextProvider";
import TodoList from "../Components/TodoList";
import { useUserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

function Home() {
  const {user} = useUserContext()
  return (
    <div style={{marginTop: '2em'}}>
      {
        user ?
          <TodoContextProvider>
            <TodoForm />
            <TodoList />
          </TodoContextProvider>
        : <> <h1>Please login</h1> <p> Click here to <Link to={'/login'}> Login </Link></p> </>
      }
    </div>
  );
}

export default Home;
