import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Artemiy Grishin</h2>

      <div className="nav-links">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/about">Обо мне</NavLink>
        <NavLink to="/portfolio">Портфолио</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;