import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecoverPassword from "./pages/RecoverPassword";
import Home from "./pages/Home";

function App() {
  // Con firebase vamos a obtener si el usuario esta logueado o no (true o false) si esta logueado
  // {token ? Home : Login}
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recover-password" element={<RecoverPassword />} />
    </Routes>
  );
}

export default App;
