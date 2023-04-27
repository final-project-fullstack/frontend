import { NavLink } from "react-router-dom";
import style from "./character.module.css"

const Layout = ({children}) => {
  return (
    <div>
      <nav className={style.navbar}>
        <NavLink to="charakter-erstellen/volk-auswählen">1. Völker</NavLink>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
