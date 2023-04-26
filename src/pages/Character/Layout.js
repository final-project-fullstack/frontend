import { NavLink } from "react-router-dom";
import style from "./character.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className={style.navbar}>
        <NavLink to="charakter-erstellen/volk-auswählen">1. Völker</NavLink>
        <NavLink to="charakter-erstellen/klasse-auswählen">2. Klassen</NavLink>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
