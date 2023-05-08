import style from "./footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <b className={style.b}>Team</b>
      <div className={style.cards}>
        <div className={style.card}>
          <p>Ann</p>
          <NavLink to="https://github.com/AnnScherer">
            <i className="fa-brands fa-github fa-lg"></i>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/anyamani-scherer-160538269/">
            <i className="fa-brands fa-linkedin"></i>
          </NavLink>
        </div>
        <div className={style.card}>
          <p>Eduard</p>
          <NavLink to="https://github.com/EduardMetzler">
            <i className="fa-brands fa-github fa-lg"></i>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/eduard-metzler-092a84216/">
            <i className="fa-brands fa-linkedin"></i>
          </NavLink>
        </div>
        <div className={style.card}>
          <p>Steffen</p>
          <NavLink to="https://github.com/exestiert">
            <i className="fa-brands fa-github fa-lg"></i>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/steffen-lemke-b27825224/">
            <i className="fa-brands fa-linkedin"></i>
          </NavLink>
        </div>

        <div className={style.card}>
          <p>Ramon</p>
          <NavLink to="https://github.com/RamonBerlin">
            <i className="fa-brands fa-github fa-lg"></i>
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/ramon-m-59b631261/">
            <i className="fa-brands fa-linkedin"></i>
          </NavLink>
        </div>
      </div>

      <NavLink className={style.impressum} to="/impressum">
        Impressum
      </NavLink>
      <div
        className={style.copyright}
      >{`Copyright © Final Projekt ${year}`}</div>
    </footer>
  );
  // ich bin eine änderung zum test
};

export default Footer;
