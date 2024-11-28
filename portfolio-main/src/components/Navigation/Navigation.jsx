import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaProjectDiagram } from "react-icons/fa";

const Navigation = () => {
  return (
    <ul className="header__nav">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "")}>
          <FaHome className="icon" /> Accueil
        </NavLink>
      </li>
      <li>
        <NavLink to="a-propos" className={({ isActive }) => (isActive ? "link-active" : "")}>
          <FaInfoCircle className="icon" /> À-propos
        </NavLink>
      </li>
      <li>
        <NavLink to="projets" className={({ isActive }) => (isActive ? "link-active" : "")}>
          <FaProjectDiagram className="icon" /> Projets
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;