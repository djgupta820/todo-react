import "./App.css";
import Navbar from "./Components/Navbar";
import { useThemeContext } from "./Context/ThemeContextProvider";
import UserContextProvider from "./Context/UserContext";

function App() {
  const {theme} = useThemeContext()
  return (
    <UserContextProvider>
      <div className={`App ${theme}`}>
        <Navbar />
      </div>
    </UserContextProvider>
  );
}

export default App;
