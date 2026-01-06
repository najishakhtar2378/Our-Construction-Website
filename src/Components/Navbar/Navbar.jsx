import { NavLink } from 'react-router-dom';
import logo from "../Assets/najishlogo.jpg";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <h3>Najish Construction Solutions</h3>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
             Our Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
             Our Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>
           Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
