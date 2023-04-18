import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import style from "./dicer/DicerStyle.module.css";
import DicerPoolDThree from "./dicer/dThree";

const Header = () => {
  const navigate = useNavigate();
  const [checkStatus, setChange] = useState(false);
  const [show, setShow] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = useContext(userContext);

  const handleSth = (e) => {
    setChange(!checkStatus);
    if (e.target.value === 0) {
      setShow(false);
    } else setShow(!show);
  };

  const logout = async (e) => {
    setIsLoggedIn(false);
    setChange(!checkStatus);
    const response = await axios.get(
      "http://localhost:3001/user/delete-cookie",
      { withCredentials: true }
    );
    if (response) {
      return navigate("/");
    }
    if (e.target.value === 0) {
      setShow(false);
    } else setShow(!show);
  };

  return (
    <nav role="navigation">
      <div id="menuToggle">
        <input checked={show} onClick={handleSth} readOnly type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li onClick={handleSth}>
            {" "}
            <NavLink to="/">Home</NavLink>
          </li>
          {!isLoggedIn ? (
            <>
              <li onClick={handleSth}>
                <NavLink to="/login">Login</NavLink>
              </li>

              <li onClick={handleSth}>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          ) : (
            <>
              <li onClick={handleSth}>
                {" "}
                <NavLink>Wiki</NavLink>
                <ul>
                  <li onClick={handleSth}>
                    <NavLink to="/Völker">Völker</NavLink>
                  </li>
                  <li onClick={handleSth}>
                    <NavLink to="/zauber">Zauber</NavLink>
                  </li>
                </ul>
              </li>

              <li onClick={handleSth}>
                <NavLink to="/myspells">Meine Zauber</NavLink>
              </li>

              <li onClick={logout}>
                <NavLink>Logout</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-desktop">
        <ul>
          <li onClick={handleSth}>
            <NavLink to="/">Home</NavLink>
          </li>

          {!isLoggedIn ? (
            <>
              <li onClick={handleSth}>
                {" "}
                <NavLink to="/login">Login</NavLink>
              </li>

              <li onClick={handleSth}>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          ) : (
            <>
              <li onClick={handleSth}>
                {" "}
                <NavLink to="/myspells">Meine Zauber</NavLink>
              </li>

              <li onClick={logout}>
                <NavLink>Logout</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      {/* Würfel-logo */}
      <div className="logoContainer">
        <DicerPoolDThree />
      </div>
    </nav>
  );
};

export default Header;
