import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import NotFound from "./NotFound";
import Logout from "./Logout";
import { useUserContext } from "../Context/UserContext";
import ThemeButton from "./ThemeButton";

function Navbar() {
  const {user} = useUserContext()
  return (
    <>
      <div className="navbar">
        <Link to={"/"} className="logo App-link">TODO</Link>
        {
          !user?<>
                <Link to={"/login"} className="App-link">Login</Link>
                <Link to={"/register"} className="App-link"> Register </Link>
              </>:null
        }
        {
          user?<>
                <Link to={"/logout"} className="App-link">Logout</Link>
                <div className="logo"> @{user} </div>
          </>:null
        }
        <ThemeButton />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Navbar;
