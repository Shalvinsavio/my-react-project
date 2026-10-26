import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark p-3">
        <Link className="nav-link text-white" to="/login">
          Login
        </Link>

        <Link className="nav-link text-white" to="/register">
          Register
        </Link>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


  