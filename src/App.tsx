import "./App.css";
import Login from "./pages/Login";

function App() {
  // Con firebase vamos a obtener si el usuario esta logueado o no (true o false) si esta logueado
  // {token ? Home : Login}
  return <Login />;
}

export default App;
